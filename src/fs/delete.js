import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFileToBeRemove = path.join(__dirname, '/files/fileToRemove.txt');

const remove = async () => {
    try {
        await unlink(pathToFileToBeRemove);
    } catch (err) {
        throw new Error ('FS operation failed');
    }
};

await remove();