import jwt from 'jsonwebtoken'

export const generateAccessToken = (id) => {
    
    const payload = {
        id
    }

    return jwt.sign(payload, "SECRET_KEY", {expiresIn: "48h"} )
}