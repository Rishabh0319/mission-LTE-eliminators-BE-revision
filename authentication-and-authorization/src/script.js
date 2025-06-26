import express from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

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







// encrypt password

app.get("/", (req, res) => {

    bcrypt.genSalt(10, function (error, salt) {
        bcrypt.hash("my-password", salt, function (error, hash) {
            console.log(hash);
        })
    })

    res.send("all set");
})


// checking encrepted password and your original password is same or not
app.get("/pass", (req, res) => {

    bcrypt.compare("my-password", "$2b$10$xRgP3Iy5HDprdWp1f6Vsfu.6lismXsBn3STXGYbHRI3jGbq6KdpUu", function (error, result) {
        console.log(result);
    })

    res.send("checking password", res);
})



app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`);
})