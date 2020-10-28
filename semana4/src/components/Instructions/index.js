import React from 'react';
import './index.css'

const Instructions = (props) => {
    const { data, onClick } = props
    return (
        <div>
                <button className="emoji-btn" onClick={onClick}>
                <span role="img" aria-label="bomb" id="bomb">{data}</span>
                </button>
                <p>Click on an emoji to view the emoji short name.</p>
                
      </div>
    )
}

export { Instructions }