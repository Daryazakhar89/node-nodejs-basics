import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const pathToFolder = path.join(__dirname, '/files');

    try {
        const arrayOfFileNames = await readdir(pathToFolder);
        console.log(arrayOfFileNames);
    } catch (err) {
        throw new Error ('FS operation failed');
    }
};

await list();