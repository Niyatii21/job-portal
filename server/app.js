import express from 'express'
import 'dotenv/config'


const app = express()


const PORT = process.env.PORT || 5000



app.get('/', (req, res) => {
    res.send('server is working')
})


app.listen(PORT, () => console.log('server started'))