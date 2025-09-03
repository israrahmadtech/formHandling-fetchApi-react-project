import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./Todos.css"
import axios from 'axios'

function Todos({ userId }) {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setTodos(response.data)
                setIsLoading(false)
            })
            .catch(() => {
                setIsError(true)
                setIsLoading(false)
            })
    }, [])
    const filteredTodos = todos?.filter(todo => todo.userId === +(userId))

    return (
        <section id="todos">
            <div className="todo-cards">
                {isLoading && <h3>Loading... <div className='loader'></div></h3>}
                {isError && <h3 className='apiError' >Something went wrong!</h3>}
                {
                    filteredTodos?.map(todo => (
                        <Card key={todo.id}>
                            <p>{todo?.title ? todo.title.charAt(0).toUpperCase() + todo.title.slice(1) : "No Title"}</p>
                            <h4>Completed: <span>{todo?.completed ? "Yes" : "No"}</span></h4>
                            <h4>User ID: <span>{todo?.userId}</span></h4>
                            <h4>ID: <span>{todo?.id}</span></h4>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

export default Todos