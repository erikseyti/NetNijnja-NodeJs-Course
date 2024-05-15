const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt')
readStream.on('data', (chunk) => {
    console.log('-------NEW CHUNK -------');
    // esse comnando toString somente necessario se voce nao declarar o encoding no steaming
    // console.log(chunk.toString());
    console.log(chunk);
    writeStream.write()
})