import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom'


export const CommentDetails = () => {

    const [details,setDetails] =useState({});
        let {commentId,postId} = useParams();
        const Navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments/' +commentId)
        .then(res => setDetails(res.data))
        .catch(err=>alert(err))
    },[])

    function handleEdit(){
        axios.put('https://jsonplaceholder.typicode.com/comments/' + commentId, details)
        .then(res => {
            if(res.status === 200){
                alert("Edited Succesfully!");
                Navigate(`/posts/${postId}/comments`);
            }
        })
        .catch(err=>alert(err));

    }
   return (
        <div>
            <h2>Edit Comment</h2>

            <input
                type="text"
                value={details.name || ''}
                onChange={(e) => setDetails({ ...details, name: e.target.value })}
            />

            <br /><br />

            <input
                type="text"
                value={details.email || ''}
                onChange={(e) => setDetails({ ...details, email: e.target.value })}
            />

            <br /><br />

            <textarea
                value={details.body || ''}
                onChange={(e) => setDetails({ ...details, body: e.target.value })}
            />

            <br /><br />

            <button onClick={handleEdit}>
                Save Changes
            </button>

        </div>
    )
}
