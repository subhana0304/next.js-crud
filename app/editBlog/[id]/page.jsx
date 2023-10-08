"use client";
import EditPage from '@/components/EditPage';
import React, { useEffect, useState } from 'react';


const page = ({params}) => {
    const{id} = params;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [blogs, setBlogs] = useState();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        fetch (`/api/blogs/${id}`)
        .then(res=>res.json())
        .then(data => setBlogs(data?.blog))
    },[])

    
    return (
        <div>
            <EditPage id={id} title = {blogs?.title} description={blogs?.description} ></EditPage>
        </div>
    );
};

export default page;