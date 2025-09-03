import React, { useEffect } from 'react'
import axios from 'axios'

function Data({ dataUrl, setApiData }) {
    useEffect(() => {
        if (dataUrl !== "contact") {
            axios.get(`https://jsonplaceholder.typicode.com/${dataUrl}`)
                .then(response => {
                    setApiData(response.data)
                })
                .catch(() => console.log("Something went wrong"))
        }
    }, [dataUrl, setApiData])
    return null
}

export default Data