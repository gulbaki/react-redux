import React from 'react'


const Rainbow = (WrabbedComponent) => {
 
    const colors  = ['red', 'pink', 'orange', 'blue' ];
    const randomColor  = colors[Math.floor(Math.random() * 3) ]; 

    const className = randomColor + '-text';
    
    return (props) => {
        return (
            <div className={className}>
                <WrabbedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;