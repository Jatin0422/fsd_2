let a = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
var obj = {}
function fromListToObject(arr) {
    for (i in arr) {
        //console.log(arr[i])
        for (j in arr[i]) {
            obj[arr[i][0]] = arr[i][1]
        }
    }
}
fromListToObject(a)
console.log(obj)