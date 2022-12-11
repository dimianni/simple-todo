import React, { useEffect, useState } from 'react'
import Note from './Note'

const NoteList = ({ query }) => {

    const [notes, setNotes] = useState([
        {
            id: 1,
            content: "I love React",
            createdBy: "Dmytro Anikin",
            date: "18:22, 11/12/22"
        },
        {
            id: 2,
            content: "Just a test note",
            createdBy: "Dmytro Anikin",
            date: "19:45, 11/12/22"
        },
        {
            id: 3,
            content: "Lets gooooo!",
            createdBy: "Dmytro Anikin",
            date: "10:19, 10/12/22"
        }
    ])

    const [itemToDelete, setItemToDelete] = useState()

    useEffect(() => {
        if (query !== '') {
            setNotes(prevNotes => [...prevNotes, query])
            localStorage.setItem('notelist', JSON.stringify(notes))
        }
    }, [query]);

    useEffect(() => {
        setNotes(prevNotes => {
            return prevNotes.filter(obj => obj.id !== itemToDelete)
        })
        localStorage.setItem('notelist', JSON.stringify(notes))
    }, [itemToDelete])


    return (
        notes?.map(note => {
            return (
                <Note key={note.id} id={note.id} content={note.content} createdBy={note.createdBy} date={note.date} setItemToDelete={setItemToDelete} />
            )
        })
    )
}

export default NoteList;