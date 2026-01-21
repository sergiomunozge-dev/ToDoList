import express from "express"


class AuthRouter{

    constructor(){
        this.router = express.Router();
        this.setRoutes();
    }


    setRoutes(){
        this.router.get('/', (req,res)=>{

            res.status(200).send({message:`Bienvenido a Raiz de usuario`});

        })
    }


    getRoutes(){
        return this.router;
    }



}


export default AuthRouter;