import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Update = () => {
    const {id} = useParams();
    const [user,setUser] = useState({});
   useEffect(()=>{
       const url = `http://localhost:5000/user/${id}`
       fetch(url)
       .then(res => res.json())
       .then(data => setUser(data));

   },[id])
   const { register,resetField, handleSubmit } = useForm();
   const onSubmit = data => {

  
   fetch(`http://localhost:5000/user/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
   })
   .then(res => res.json())
   .then(data => {
       alert('update success')
   })

   }


    return (
        <div>
            <h1>Update Single User: </h1>
            {
                user.map(uses =>  < div key={uses._id}>
                Name: {uses.Name}
                Details:{uses.details}
                Price:{uses.price}
                </div>)
            }
            <div className='formm'> 
           <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} />
                <input {...register("details")} />
                <input type="number" {...register("price", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
           </div>
        </div>
    );
};

export default Update;