import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Comments = () => {

    const [comments,setComments] =  useState([]);
        let{postId} = useParams();

    function getComments(){


        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>{
            console.log(res.data);
            setComments(res.data)
        })
        .catch(err=>console.log(err));
    }
    useEffect(()=>{
        console.log("useEffect activated!");
        
        getComments()
    },[postId])
    return(
        <div id="comments">
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                 <tbody>
                    {comments.map(comm => {
                        return (
                            <tr key={comm.id}>
                                <td>{comm.id}</td>
                                <td>{comm.name}</td>
                                <td>{comm.email}</td>
                                <td>{comm.body}</td>
                                <td>
                                    <Link to={`/posts/${postId}/comments/${comm.id}`}>
                                        More / Edit
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

