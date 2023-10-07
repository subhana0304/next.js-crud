import React from 'react';
import RemoveBtn from '@/Components/RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi";

const getBlogs = async() =>{
    try {
        const res = await fetch ('http://localhost:3000/api/blogs', {
            cache: "no-store",
        });

        if(!res.ok){
            throw new Error("Failed to fetch")
        }

        return res.json();

    } catch (error) {
        console.log("Error loading blogs", error);
    }
}

const Blog = async () => {
    const {blogs} = await getBlogs();
    return (
        <>
        {blogs.map((blog) => (
        <div key={blog._id} className='border border-slate-400 p-4 mx-10 m-5 flex gap-5 justify-between items-start'>
            <div className='space-y-1'>
                <h1 className='font-semibold text-xl'>{blog.title}</h1>
                <p>{blog.description}</p>
            </div>
            <div className='flex items-center justify-between gap-2'>
                <RemoveBtn id={blog._id}></RemoveBtn>
                <Link href={`editBlog/${blog._id}`}><HiPencilAlt className='text-green-700' size={24} /> </Link>
            </div>
        </div>
        ))}
        </>
    );
};

export default Blog;