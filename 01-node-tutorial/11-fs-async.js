const {readFile, writeFile, appendFile} = require('fs')
const path = require('path')

const resultPath = path.resolve(__dirname, 'content', 'result-async.txt')

readFile(
    './content/first.txt',
    'utf-8',
    (err, result) => {
    if (err) throw (err)

    const first = result
    readFile(
        './content/second.txt', 
        'utf-8',
        (err, result) => {
            if (err) throw (err)

            const second = result
            writeFile(
                resultPath,
                `Here are the results: \n\t1. ${first}\n\t2. ${second}`,
                (err) => {
                    if (err) throw (err)

                    appendFile(
                        resultPath,
                        '\n54 68 73 20 69 73 20 74 68 65 20 66 69',
                        (err) => {
                            if (err) throw (err)
                            console.log('File Saved!')
                        }
                    )
                }
            )
        }
    )
})