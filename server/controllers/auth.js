import { sql } from "../db.js"
import bcrypt from 'bcryptjs'
import { generateAccessToken } from "../utils/generateToken.js"

export const auth = async (req, res) => {

    const { login, password } = req.body 

    const user = await sql`select * from Users where login = ${login}`

    if (!user[0]) {
        return res.status(400).json({ message: `Пользователь с логином ${login} не найден` })
    }

    const validPassword = bcrypt.compareSync(password, user[0].password)

    if (!validPassword) {
        return res.status(400).json({ message: `Введен неверный пароль` })
    }

    const token = generateAccessToken(user[0].id)

    return res.json({
        token: token,
        user: user[0]
    })
}