import React from 'react'
import Singlecard from './Singlecard'
import '../components/Home.css'

function Like({like,setLike}) {
    return (
        <div className ="like-item">
            {like.map(item =>(
                <Singlecard item ={item} like={like} setLike ={setLike}/>
            ))}
            <button>Click here to like Something</button>
        </div>
    )
}

export default Like