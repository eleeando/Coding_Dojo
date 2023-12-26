import React, { useState } from 'react'

const TabsComponent = (props) => {
    
    const [content, setContent] = useState(["","",""])
    const [text, setText] = useState("")
    const [curentTab, setCurentTab] = useState(0)
    
    const tabChange =(i) =>{
        const newData = content
        newData[curentTab]=text
        setContent(newData)
        setText(content[i])
        setCurentTab(i)
        // console.log(content);
    }


    return (
        <div>
        <button onClick={()=> tabChange(0)}>Tab1</button>
        <button onClick={()=> tabChange(1)}>Tab2</button>
        <button onClick={()=> tabChange(2)}>Tab3</button>
        <br />
        {/* <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/> */}
        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setText(e.target.value)} value={text}>{text}</textarea>
        </div>
    )
}

export default TabsComponent