import EditPage from '@/Components/EditPage';
import React from 'react';

const getBlogId = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            catch: "no-store"
        });
        if(!res.ok){
            throw new Error("Failed to fetch Blog");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

const page = async ({params}) => {
    const{id} = params;
    const {blog} = await getBlogId(id);
    // console.log(blog);
    const {title, description} = blog;
    // console.log(title, description);

    return (
        <div>
            <EditPage id={id} title={title} description={description}></EditPage>
        </div>
    );
};

export default page;