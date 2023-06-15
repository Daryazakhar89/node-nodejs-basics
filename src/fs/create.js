import { writeFile } from 'fs/promises';
import   path   from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, '/files/fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
    try{
        await writeFile(pathToFile, content, { flag: 'wx' })
    } catch (err) {
        throw new Error('FS operation failed');
    };
};

await create();