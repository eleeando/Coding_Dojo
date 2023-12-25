import React from 'react'

const ListComponent = ({lists,updateList, deleteList}) => {  //props are objects that will go from the parent to the child
    return (
        <div>
            {lists.map((list, idx)=> <div key={idx} style={{display:'flex'}}>
                <h4 style={list.status? {textDecoration:"line-through"}:{textDecoration:"none"} }>{list.content}</h4> 
                <input type="checkbox" checked={list.status} 
                onChange={(e)=>updateList(idx) }
                />
                <button onClick={()=> deleteList(idx)}>Remove</button>
                </div>)}
        </div>
    )
}

export default ListComponent