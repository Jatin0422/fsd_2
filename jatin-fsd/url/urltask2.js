let addr = 'https://www.google.com/search?q=good+morning&oq=good+morning&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDIHCAMQABiABDIKCAQQABixAxiABDIHCAUQABiABDIKCAYQABixAxiABDIKCAcQABixAxiABDIKCAgQABixAxiABDIHCAkQABiABNIBCTI3ODZqMGoxNagCCLACAfEFu5ETdSdxAVY&sourceid=chrome&ie=UTF-8'
u = require('url')
process.noDeprecation = true
q = u.parse(addr, true)
let data = q.query
console.log(` user search ${data.q} on ${q.host}`)