import React from 'react'

const Note = ({ content, createdBy, date, id, setItemToDelete }) => {


    const deleteHandler = () => {
        setItemToDelete(id)
    }

    return (
        <div className="Note">
            <div className="Content">{content}</div>
            <div className="CreatedBy">{createdBy}</div>
            <div className="Date">{date}</div>
            <button onClick={() => deleteHandler()} className="Delete">Delete</button>
        </div>
    )
}

export default Note;