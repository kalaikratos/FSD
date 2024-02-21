
import React, { useState } from "react";
import ChildComponent from './ChildComponent'; 
function ParentComponent() {
    const [message, setMessage] = useState('Hello');
    const [childData, setChildData] = useState('');
    const handleDataFromChild = (data) => {
        setChildData(data);
    }
    return (
        <div>
        <h1>Parentcomponent</h1>
      
        <ChildComponent message={message} onData={handleDataFromChild} />
        
    </div>
    )
}
export default ParentComponent;