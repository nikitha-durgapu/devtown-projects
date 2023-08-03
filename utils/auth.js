const jwt = require('jsonwebtoken')
const secret = "The |>@s$w0rd has $E(RET (0de"


module.exports.generateToken = (payload) => {
    return jwt.sign(payload,secret,{
        expiresIn:'1h'
    })
}

module.exports.verifyToken = (token) =>{
    try {
        const payload = jwt.verify(token,secret)
        return payload
    } catch (error) {
        console.log(error)
        return null
    }
}