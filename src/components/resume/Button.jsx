import React from 'react'

const Button = ({ children }) => {
    return (
        <button className="button link">
            {children}
        </button>
    )
}

export default Button