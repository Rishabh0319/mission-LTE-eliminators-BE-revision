import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

// middlewares
app.use(cookieParser());


// set Cookie                 (cookie store krana user browser pe)
app.get("/", (req, res) => {
    res.cookie("name", "Rishabh Tripathi");
    res.send("Cookie is set");
});


app.get("/read", (req, res) => {
    console.log(req.cookies);
    res.send("read cookie");
})


app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`);
})