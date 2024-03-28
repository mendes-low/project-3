import React, { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>Count -</button>
            <p style={{ color: 'red' }}>{count}</p>
            <button onClick={() => setCount(count + 1)}>Count +</button>
        </div>
    )
}

export function ChangeBackgroundColor() {
    const [bgColor, setBgColor] = useState(randomColor());
    const bodyStyle = document.body.style;
    bodyStyle.backgroundColor = bgColor;

    function randomColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function changebgColor() {
        setBgColor(randomColor());
    }

    return (
        <div>
            <button onClick={changebgColor}>
                Change backgroud color
            </button>
        </div>
    )
}

export function ToggleText() {
    const [toggleText, setToggleText] = useState(true);

    return (
        <div>
            <button onClick={() => setToggleText(!toggleText)}>Click</button>
            {toggleText ? <p>1</p> : <p>0</p>}
        </div>
    )

}

export function ToDoList() {
    const [list, setList] = useState('');
    const [inputValue, setInputValue] = useState([]);

    function handleList(e) {
        setList(e.target.value);
    }

    const addList = () => {
        if (list.trim() !== '') {
            setInputValue([...inputValue, list]);
            setList('');
        }
    }

    return (
        <div>
            <input placeholder='Enter list' type='text' value={list} onChange={handleList} />
            <button onClick={addList}>Add to list</button>
            <ul>
                {inputValue.map((list, index) => (
                    <li key={index}>{list}</li>
                ))}
            </ul>
        </div>
    )
}

export function Todo() {
    const [lists, setLists] = useState([
        // { id: 1, text: 'text1' },
        // { id: 2, text: 'text2' },
    ]);
    const [value, setValue] = useState('');

    function addList() {
        let newList = { id: Date.now(), text: value };
        setLists([...lists, newList]);
        setValue('');
    }

    return (
        <>
            <div>
                <input
                    type='text'
                    value={value}
                    onChange={e => setValue(e.currentTarget.value)}
                />
                <button onClick={() => addList()}>add</button>
            </div>
            <ul>
                {lists.map(l => (
                    <li key={l.id}>{l.text}</li>
                ))}
            </ul>
        </>
    );
}

