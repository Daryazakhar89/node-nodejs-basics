const parseArgs = () => {
    const args = process.argv.slice(2);
    const argsInCorrectFormat = args.map((element, index, arr) => {
        if (element.startsWith('--')) {
            return `${element.replace('--', '')} is ${arr[index + 1]}`;
        }
    }).filter((element) => element);
    console.log(argsInCorrectFormat.join(', '))
};

parseArgs();