const { json } = require('stream/consumers')

fs = require('fs')
obj = [{
    'name': 'Rohit', 'runs': 52
}, { 'name': 'Kohli', 'runs': 96 }, { 'name': 'Gill', 'runs': 20 }, { 'name': 'Rahul', 'runs': 33 }, { 'name': 'Tilak', 'runs': 30 }
]
fs.writeFileSync('score.txt', JSON.stringify(obj))
a = fs.readFileSync('score.txt', 'utf-8')
a = JSON.parse(a)
a.push({ 'name': 'Hardik', 'runs': 52 })
total = 0
a.forEach(p => {
    total += p.runs
});
console.log(total)
runrate = total / 20
console.log(runrate)
half_ton = []
a.forEach(b => {
    if (b.runs > 50) {
        half_ton.push(b.name)
    }
})
console.log(half_ton)
fs.appendFileSync('score.txt', `\n${JSON.stringify(a)}`)
fs.appendFileSync('score.txt', `\ntotal run of team:${JSON.stringify(total)}`)
fs.appendFileSync('score.txt', ` \nrun rate of team:${JSON.stringify(runrate)}`)
fs.appendFileSync('score.txt', ` \nPlayers to score half century:${JSON.stringify(half_ton)}`)
