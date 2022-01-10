import React from 'react';

const Item = props => {
    const handleclick = () => {
        //console.log("clicking", props.item.task)
        props.handleToggleItem(props.item)
    }

    return (
        <div onClick={handleclick} className={`item${props.item.completed ? 'purchased' : ''} `}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Item