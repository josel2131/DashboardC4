//Creamos nuestro modelo eventos 

import mongoose, {trusted} from "mongoose";
//import mongoose from "mongoose";

//TOdo lo que trabajare en mi base de datos esta dentro del parentesis 
const eventoSchema = new mongoose.Schema(
    {
    fecha: {
    type: Date, 
    require: true

},
equipo1:{

    type: String,
    require: true
}, 
equipo2:{
        type:String,
        require: trusted,
},
marcador1:{
    type:Number,
},
marcador2:{
    type:Number,
},
tipoevento:{
    type: String,
    require: true
}

},

{
    //Esta instruccion permite que la base de datos cargue la fecha de la creacion del dato o de las modificaciones
    timestamps: true,
    versionKey: false,
}

);

export const evento = mongoose.model("ceventos", eventoSchema);
export default evento;
//Constante a importar el modelo del evento 
//const meventos = mongoose.model;
//export default mevento

