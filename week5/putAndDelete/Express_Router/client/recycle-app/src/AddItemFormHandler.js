import { useState } from 'react';

function AddItemFormHandler({ submit, btnText, name, description, _id }) {
    const initialInputs = {name: name || '', description: description || '' };
    const [inputs, setInputs] = useState(initialInputs);

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={inputs.name} onChange={handleChange} placeholder='Name' required></input>
            <input type='text' name='description' value={inputs.description} onChange={handleChange} placeholder='Description' required></input>
            <button>{btnText}</button>
        </form>
    );
}

export default AddItemFormHandler;