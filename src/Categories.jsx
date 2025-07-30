import React from 'react'
import './Categories.css'

const Categories = ({onCategorySelect}) => {
  return (
    <div className='Category-div'>
        <div className='Card-Category'>
            <h2>Select Your Category</h2>
            <div className='button-div'>
                <button onClick={() => onCategorySelect(9)}>General Knowledge</button>
                <button onClick={() => onCategorySelect(27)}>Animal</button>
                <button onClick={() => onCategorySelect(17)}>Science & Nature</button>
                <button onClick={() => onCategorySelect(22)}>Geography</button>
                <button onClick={() => onCategorySelect(21)}>Sports</button>
                <button onClick={() => onCategorySelect(32)}>Cartoons & Animation</button>
                <button onClick={() => onCategorySelect(10)}>Books</button>
                <button onClick={() => onCategorySelect(15)}>Video Games</button>
            </div>
        </div>
    </div>
  )
}

export default Categories