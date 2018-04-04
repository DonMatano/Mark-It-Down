import React from 'react';
import '../styles/css/ResultView.css'

const ResultView = function (props) {
    return (
        <div className='resultView'>
            <h1>Results</h1>
            <div dangerouslySetInnerHTML={{ __html: props.result }} >
            </div>
        </div>

    )
}

export default ResultView