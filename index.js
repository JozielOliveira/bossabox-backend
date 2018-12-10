const server = require('./src/index')
const port = process.env.PORT || 3000
// Initialize Server
server.listen(port, () => {
    console.log(`Server linsten port ${port}`)
})