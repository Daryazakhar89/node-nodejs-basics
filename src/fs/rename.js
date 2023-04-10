import { rename as giveRenamedFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFile = path.join(__dirname, '/files/wrongFilename.txt');
const renamedFile = path.join(__dirname, '/files/properFilename.md');

const rename = async () => {
    try {
        await giveRenamedFile(sourceFile, renamedFile);
    }  catch (err) {
        throw new Error ('FS operation failed');
    }
};

await rename();