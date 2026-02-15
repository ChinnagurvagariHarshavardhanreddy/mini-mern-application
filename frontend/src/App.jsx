import React ,{useState} from "react"
import axios from "axios"
// import { resume } from "react-dom/server"
import "./App.css"

function App() {
  const [details,setdetails] = useState({
    'name': 'none',
    'description': 'none',
    'age' : 0
  })

  const handleSubmit = async () => {
    try {
      await axios.post(import.meta.env.VITE_URLPOST, {'details' : details})
      alert('User details submitted successfully!')
    } catch (error) {
      alert('Error submitting details: ' + error.message)
    }
  }

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <h1>User details</h1>
        <div className="form-group">
          <input type="text" onChange={(e)=>setdetails({...details,'name': e.target.value})} placeholder="name" required/>
        </div>
        <div className="form-group">
          <textarea name="description" id="" onChange={(e)=>setdetails({...details,'description': e.target.value})} placeholder="description" required></textarea>
        </div>
        <div className="form-group">
          <input type="number" name="number" id="" onChange={(e)=>setdetails({...details,'age': e.target.value})} placeholder="age" />
        </div>
        <input type="button" value="submit" onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default App
