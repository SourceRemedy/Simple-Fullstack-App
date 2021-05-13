const express = require('express')
const app = new express()
const users = loadData().users

app.use(express.static('public'))
app.use(express.json())

app.post("/login", (req, res) => {
    const user = req.body
    let userMatch = users.find( (u) => u.username == user.username && u.password == user.password)
    if (userMatch) {
        res.send({
            message: "Successful login!",
            userMatch
        })
    }
    else {
    if (user.username.length >= 4 && user.password.length >= 4) {
    const newUser = {
        id: users.length+1,
        username: user.username,
        password: user.password,
    }
    users.push(newUser)
    console.log(users)
    res.send({
        message: "Your account was successfully created.",
        newUser
    })
}
else {
    res.status(401)
    res.send ({
        message: "Username or password is invalid."
    })
}
    }
})


app.listen(3000, () => console.log("Server started"))


function loadUsers() {
    return {
        [
            {
                username: "jword",
                password: "hello2021"
            }
        ]
    }
}