fs = require('fs')
path = require('path')
let p = 'FSD-mern/path.txt'
let dir = path.dirname(p)
let fname = path.basename(p)
let newpath = dir + "/" + fname
fs.mkdir(dir, (err) => {
    if (err) throw err
    console.log('Directory made')
    fs.writeFile(newpath, 'Data write', (err) => {
        if (err) throw err 
        console.log('write sucess')
        fs.copyFile(newpath, dir + "/temp.txt", (err) => {
            if (err) throw err 
            console.log('file copied')
            fs.unlink(newpath, (err) => {
                if (err) throw err
                console.log('unlink done')
                console.log('All operation ended')
        })
    })
    })
})