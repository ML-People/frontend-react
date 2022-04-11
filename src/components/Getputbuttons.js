import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material';

const baseURL = "https://placeholder.com/posts"

const Getputbuttons = () => {
    const [post, setPost] = React.useState(null);

    function getPost() {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });

        console.log(post.string);
        console.log(post.number);
    }

    function updatePost() {
        if (!post) return null;

        axios.put(`${baseURL}/1`, {
            string: "updated",
            number: 111
        })
        .then((response) => {
            setPost(response.data);
        });

        console.log(post.string);
        console.log(post.number);
    }



    return (
        <>
        <Button onClick={getPost}>Get</Button>
        <Button onClick={updatePost}>Get</Button>
        </>
    )
}

export default Getputbuttons