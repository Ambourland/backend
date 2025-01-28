import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)


  const [data, setData] = useState()

  useEffect(() => {
 
    axios({
      method: "get",
      url: "http://localhost:3000/gettodos"
    })
      .then(res => {
        console.log("res", res)
        // console.log("sorted", sorted)
        setData(res.data)

      })
      .catch(err => console.log("err", err))


  }, [])


  return (
    <>
      {console.log("data", data)}


    {data && data.sort((a,b) =>  b.created - a.created).map((item) => {
      return (

        <div key={item._id}  style={{ marginBottom: "20px" }}>

          <div style={{ border: '2px solid red' }}>

            <p> {item.todo}</p>
            <button id={item._id} onClick={(e) => handleDelete(e)}>delete</button>
            <button>edit</button>

          </div>
        </div>
      )
    })}

  </>
)
}

export default App




// Notes:  Validation:

    // if (!newTodo.trim()) return; ensures no empty or whitespace-only todos are added.

    // Payload Creation:
    
    //     todoItem contains the todo string and a timestamp (created).
    
    // Backend Request:
    
    //     A POST request is sent to /create, passing todoItem as the payload.
    
    // State Update:
    
    //     On success (then block):
    //         The backend sends the newly created todo with an _id.
    //         setData([...data, res.data]) appends the new todo to the existing list.
    //         Clears the input field with se