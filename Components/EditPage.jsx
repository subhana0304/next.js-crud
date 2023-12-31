"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const EditPage = ({id, title, description}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify({newTitle, newDescription}),
      });

      if(!res.ok){
        throw new Error('Failed to Update');
      }

      router.refresh();
      router.push("/");

    } catch (error) {
      console.log(error);
    }
  }
  // -------

    return (
        <form onSubmit={handleSubmit} className='m-10 flex flex-col gap-3'>
        <input 
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className='border border-slate-500 px-8 py-2' 
        type='text' 
        defaultValue={title}
        /> 
        <input 
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className='border border-slate-500 px-8 py-2' 
        type='text' 
        defaultValue={description} 
        /> 

        <button type='submit' className='bg-green-700 text-white font-semibold px-6 py-3 w-fit'>Update Blog</button>
      </form>
    );
};

export default EditPage;