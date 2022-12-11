import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



const URI = 'http://localhost:8001/usuarios/reguser'


export const CompCreateUser = () => {
    const [correo, setContent] = useState('')
    const [nameuser, setUsuario] = useState('')
    const [password, setPass] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {

      e.preventDefault()
      //Alertas 
        Swal.fire({
            title: 'Desea guardar los cambios?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `No guardar`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Guardado!', '', '')
            } else if (result.isDenied) {
              Swal.fire('CLos cambios no fueron guardados', '', 'info')
            }
          })

        
        await axios.post(URI, {correo:correo, nameuser: nameuser, password: password})
        navigate('/users')
    }   

    return (
        <div className="login-form">
           <h3>Creación de  Usuarios</h3>
           <form onSubmit={store}>
                 
                <div>

                <input
                        value={nameuser}
                        onChange={ (e)=> setUsuario(e.target.value)} 
                        type="text"
                        placeholder = "Ingrese su nombre"
                    />    
                     
                                 
                  </div>

                  <div>
                  <input
                        value={correo}
                        onChange={ (e)=> setContent(e.target.value)} 
                        type="email"
                        placeholder = "Correo"
                    />    
                             
                 </div>
                 <div>
                 
                    <input 
                        value={password}
                        onChange={ (e)=> setPass(e.target.value)} 
                        type = "password"
                        className='form-control'
                        placeholder = "Password"
                    />                 
                 </div>
                 <button type="submit" className="btn-register">Guardar</button>                  
           </form>
        </div>
    )
}

export default CompCreateUser