import bcrypt from 'bcrypt';
import usuario from '../models/usuario.js';
import {generateToken} from '../configs/jwtfunciones.js'
import dotenv from "dotenv";
dotenv.config();
import jwt from 'jsonwebtoken';

//El async nos permite que se puedan conectar de manera sincrinica varias personas al servidor 
//Sin el async solo se podria conectar una persona

export const Login = async (req,res) => {
    try {
        const { correo, password } = req.body;

        let user = await usuario.findOne({ correo });
        if (!user)
        return res.status(403).json({ error: "No existe este correo" });
        const respuestaPassword = await  usuario.login(correo, password )
        
        if (respuestaPassword){
            //Generamos nuestro token JWT
            const token = generateToken(usuario._id);
            return res.json({ token });

            //Se configura token en una cookie
            res.cookie("token", token);

            //return res.status(200).json({message: "usuario y contraseña correcta" });
             // Generar el token JWT
       
       // generateRefreshToken(user.id, res);

   //     return res.json({ token, expiresIn });
        } else {
        return res.status(403).json({message: "usuario y contraseña incorrecta" }); 
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }


}

export const loginjwt = async (req,res) => {
    if ((req.body.correo == 'admin') && (req.body.password == '123456')){
      const id = '63703e1f4bd191c9b4c6d816';
       const payload = {
           //{userid: usuario._id } se reemplaza por payload
           userid: id
       };
      const token =  jwt.sign(payload, process.env.JWTPRIVATEKEY, {
       expiresIn: '7d',
   }, function(err, token) {
       console.log(token);
       res.json(token);
   } );
   
      res.json({
           message: 'Autenticación  Exitosa',
           token: token
       })
       return token;
    }else { 
       res.json({
           message: 'Usuario y/o password son incorrectos.'
       })
      
    }
   
   }
   
export default Login;