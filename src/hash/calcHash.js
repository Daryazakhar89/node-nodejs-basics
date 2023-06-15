import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = path.join(__dirname, '/files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const content = await readFile(pathToFile);
    const modifiedContent = createHash('sha256').update(content).digest('hex');

    console.log(modifiedContent);
};

await calculateHash();