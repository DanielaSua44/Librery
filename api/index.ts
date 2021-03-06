import express,{Application,Request,Response} from 'express';
const app:Application = express();
const port =3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',async (_req :Request,res :Response):Promise<Response>=>{
    return res.status(200).send({message:'Hello World'});
});

try{
    app.listen(port,():void=>{
        console.log(`Server running on port ${port}`);
    });
}catch(e){
    console.log(e);
}