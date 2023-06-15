const parseEnv = () => {
       const rssVar = Object.entries(process.env).reduce((accumulator, [key, value]) => {
        if (key.startsWith('RSS_')) accumulator.push(`${key}=${value}`);
        return accumulator;
    }, []);

    console.log(rssVar.join('; '));
};

parseEnv();