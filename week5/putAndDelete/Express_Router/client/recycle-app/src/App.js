import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RecycledItem from './RecycledItem';
import AddItemFormHandler from './AddItemFormHandler';

function App() {
  const [recycledItems, setRecycledItems] = useState([]);

  const getItems = () => {
    axios.get('/itemsIntake')
      .then(res => setRecycledItems(res.data))
      .catch(err => console.log(err))
  }

  const addItems = (newItem) => {
    axios.post('/itemsIntake', newItem)
      .then(res => setRecycledItems(prevItems => [...prevItems, res.data]))
      .catch(err => console.log(err))
  }

  const deleteItem = (itemId) => {
    axios.delete(`/itemsIntake/${itemId}`)
      .then(setRecycledItems(prevItems => prevItems.filter(item => item._id !== itemId)))
      .catch(err => console.log(err))
  }

  const editItem = (updates, itemId) => {
    axios.put(`/itemsIntake/${itemId}`, updates)
      .then(res => {
        setRecycledItems(prevItems => prevItems.map(item => item._id !== itemId ? item : res.data))
        getItems();
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems();
  }, []);

  const recycledList = recycledItems.map(item => <RecycledItem {...item} deleteItem={deleteItem} editItem={editItem} key={item.name} />)

  return (
    <div className='recycledItems'>
      <AddItemFormHandler key ='formHandler' btnText='Recycle Item' submit={addItems}/>
      {recycledList}
    </div>
  );
}

export default App;
