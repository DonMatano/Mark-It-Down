import React from 'react';

const ResultView = function (props) {
    return (
        <div>
            <h1>Results</h1>
            <div dangerouslySetInnerHTML={{ __html: props.result }} >
            </div>
        </div>

    )
}

export default ResultView