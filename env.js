const fs = require('fs');
const env = process.env['uenv'] || process.argv[2] || 'prod';
const configPath = 'src/environments'
const configOut = `${configPath}/environment.js`;
console.log(`ENV: [${env}]`);
const configSource = `${configPath}/environment.${env}.js`;

if (fs.existsSync(configSource)) {
    console.log(`Copying: ${configSource}`);
    fs.access(configOut, (err) => {
        if (!!!err) {
            fs.unlink(configOut, (err) => {
                if (err) throw err;
                console.log(`${configOut} was deleted`);
            });
        }
    });
    fs.copyFile(configSource, configOut, (err) => {
        if (err) throw err;
        console.log(`${configSource} was copied to ${configOut}`);
    });
} else {
    console.log(`evironment [${env}] not found`);
}