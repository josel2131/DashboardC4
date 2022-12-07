//El archivo de ruta es el que se encarga de redirigirnos 

//Importamos la base de datos {} y nos conectamos  ../ y demas coneiones necesarias 
import {c_uri} from '../conectarbd.js';
import express from "express";


//Importamos el controlador 
import {regusuario, showuser, showoneuser,upuser,deluser} from '../controllers/userscontroller.js';

//Importamos el contralador de eventos 
import {regevento, sheventos, shevent, delevent,upevent} from '../controllers/ceventoscontrollers.js';
import { Login } from '../controllers/logincontrollers.js';
import {db} from '../mongodb.js';
import {requireToken} from '../midleware/auth.js'

//import mongoose from 'mongoose';
export const router= express.Router();


//Con esta linea estamos llamando la constante router 
//app.use(router);


//Se van a definir las rutas  req=requerimiento, res=respuesta
router.get('/', (req,res)=> {
    res.send('Bienvenidos a NodeJs desde la Raiz');
    console.log("Conected to ", db.connection.name);
})

//Para solicitar al usuario el ingreso de loggin y password  Ruta de login
router.get('/login',(req,res)=>{
    res.send('Bienvenidos a mi modulo de Login ');
})


//Rutas para mis eventos deportivos 
router.post('/regevento', regevento);
router.get ('/sheventos', requireToken, sheventos);
router.get('/shevent/:id', shevent);
router.delete('/delevent/:id',delevent);
router.put('/upevent/:id',upevent);


//Rutas del usuario
router.post('/login', Login);
router.post('/reguser', regusuario);
router.get('/shuser',showuser);
router.get('/shuser/:id',showoneuser);
router.delete('/shuser/:id',deluser);
router.put('/upuser/:id',upuser);



//Para adicionar texto (Ruta de adicion)
router.post('/agregar',(req,res) =>{
    res.send ('Archivo grabado con exito');
})

//Para borrar informacion -Ruta de eliminacion
router.delete('/delete',(req,res)=>{
    res.send('Archivo eliminado con exito') 
})


export default router;