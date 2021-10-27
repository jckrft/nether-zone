import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import './Comments.css'


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
      <Form onSubmit={handlePostRequest}>
  <Form.Group className="text-name" controlId="exampleForm.ControlInput1">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder="your name"           value={yourname}
          onChange={(ev) => setYourname(ev.target.value)}/>
  </Form.Group>
  <Form.Group className="text-quote" controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="what was it Shakespeare said?"   value={yourquote}
          onChange={(ev) => setYourquote(ev.target.value)}/>
            <input type="submit" />
  </Form.Group>
</Form>
        
        
        {/* <form onSubmit={handlePostRequest}>
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
      </form> */}
      </div>

      <div className='comments'>
      {comments.map((comment) => (
        <div>
          <p key={comment.id}>{comment.fields.yourname}:</p>
          <p>{comment.fields.yourquote}</p>
          </div>
      ))}
      </div>
    </div>
  )
}

export default Comments;