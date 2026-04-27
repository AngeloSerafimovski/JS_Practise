import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const Posts = () => {

    const [posts,setPosts] =  useState([]);

    function getPosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res.data);
            setPosts(res.data)
            
        })
        .catch(err =>console.log(err));
        
    }
useEffect(()=>{
    console.log("useEffect activated");
    
    getPosts()
},[])
return(
    <div id="posts">
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
        <tbody>
            {posts.map(post=>{
                
                return(
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                            <Link to={`/posts/${post.id}/comments`}>
                            Load Comments 
                            </Link>
                            
                        </td>
                    </tr>
                )
            }
            )}
        </tbody>
        </table>
    </div>
)

















}