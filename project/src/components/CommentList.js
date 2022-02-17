import React from 'react';
import {Form, Button, InputGroup} from "react-bootstrap";

function CommentList({commentsList}){
        return (
             commentsList.map((comment, index) => {
                 //return <Form.Label key={index}>{comment}</Form.Label>
                 return <Form.Control className="mt-3" as="textarea" key={index}>{comment}</Form.Control>
                //  return (
                //      <div>
                //      <InputGroup>
                //      <Form.Control className="mt-3" as="textarea" key={index}>{comment}</Form.Control>
                //      <Button variant="outline-secondary mt-3" className="ml-5">Delete</Button>
                //      </InputGroup>
                //      </div>
                //  )
                

             })
        ) 
}

export default CommentList;
