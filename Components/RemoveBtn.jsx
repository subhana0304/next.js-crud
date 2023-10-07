"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({id}) => {
    const router = useRouter();

    const removeBlog = async() =>{
        const confirmed = confirm('Are you sure to remove this blog?');

        if(confirmed){
            const res = await fetch(`/api/blogs?id=${id}`, {
                method: "DELETE",
            })
            if(res.ok){
            router.refresh();
            }
        }
    }

    return (
        <button onClick={removeBlog}>
            <HiOutlineTrash className='text-red-500' size={24} />
        </button>
    );
};

export default RemoveBtn;