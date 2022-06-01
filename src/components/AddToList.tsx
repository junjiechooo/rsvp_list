import React, { useState } from 'react';
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => {

  const [input, setInput] = useState({
      name: "",
      age: "",
      note: "",
      img: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
  }

  const handleClick = () => {
    if(!input.name || !input.age) return

    setPeople([
        ...people,
        {
            name: input.name,
            age: parseInt(input.age),
            url: input.img,
            note: input.note
        }
    ]);

    setInput({
        name: "",
        age: "",
        img: "",
        note: ""
    })
  }

  return (
    <div className='AddToList'>
        <input 
            type="text"
            placeholder='Name'
            className='AddToList-input'
            value={input.name}
            onChange={(handleChange)}
            name="name"
        />
        <input 
            type="number"
            placeholder='Age'
            className='AddToList-input'
            value={input.age}
            onChange={handleChange}
            name="age"
        />
        <input 
            type="text"
            placeholder='Image URL'
            className='AddToList-input'
            value={input.img}
            onChange={handleChange}
            name="img"
        />
        <textarea
            placeholder='Note'
            className='AddToList-input'
            value={input.note}
            onChange={handleChange}
            name="note"
        />
        <button
            className='AddtoList-btn'
            onClick={handleClick}
        >
            Add to List
        </button>
    </div>
  )
}

export default AddToList