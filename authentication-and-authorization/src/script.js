import express from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 3000;

// middlewares
app.use(cookieParser());


// set Cookie                 (cookie store krana user browser pe)
// app.get("/", (req, res) => {
//     res.cookie("name", "Rishabh Tripathi");
//     res.send("Cookie is set");
// });


// app.get("/read", (req, res) => {
//     console.log(req.cookies);
//     res.send("read cookie");
// })







// // encrypt password

// app.get("/", (req, res) => {

//     bcrypt.genSalt(10, function (error, salt) {
//         bcrypt.hash("my-password", salt, function (error, hash) {
//             console.log(hash);
//         })
//     })

//     res.send("all set");
// })


// // checking encrepted password and your original password is same or not
// app.get("/pass", (req, res) => {

//     bcrypt.compare("my-password", "$2b$10$xRgP3Iy5HDprdWp1f6Vsfu.6lismXsBn3STXGYbHRI3jGbq6KdpUu", function (error, result) {
//         console.log(result);
//     })

//     res.send("checking password", res);
// })




// how to create and store JWT token and read jwt token

app.get("/", (req, res) => {
    let token = jwt.sign({ email: "rishabhtripathi@gmail.com" }, "secret");
    res.cookie("token", token);
    res.send("Cookie is stored");
});


// read jwt token by decrept the token
app.get("/read", (req, res) => {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
    res.send("token decrepted");
});


app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`);
})