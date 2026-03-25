/*setTimeout(function () {
    console.log("ABC")
}, 5000)
setTimeout(() => {
    console.log('hello'.toUpperCase())
}, 1000)
const fun = function () {
    console.log('hello')
}
setTimeout(fun, 1000)*/
// digital clock
function ut() {
    const times = new Date().toLocaleTimeString()
    console.log(times)
}
ut()
setInterval(ut,1000)