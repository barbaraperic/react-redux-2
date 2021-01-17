import React from 'react'

const List = (props) => {
  const {
    items,
    remove,
    toggle
  } = props

  return (
    <ul>
      {items.map(item => (
        <div style={{ display: 'flex' }} key={item.id}>
          <li 
            onClick={() => toggle(item.id)}
            style={ item.complete ? { textDecorationLine: 'line-through' } : {}}
          >
            {item.name}
          </li>
          <button onClick={() => remove(item.id)}>X</button>
        </div>
      ))}
    </ul>
  )
}

export default List