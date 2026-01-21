import express from "express";
import cookieParser from "cookie-parser";
import AuthRouter from "./routes/auth.router.js";

class App {


    constructor(){
        this.app = express();
        this.config();
        this.middlewares();
        this.routes();

    }



    config(){
        this.PORT = process.env.BACKEND_PORT;
        this.UserRouter = new AuthRouter();

    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/v4/auth', this.UserRouter.getRoutes());
        this.app.get('/',(req,res)=>{
            res.status(200).send({message:"App running !!"})
        })
    }
    runApp(){
        this.app.listen(this.PORT, ()=>{
            console.log(`App running on PORT: http://localhost:${this.PORT}`);
            
        })
    }

}

export default App;