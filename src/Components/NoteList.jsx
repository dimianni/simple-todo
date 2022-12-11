import React, { useEffect, useState, useRef } from 'react'
import Note from './Note'

const NoteList = ({ query }) => {

    // We can use the useRef hook to store any mutable value we like
    // so we could use that to keep track of if it's the first time the useEffect function is being run.
    const isMounted = useRef(false);

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
        if (isMounted.current) {
            if (query !== '') {
                setNotes(prevNotes => [...prevNotes, query])
            }
            // console.log(notes); // 3 
        } 
        // Do not update the state on mount
        else {
            isMounted.current = true;
            // console.log(notes); // 2
        }
    }, [query]);

    // console.log(notes); // 1 // 4

    useEffect(() => {
        setNotes(prevNotes => {
            return prevNotes.filter(obj => obj.id !== itemToDelete)
        })
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