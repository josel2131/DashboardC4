import mongoose from 'mongoose';

//Con export esportamos la base de datos
export const c_uri= 'mongodb+srv://leidygutierrezleon:**Leguty**@cluster0.rcubshe.mongodb.net/dbeventos?retryWrites=true&w=majority';

try {
    const db= await mongoose.connect(c_uri);
    console.log("Se a conectado con exito a : ", db.connection.name);
    } catch (error){
        console.error(error);
    }

//Se exporta para se llamada desde el archivo de rutas
export default c_uri;
