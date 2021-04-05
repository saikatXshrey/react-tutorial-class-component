import React, { useEffect } from 'react'

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        setTimeout(() => {
            alert('Saved to Cloud');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is working!!</p>
            <button
                style={style}
                onClick={props.clicked}>Toggle Persons!</button>
        </div>
    );
}

export default React.memo(cockpit);