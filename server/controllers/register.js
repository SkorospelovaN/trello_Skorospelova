import { sql } from "../db.js";
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const {login, fio, phone, password} = req.body;
    
    const candidate = await sql`select * from Users where login = ${login} limit 1`[0]

    if (candidate) {
        res.status(400).send("Пользователь уже существует")
    }
    console.log(req.body);
    const hashPassword = bcrypt.hashSync(password, 7)

    await sql`insert into Users(login, fio, phone, password) values(${login}, ${fio}, ${phone}, ${hashPassword})`

    return res.send({message: "Пользователь успешно зарегистрирован"})
}