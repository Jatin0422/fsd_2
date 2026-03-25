const obj = require('./p.json')
console.log(obj)
console.log(obj.name)
var a = {
    "book":
        [{
            "id": 1, "name": "php", "version": "2nd", "author": ["abc", "pqr"]
        },
        {
            "id": 2, "name": "java", "version": "3rd", "author": "j. shepherd"
        }
        ]
}
console.log(a.book[1])
console.log(a.book[0].author[1])
console.log(a.book[1].name)
console.log(`we have ${a.book[1].name} but version is ${a.book[1].version}`)
console.log(a.book[1].author)