import React, { useState } from 'react'
import logo from './1.png';
import { FaPlusSquare, FaTrashAlt } from 'react-icons/fa';
import {FcTodoList} from 'react-icons/fc';

export const To_do_list = () => {

    const [input, setinput] = useState([]);
    const [items, setitems] = useState([]);

    const allitems = (e) => {

        if (!input) {

        } else {
            setitems([...items, input]);
            setinput('');
        }

    }

    const del = (id) => {
        const updated = items.filter((val, ind) => {
            return ind != id
        });
        setitems(updated);
    }


    return (
        <div>
            <div className='div_main'>
                <div className='div_child'>
                    <h1>To-Do List <span className='logo-todo'> <FcTodoList/></span></h1>
                    <img className='logo' src={logo} alt="logo" />
                </div>

                <div className='input-div'>
                    <input
                        className='input'
                        value={input}
                        placeholder="Add Your Item"
                        onChange={(e) => { setinput(e.target.value) }}

                    />
                </div>
                <FaPlusSquare className='add-btn' onClick={allitems} />
                
                {
                    items.map((val, ind) => {
                        return (<>
                            <div key={ind}>

                                <div>
                                    <ul className='list'>{val} <span className='del-btn' onClick={() => del(ind)}> <FaTrashAlt /> </span></ul>
                                </div>

                            </div>

                        </>)


                    })
                }
                <div>
                    <button className='rmall-btn' onClick={() => { setitems([]) }}>Remove All</button>
                </div>

            </div>

        </div>

    )
}
export default To_do_list;