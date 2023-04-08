import { cpus } from 'os';
import { Worker } from 'worker_threads';

const coreNumber = cpus().length;

const createWokerPromise = (index) => {
    const initialValue = 10;
    const worker = new Worker('./src/wt/worker.js', { workerData: index + initialValue });

    return new Promise((res, rej) => {
        worker.on('message', res);
        worker.on('error', rej);
    });
};

const getCalculationLogFromSettledPromises = (settledPromises) => {
    return settledPromises.map((promiseResult) => {
        return {
            status: promiseResult.status === "fulfilled" ? "resolved" : "error",
            data: promiseResult.status === "fulfilled" ? promiseResult.value : null
        };
    });
};

const performCalculations = async () => {
    const promises = [];
    for (let i = 0; i < coreNumber; i++ ) {
        promises.push(createWokerPromise(i));
    }
    const settledPromises = await Promise.allSettled(promises);
    const calculationLog = getCalculationLogFromSettledPromises(settledPromises);

    console.log("calculationLog", calculationLog);
};

await performCalculations();