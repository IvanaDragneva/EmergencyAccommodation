 import React, {useEffect, useState} from 'react';
 import {FloatingLabel, Form, Container, Button} from "react-bootstrap";
 import axios from 'axios'
import CommentList from './CommentList';
import './CommentForm.css'

 function CommentForm(){   
    const [content, setContent] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const commentsStore = JSON.parse(localStorage.getItem('commentsStore'))
        if(commentsStore){
            setComments(commentsStore)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('commentsStore', JSON.stringify(comments))
    }, [comments])

    const handleChange = (event) => {
        event.preventDefault();
        const content = event.target.value;
        setContent(content);
         axios({
             method: "POST",
             data: {
                 content: content
             },
             withCredentials: true,
             url: "http://localhost:3001/api/users/:comment"
         })
    }
    const addComment = () => {
       if(content === ''){
         return;
       }
       setComments([...comments, content])
     }

      return (
          <Container id="comment-form" className="p-3 m-auto shadow-sm">
          <h5 className="text-center">Comment Section</h5>
           <Form>
             <FloatingLabel controlId="floatingTextarea" label="Add Comment">
             <Form.Control 
             as="textarea" 
             placeholder="Leave a comment here"
             onChange={handleChange} 
              />
             </FloatingLabel>
             <Button variant="success btn-block" onClick={addComment}
             >Post comment</Button>           
           </Form>
            <CommentList commentsList={comments}/>
          </Container>
       )
 }

export default CommentForm;
