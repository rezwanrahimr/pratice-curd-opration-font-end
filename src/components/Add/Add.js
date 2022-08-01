import React from 'react';
import css from './add.css';
import { useForm } from "react-hook-form";

const Add = () => {
    const { register,resetField, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
                 
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(datas => {
            alert('Item added');
            console.log(datas);
            register('Name');
            register('details');
            register('price');

            resetField('Name');
            resetField('details');
            resetField('price');
        })
    }
    return (
        <div >
            <div className='all'>
            <h1 className='back'>Add a User</h1>
            </div>
            
           <div className='formm'> 
           <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} />
                <input {...register("details", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("price", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
           </div>

        </div>
    );
};

export default Add;