import React from 'react';

const MarkdownView = function (props) {
    return (
        <div>
            <h1>Mark Down</h1>
            <textarea name="markDown" cols="30" rows="10" onChange={props.handleChange}></textarea>
        </div>
        
    )
}

export default MarkdownView