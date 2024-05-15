const fs = require('fs');


// reading file
/* fs.readFile('./docs/example.txt', (error, data) => {
    if (error){
        console.log(error);
    }
    console.log(`data: ${data}`)
    console.log(data.toString())
    console.log(data)
})

console.log('last line') */

// writing files
/* fs.writeFile('./docs/example.txt', 'hello world!', () => {
    console.log('File was written!')
})

fs.writeFile('./docs/example2.txt', 'hello world!', () => {
    console.log('File was written!')
}) */

// directories
/* if (!fs.existsSync('./assets')){
    fs.mkdir("./assets", (error) => {
        if (error) {
            console.log(error);
        }
        console.log("folder created");
    })
}
else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted!')
    })
} */


// deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted!')
    })
}