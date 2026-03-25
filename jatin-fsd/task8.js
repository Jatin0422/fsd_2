var test = {
    "division1": {

        "name": ["Z", "B", "H"]

    },

    "division2": {

        "name": ["Y", "A", "G"]

    }

}
var arr = []
for (i in test) {
    console.log(test[i])
    //console.log(test.test[i].name.sort())
   // arr.concat(test.test[i].name)
}
console.log(arr)
console.log(test.division1.name.sort())