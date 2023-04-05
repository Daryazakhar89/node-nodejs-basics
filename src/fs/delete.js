import {unlink} from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const pathToFileToBeRemove = path.join(__dirname, 'files/fileToRemove.txt');
    try {
        await unlink(pathToFileToBeRemove);
    } catch (err) {
        throw new Error ('FS operation failed');
    }
};

await remove();