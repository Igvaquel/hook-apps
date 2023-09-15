import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { onResetForm ,onInputChange, email, username, password } = useForm({
        username: '',
        email:'',
        password:''
    })

    //const {username,email,password } = formState

    
  return (
    <>
        <h1>Form with custom hook</h1>
        <hr />

        <input 
            type="text"   
            className="form-control mt-2" 
            name="username" 
            placeholder="Username" 
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email"   
            className="form-control mt-2" 
            name="email" 
            placeholder="Email@google.com" 
            value={ email }
            onChange={ onInputChange }
        />

        <input 
            type="password"   
            className="form-control mt-2" 
            name="password" 
            placeholder="Password" 
            value={ password }
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
