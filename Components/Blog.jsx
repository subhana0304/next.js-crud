"use client"
import React, { useEffect, useState } from 'react';
import RemoveBtn from '@/components/RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi";

const Blog = () => {
    
    const [blogs, setBlogs] = useState();

    const refetch = () => {
        fetch('/api/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data?.blogs))

    }
    useEffect(() => {
        refetch()
        return () => { }
    }, [])

    return (
        <>
        {blogs?.map((blog) => (
        <div key={blog?._id} className='border border-slate-400 p-4 mx-10 m-5 flex gap-5 justify-between items-start'>
            <div className='space-y-1'>
                <h1 className='font-semibold text-xl'>{blog?.title}</h1>
                <p>{blog?.description}</p>
            </div>
            <div className='flex items-center justify-between gap-2'>
                <RemoveBtn id={blog?._id} refetch={refetch} ></RemoveBtn>
                <Link href={`editBlog/${blog._id}`}><HiPencilAlt className='text-green-700' size={24} /> </Link>
            </div>
        </div>
        ))}
        </>
    );
};

export default Blog;