let a = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
var ob = {}
function transformFirstAndLast(arr) {
    let j = arr.length - 1
    ob[arr[0]] = arr[j]
}
transformFirstAndLast(a)
console.log(ob)