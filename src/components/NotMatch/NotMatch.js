import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotMatch.css'

const NotMatch = () => {
    const history=useHistory()
    return (
        <div className='not-match'>
            <h1>404!!!</h1>
            <p>Page Not Found</p>
            <button variant="contained" color="primary" onClick={()=>history.goBack()} className='blue-button'>Back</button>
        </div>
    );
};

export default NotMatch;