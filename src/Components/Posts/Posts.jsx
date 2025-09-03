import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./Posts.css"
import axios from 'axios'

function Posts({ userId }) {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data)
                setIsLoading(false)
            })
            .catch(() => {
                setIsError(true)
                setIsLoading(false)
            })
    }, [])
    const filteredPosts = posts?.filter(post => post.userId === +(userId))

    return (
        <section id="posts">
            <div className="post-cards">
                {isLoading && <h3>Loading... <div className='loader'></div></h3>}
                {isError && <h3 className='apiError' >Something went wrong!</h3>}
                {
                    filteredPosts?.map(post => (
                        <Card key={post.id}>
                            <h4>{post?.title ? post.title.charAt(0).toUpperCase() + post.title.slice(1) : "No Title"}</h4>
                            <p>{post?.body ? post.body.charAt(0).toUpperCase() + post.body.slice(1) : "No Content"}</p>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

export default Posts