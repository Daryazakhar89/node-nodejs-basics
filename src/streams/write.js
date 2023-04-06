import fs from 'fs';
import { pipeline } from 'stream/promises';

const pathToFile = './src/streams/files/fileToWrite.txt';

const write = async () => {
    await pipeline(process.stdin, fs.createWriteStream(pathToFile, { flags: 'a' }));
};

await write();