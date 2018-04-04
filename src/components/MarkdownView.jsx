import React from 'react';
import { FormControl} from "react-bootstrap";
import '../styles/css/MarkdownView.css'

const MarkdownView = function (props) {
    return (
        <div className='markdownView'>
            <h3>Mark Down</h3>
            <FormControl componentClass="textarea" onChange={props.handleChange} cols='50' rows='25' />
        </div>
        
    )
}

export default MarkdownView