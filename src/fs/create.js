import { writeFile } from 'fs';
import   path   from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, '/files/fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
        writeFile(pathToFile, content, { flag: 'wx' }, (err) => {
            if (err) {
                throw new Error('FS operation failed');
            }
        });
};

await create();