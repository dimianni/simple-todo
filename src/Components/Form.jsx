import React, { useState } from 'react'

const Form = ({ setQuery }) => {

    const [input, setInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        setQuery(newObj(input))

        setInput('')
    }

    const newObj = (content) => {
        return {
            id: Math.floor(100000 + Math.random() * 900000),
            content: content,
            createdBy: "Dmytro Anikin",
            date: '19:09, 11/12/22'
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form;