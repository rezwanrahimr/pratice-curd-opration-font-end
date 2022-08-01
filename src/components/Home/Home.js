import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.css'

const Home = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUser(data));
    })
   
    const handleDelete = id =>{
        const url = `http://localhost:5000/user/${id}`;
        const proceed = window.confirm('Are you sure ?');
        if(proceed){
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                alert('Success fully delete');
                const result = user.filter(users => users._id !== id);
                setUser(result);
            });
        }

    }
    return (
        
        <div className='some'>
           {
               user.map(userData =>  <div className='someStyle'>
                <h3>Name:{userData.Name}</h3>
                <h6>Details:{userData.details}</h6>
                <h6>Price:{userData.price}</h6>
                <button onClick={()=>handleDelete(userData._id)}>Delete</button>
                <Link to={`/update/${userData._id}`}><button style={{backgroundColor:'green',color:'white'}}>Update</button></Link>
            </div>)
           }
        </div>
    );
};

export default Home;