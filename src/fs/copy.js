import { mkdir, readdir, copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFolder = path.join(__dirname, '/files');
const targetFolder = path.join(__dirname, '/files_copy');

const copy = async () => {
    try {
        await mkdir(targetFolder);
        const entries = await readdir(sourceFolder);
        await Promise.all(entries.map(entry => copyFile(`${sourceFolder}/${entry}`, `${targetFolder}/${entry}`)));
    } catch (err) {
        throw new Error ('FS operation failed');
    }
};

await copy();
