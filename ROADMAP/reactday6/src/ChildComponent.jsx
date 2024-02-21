import React from 'react'
import GranChildComponent from './GrandChildComponent'

function ChildComponent(props) {
    const sendDataToParent = () => {
        props.onData('Hello from child')
    }
    return (
        <div>
            <h2>Childcomponent</h2>
            <GranChildComponent message={props.message}/>
            <button onClick={sendDataToParent}>Send Data to Parent</button>
        </div>
    )
}

export default ChildComponent