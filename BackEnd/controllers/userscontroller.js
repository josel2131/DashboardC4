//los controles permiten generar consultas en las bases de datos, guardar información, editar o eliminar
//Esta inicial es el controlador de usuarios-Manejo de informacion de usuarios

//importamos desde la informacion del usuario en la carpeta que lo contiene
//importamos el modelo
import {usuario} from '../models/usuario.js';
import * as bcrypt from 'bcrypt';



//Registrar un usuario 
/*export const regusuario = (req,res) =>{
    const user =usuario(req.body);
    user

    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));

};*/


//Otra manera de enviar información

export const regusuario = (req, res) => {
    const user = usuario(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

  /*
export const regusuario = async (req,res) =>{
    res.send("Archivo agregado con exito")
    console.log(req.body)
    await usuario.create({nameuser: req.body.nameuser, password: req.body.password, correo:req.body.correo});

};*/

//Mostrar todos los usuarios 
export const showuser = (req,res) =>{
    usuario

    //Librerias de Moongoos. 
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));

};


//Mostrar un usuario especifico

export const showoneuser=(req,res) =>{
    const{id} = req.params;
    usuario
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}));

};

//Borrar un usuario 

export const deluser= (req,res) =>{
    const { id }= req.params;
    usuario

    .deleteOne({_id: id})
    .then((data) => res.json (data))
    .catch((error)=> res.json ({message: error}));

};
//Actualizar un usuario registrado 

export const upuser= (req,res) => {
const { id }= req.params;
const { nameuse, password, correo } = req.body;
usuario
    .updateOne({_id: id}, {$set:{nameuse,password,correo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
};

export default regusuario;
