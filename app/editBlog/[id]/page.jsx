// "use client";
// // import EditPage from '@/Components/EditPage';
// import React, { useEffect, useState } from 'react';

// // const getBlogId = async (id) => {
// //     try {
// //         const res = await fetch(`/api/blogs/${id}`, {
// //             catch: "no-store"
// //         });
// //         if(!res.ok){
// //             throw new Error("Failed to fetch Blog");
// //         }

// //         return res.json();
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// const page = ({params}) => {
//     const{id} = params;
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [blogs, setBlogs] = useState();
//     // const {blog} = await getBlogId(id);
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(()=>{
//         fetch(`/api/blogs/${id}`)
//         .then(res=>res.json())
//         .then(data=>setBlogs(data))
//     },[])
//     console.log(data);
//     // const {title, description} = blog;
//     // console.log(title, description);

//     return (
//         <div>
//             hi
//             {/* <EditPage id={id} title={title} description={description}></EditPage> */}
//         </div>
//     );
// };

// export default page;

import React from 'react';

const page = () => {
    return (
        <div>
            hello there
        </div>
    );
};

export default page;