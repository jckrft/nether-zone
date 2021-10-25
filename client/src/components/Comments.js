import { useState, useEffect } from 'react'
import axios from 'axios'


const API_URL = 'https://api.airtable.com/v0/appUtL9vcQjNL8IK8/Table%201?api_key=keyr5pmOBeTGWboAj'

function Comments({toggleFetch, setToggleFetch}) {
  const [comments, setComments] = useState([]);
  const [yourname, setYourname] = useState('');
  const [yourquote, setYourquote] = useState('');

  useEffect(() => {
    const getComments = async () => {
      const resp = await axios.get(API_URL)
      setComments(resp.data.records)
    }

    getComments()
  }, [toggleFetch])

  const handlePostRequest = async (ev) => {
    ev.preventDefault();
  
    const newComment = {
      records: [
        {
          fields: {
            yourname,
            yourquote
          }
        }
      ]
    }

    await axios.post(API_URL, newComment)
    setToggleFetch(!toggleFetch)
  }

  return (
    <div>
      <div className='comment-form'>
      <form onSubmit={handlePostRequest}>
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
          <br />
          <input type="submit" />
      </form>
      </div>

      <div className='comments'>
      {comments.map((comment) => (
        <div>
          <h1 key={comment.id}>{comment.fields.yourname}</h1>
          <h1 >{comment.fields.yourquote}</h1>
          </div>
      ))}
      </div>
    </div>
  )
}

export default Comments;