import React, { useEffect, useState } from 'react'
import Card from '../Posts/Card'
import "./Comments.css"
import axios from 'axios'

function Comments({ userId }) {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        setComments(response.data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
        setIsLoading(false)
      })
  }, [])
  const filteredComments = comments?.filter(comment => comment.postId === +(userId))

  return (
    <section id="comments">
      <div className="comment-cards">
        {isLoading && <h3>Loading... <div className='loader'></div></h3>}
        {isError && <h3 className='apiError'>Something went wrong!</h3>}
        {
          filteredComments?.map(comment => (
            <Card key={comment.id}>
              <p>{comment?.body ? comment.body.charAt(0).toUpperCase() + comment.body.slice(1) : "No Content"}</p>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Comments