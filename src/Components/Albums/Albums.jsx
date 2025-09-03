import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./Albums.css"
import axios from 'axios'

function Albums({ userId }) {
    const [albums, setAlbums] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(response => {
                setAlbums(response.data)
                setIsLoading(false)
            })
            .catch(() => {
                setIsError(true)
                setIsLoading(false)
            })
    }, [])
    const filteredAlbums = albums?.filter(album => album.userId === +(userId))

    return (
        <section id="albums">
            <div className="album-cards">
                {isLoading && <h3>Loading... <div className='loader'></div></h3>}
                {isError && <h3 className='apiError'>Something went wrong!</h3>}
                {
                    filteredAlbums?.map(album => (
                        <Card key={album.id}>
                            <p>{album?.title ? album.title.charAt(0).toUpperCase() + album.title.slice(1) : "No Title"}</p>
                            <h4>User ID: <span>{album?.userId}</span></h4>
                            <h4>ID: <span>{album?.id}</span></h4>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

export default Albums