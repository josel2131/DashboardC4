//importamos el modelo 

import { evento } from '../models/evento.js';
 

//Registrar un evento 
export const regevento = (req, res) => {
    const cevento = evento(req.body);
    cevento
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

//Mostrar todos los eventos deportivos
export const sheventos = (req,res) => {
    evento
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error})); 
}


//Motrar un evento deportivo 
export const shevent = (req, res) => {
    const { id } = req.params;
    evento
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

//Borrar un evento deportivo 
export const delevent =  (req, res) => {
    const { id } = req.params;
    evento
    //Para eliminar un elemento especifico por su ID
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

//Actualizar un evento deportivo

export const upevent =  (req, res) => {
    const { id } = req.params;
    const { fecha , equipo1, equipo2, marcador1, marcador2, tipoevento } = req.body;
    evento
    //los valores corresponden a los creados en el modelo de eventos 
    //Up date me permite actuliazar informacion 
    .updateOne({ _id: id }, { $set: { fecha , equipo1, equipo2, marcador1, marcador2, tipoevento } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };



//Datos
export default regevento;