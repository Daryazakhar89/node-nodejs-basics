import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

const writableStream = process.stdout;
const readableStream = process.stdin;

const transform = async () => {
    const transformStream = new Transform ({
        transform(chunk, encoding, callback) {

            const chunkString = chunk.toString().trim();
            const reverseChankString = chunkString.split('').reverse().join('');

            callback(null, reverseChankString + '\n');
        },
      });

    await pipeline(
        readableStream,
        transformStream,
        writableStream
    );
};

await transform();