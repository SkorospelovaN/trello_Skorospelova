import express from "express";
import { sql } from "./db.js";
import { register } from "./controllers/register.js";
import { auth } from "./controllers/auth.js";
import cors from 'cors'


const PORT = 5000

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', async (req, res) => {
    const data = await sql`select * from Users`
    res.send(data)
})

app.post('/reg', register)

app.post('/auth', auth)

const start = async () => {

    
    app.listen(PORT, () => {
        console.log(`СЕРВАК ФУРЫЧИТ ТУТ http://localhost:${PORT}`);
    })
}

start()