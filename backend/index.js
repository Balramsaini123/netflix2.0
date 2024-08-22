import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";


databaseConnection();

dotenv.config({
    path:".env"
})

const app = express()

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);

const port = process.env.PORT || 4000

app.listen(process.env.PORT, () => {
    console.log(`Server is listen at port ${port}`)
})
