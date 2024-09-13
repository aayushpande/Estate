import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.routes.js";
import userRoute from "./routes/test.routes.js";

const app = express();

app.use(cors({origin:process.env.CLIENT_URL, credentials:true}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/post", postRoute);
app.use("/api/test", testRoute);


app.listen(8800, () =>{
    console.log("Server is running!");
});