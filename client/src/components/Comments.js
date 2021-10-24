import { useState, useEffect } from 'react'
import axios from 'axios'


const API_URL = 'https://api.airtable.com/v0/appUtL9vcQjNL8IK8/Table%201?api_key=keyr5pmOBeTGWboAj'

function Comments() {
  const [comments, setComments] = useState([]);
  const [yourname, setYourname] = useState('');
  const [yourquote, setYourquote] = useState('');

  useEffect(() => {
    const getComments = async () => {
      const resp = await axios.get(API_URL)
      setComments(resp.data.records)
    }
  })
  return (


    
    <div>
      <form>
      <label htmlFor="commentName">Your Name:</label>
        <input
          type="text"
          id="commentName"
          placeholder="Your Name"
          value={yourname}
          onChange={(ev) => setYourname(ev.target.value)}
        />
        
        <br />
        
        <label htmlFor="commentQuote">Comment: </label>
        <input
          type="text"
          id="commentQuote"
          placeholder="Comment"
          value={yourquote}
          onChange={(ev) => setYourquote(ev.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Comments;