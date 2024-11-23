import React from "react";
import { useEffect, useState } from "react";
import  dbService  from '../Services/DbService'
import { Container } from "../Components/index";
import { Postcard } from "../Components";


function AllPosts() {
    const [posts, setPost] = useState([])
    useEffect(() => {
        dbService.getAllPost([]).then((posts) => {
            if (posts) {
                setPost(posts.documents)
            }
        })
    }, [])


    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts