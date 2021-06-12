import React, {useState} from 'react'
import InputArea from './Components/InputArea'
import ToDoItem from './Components/ToDoItem';

const App = () => {
    const [items, setitems] = useState([]);
    const addItems=(inputText)=>{
        setitems((prevItems)=>{
            return [...prevItems,inputText]
        });
    };
    
    const deleteItem=(id)=>{
        setitems((prevItems)=>{
            return prevItems.filter((item,index)=>{
                return index!==id;
            })
        })
    }

    return (
        <div className="container">
            <div className="heading">
               <h1>To-Do List</h1>    
            </div>
            <InputArea additems={addItems} />
            <div>
                <ul>
                    {
                        items.map((item,index)=>{
                            return(
                                <ToDoItem key={index} text={item} deleteItem={deleteItem} id={index} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default App
