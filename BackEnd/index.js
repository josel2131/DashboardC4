//Lado del Backend

import express from "express";
import cors from 'cors';
import { router } from './routes/routes.js'
import pkg from 'colors';


//Se definen las variables 
//
const colors = pkg;
const app = express();
app.use(cors());

//Con esta linea estamos llamando a Json para que se pueda enviar o recibir información
app.use(express.json());

//Con esta linea estamos llamando la constante router 
app.use('/usuarios',router);


//Se van a definir las rutas  req=requerimiento, res=respuesta
router.get('/', (req,res)=> {
    res.send('Bienvenidos a dashboardSport');
})

//Se configura para solicitar al usuario el ingreso de loggin y password  Ruta de login
router.get('/login',(req,res)=>{
    res.send('Bienvenidos a mi modulo de Login ');
})

//Para adicionar texto (Ruta de adicion)
router.post('/agregar',(req,res) =>{
    res.send ('Archivo grabado con exito');
})

//Para borrar informacion -Ruta de eliminacion
router.delete('/delete',(req,res)=>{
    res.send('Archivo eliminado con exito') 
})


//Se escoge un puerto cualquiera 
app.listen(8001,()=>{

//Se imprime en consola y en servidor local 
console.log('Servidor Corriendo en http://localhost:8001/'.bgCyan)
})


