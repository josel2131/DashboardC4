//Las variables de entorno permiten almacenar informacion que no sera cargada en el GitHub por 
//Seguridad de los datos en este caso el usuario y contraseña. 

import mongoose from "mongoose";

//Se importa la dependencia dotenv
import dotenv from "dotenv";
dotenv.config();


export const db = mongoose.connect(process.env.MON_DBURI).then(()=>{
    console.log("La conexión fue realizada con exito en la BD")
    }).catch((error) => console.error("Problemas al conectar a la base de datos de Mongodb", error));


    export default db;
