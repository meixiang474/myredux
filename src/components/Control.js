import React, {useState, memo} from 'react';
import style from '../assets/Control.less';
import {createAdd} from '../action';

export default memo(function Control(props) {
  const [text, setText] = useState('');
  const {addTodo} = props;
  const onChange = (e) => {
    setText(e.target.value);
  }
  const onClick = () => {
    if(!text.trim()) return;
    addTodo(text.trim())
    setText('');
  }
  return (
    <>
      <label htmlFor="input">ToDoList</label>
      <input id="input" type="text" className={style.input} value={text} onChange={onChange}/>
      <button className={style.toDo} onClick={onClick}>
        TODO
      </button>
    </>
  )
})