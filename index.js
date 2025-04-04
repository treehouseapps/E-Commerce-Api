const app = require('./src/app')

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}...`)
})