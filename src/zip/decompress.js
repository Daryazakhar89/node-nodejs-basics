import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';

const source = createReadStream('./src/zip/files/archive.gz');
const destination = createWriteStream('./src/zip/files/fileToCompress.txt');
const decompression = createBrotliDecompress();

const decompress = async () => {
    await pipeline(source, decompression, destination);
};

await decompress();