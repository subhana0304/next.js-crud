import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-slate-950 px-10 py-5'>
            <Link className='text-white font-bold text-2xl' href={'/'}>My Blogs</Link>
            <Link className='bg-white px-3 py-2 font-semibold' href={'/addBlog'}>Add Blog</Link>
        </div>
    );
};

export default Navbar;