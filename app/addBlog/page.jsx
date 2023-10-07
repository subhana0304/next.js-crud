"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [description, setDescription] = useState("");
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!title || !description){
      alert("Title and description are required!")
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/blogs', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({title, description}),
      });

      if(res.ok){
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create blog")
      }

    } catch (error){
      console.log(error);
    }
  }

    return (
        <form onSubmit={handleSubmit} className='m-10 flex flex-col gap-3'>
          <input 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='border border-slate-500 px-8 py-2' 
          type='text' 
          placeholder='Blog Title' 
          /> 
          <input 
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='border border-slate-500 px-8 py-2' 
          type='text' 
          placeholder='Blog Description' 
          /> 

          <button type='submit' className='bg-green-700 text-white font-semibold px-6 py-3 w-fit'>Add Blog</button>
        </form>
    );
};

export default page;