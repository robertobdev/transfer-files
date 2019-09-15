const fs = require('fs'),
    fse = require('fs-extra'),
    //rename this path to yours
    path = './example';

fs.readdirSync(`${path}`).forEach((fileName) => {
    
    const stats = fs.statSync(`${path}/${fileName}`);
    
    if (!stats.isFile()) {
        readContent(fileName);
    }
});

function readContent(pathContent) {
    fs.readdirSync(`${path}/${pathContent}`).forEach((fileName) => {
        if(fileName == 'metadados.json'){
            return;
        }
        copy(`${path}/${pathContent}/${fileName}`, fileName);
    });
};
function copy(pathAndFile, fileName) {
    console.log(pathAndFile, fileName);
    try {
        fse.copySync(`${pathAndFile}`, `./move_to_here/${fileName}`)
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
}