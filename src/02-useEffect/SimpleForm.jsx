import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email:''
    }) 
    
    const { email, username } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
      console.log('useEffect called!');
    },[])

    useEffect(() => {
        console.log('formState called!');
    },[formState])

    useEffect(() => {
      console.log('email called!');
    },[email])

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text"   
            className="form-control mt-2" 
            name="username" 
            placeholder="Username" 
            value={ username }
            onChange={ onInputChange }
        />

        {
            (username === 'ignacio' ) && <Message/>
        }

        <input 
            type="email"   
            className="form-control mt-2" 
            name="email" 
            placeholder="Email@google.com" 
            value={ email }
            onChange={ onInputChange }
        />
    </>
  )
}
