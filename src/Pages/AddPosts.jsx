import React from "react";
import { Container } from "../Components/index";
import { PostForm } from "../Components";

function AddPosts() {
    return (
        <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPosts