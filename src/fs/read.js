import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const pathToFile = path.join(__dirname, '/files/fileToRead.txt');

    try {
        const content = await readFile(pathToFile, 'utf-8');
        console.log(content);
    } catch (err) {
        throw new Error ('FS operation failed');
    }
};

await read();