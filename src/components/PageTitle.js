import React from 'react';

function PageTitle(props) {
    return (
        <div className='mt-4'>
            <h1>{props.title}</h1>
        </div>
    );
}

export default PageTitle;