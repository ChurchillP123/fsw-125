import { useState } from 'react';
import AddItemFormHandler from "./AddItemFormHandler";
import { v4 as uuidv4 } from 'uuid';

function RecycledItem({name, editItem, description, deleteItem, _id }) {

    const [editToggle, setEditToggle] = useState(false);
    
    return (
        <div className="item">
            { !editToggle ? 
                <>
                    <h1>Name: {name}</h1>
                    <p>Description: {description}</p>
                    <button onClick={() => deleteItem(_id)} className='delete-btn'>Delete</button>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    className="edit-btn">Edit</button>
                </>
                :
                <>
                    <AddItemFormHandler
                    name={name}
                    description={description}
                    _id = {_id}
                    key={uuidv4()}
                    btnText='Edit Recycle'
                    submit={editItem} />

                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                    
                </>
            }
        </div>
    );
}

export default RecycledItem;