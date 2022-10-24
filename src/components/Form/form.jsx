import React from 'react';
import { useState } from 'react';
import './form.css';

//---> First Design Without API JSON File Or Localhost 
// import { addUser } from '../../redux/userSlice';

//---> After Using , Creating API JSON File On The Localhost  *(First Method)*
// import addUser from '../../redux/api';

//---> After Using API JSON File With Method createAsyncThunk *(Second Method)*
import { addUser } from '../../redux/userSlice';

import { useDispatch , useSelector } from 'react-redux';

export default function Form() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const age = [1,2,3];

    const {loading,error} = useSelector(state=> state.user) 

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();

            // *( First Method )*
        // addUser({name,email,age},dispatch)

            // *( Second Method )*
        dispatch(addUser({name,email,age}))

    }

return (
    <form onSubmit={handleSubmit}>
    
    <input 
        type='text' 
        placeholder='Enter Your Name'
        onChange={(e)=>setName(e.target.value)}
    />
    <input 
        type='e-mail' 
        placeholder='Enter Your Name'
        onChange={(e)=>setEmail(e.target.value)}
    />

    {loading ? 'loading ...' : <input type='submit' value='send' />}

    {error && loading === false && 'Error !!'}
    
    </form>
)
}
