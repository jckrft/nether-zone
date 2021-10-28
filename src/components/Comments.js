import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'



const API_URL = `https://api.airtable.com/v0/appUtL9vcQjNL8IK8/Table%201?api_key=${process.env.REACT_APP_API_KEY}`

function Comments() {
  const [comments, setComments] = useState([]);
  const [yourname, setYourname] = useState('');
  const [yourquote, setYourquote] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true);
  

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

    <div className='form-comment'>
      <div className='header'>
      <p className='header-detail'>did we miss your favorite line? drop it here</p>
    </div>
      <div className='comment-form'>
        <Form onSubmit={handlePostRequest} className='form-container'>
          <Form.Group className="text-name" controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              value={yourname}
              onChange={(ev) => setYourname(ev.target.value)}/>
          </Form.Group>
          <Form.Group className="text-quote" controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
            <Form.Control
              as="textarea" rows={2}
              placeholder="what was it Shakespeare said?"
              value={yourquote}
              onChange={(ev) => setYourquote(ev.target.value)}/>
            <input type="submit" className='submit'/>
          </Form.Group>
        </Form>
      </div>

      <div className='comments'>
        {comments.map((comment) => (
          <div className='comment-box' key={comment.id}>
            <p className='comment-name'>{comment.fields.yourname}:</p>
            <p className='comment-quote'>{comment.fields.yourquote}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Comments;