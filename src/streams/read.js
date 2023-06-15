import fs from 'fs';
import { pipeline } from 'stream/promises';

const pathToFile = './src/streams/files/fileToRead.txt';

const read = async () => {
    await pipeline(fs.createReadStream(pathToFile), process.stdout);
};

await read();