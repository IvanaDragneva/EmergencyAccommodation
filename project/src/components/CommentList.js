import React from 'react';
import {Form} from "react-bootstrap";

function CommentList({commentsList}){
        return (
             commentsList.map((comment, index) => {
                 return <Form.Control className="mt-3" as="textarea" key={index}>{comment}</Form.Control>
             })
        ) 
}

export default CommentList;
