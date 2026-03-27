fs = require('fs')

fs.mkdir('tempReports', (err) => {
    if (err) throw err
    fs.writeFile('tempReports/daily.txt', "Report Start\n", (err) => {
        if (err) throw err
        console.log('File created')
        fs.appendFile('tempReports/daily.txt', '"Entry 1: Success"\n, "Entry 2: Warning"\n,"Entry 3: Success"\n', (err) => {
            if (err) throw err
            console.log('File appended')
            fs.readFile('tempReports/daily.txt', 'utf-8', (err , data) => {
                if (err) throw err
                console.log('file read')
                count = data.split('Success').length
                if ((count - 1) >= 2) {
                    fs.unlink('tempReports/daily.txt', (err) => {
                        if (err) throw err
                        fs.rmdir('tempReports', (err) => {
                            if (err) throw err
                            console.log('folder deleted')
                        })
                    })
                   
                }
            })
        })
    })

})