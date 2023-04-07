import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import {createBrotliCompress } from 'zlib';

const source = createReadStream('./src/zip/files/fileToCompress.txt');
const destination = createWriteStream('./src/zip/files/archive.gz');
const compression = createBrotliCompress();

const compress = async () => {
    await pipeline(source, compression, destination);
};

await compress();