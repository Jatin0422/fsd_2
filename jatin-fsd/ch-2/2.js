function main(cb) {
    console.log('opereation 1')
    setTimeout(() => {
        cb('operation end')
        
    }, 2000)
    console.log('operation 2')
}
function fun(result) {
    console.log('final ans', result)
}
main(fun)