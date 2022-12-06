import jwt from 'jsonwebtoken';
export const generateToken = (uid) => {
    const expiresIn = 60 * 15;
   
    try {
         const token = jwt.sign({uid} , process.env.JWTPRIVATEKEY,{expiresIn});
         console.log ('Mi token es:',token);
         return {token};
    } 
    catch (error) {
         console.log(error);
    }

} 

export const tokenVerificationErrors = {
     "invalid signature": "La firma del JWT no es válida",
     "jwt expired": "JWT expirado",
     "invalid token": "Token no válido",
     "No Bearer": "Utiliza formato Bearer",
     "jwt malformed": "JWT formato no válido",
 };
 
export default generateToken;