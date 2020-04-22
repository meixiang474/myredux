import React, {memo} from 'react';
import style from '../assets/ToDoItem.less';
import {createRemove, createToggle} from '../action';

export default memo(function ToDoItem(props) {
  const {toDo, removeTodo, toggleTodo} = props;

  const toggle = () => {
    toggleTodo(toDo.id)
  }

  const remove = () => {
    removeTodo(toDo.id)
  }

  return (
    <li className={style.item}>
      <div className={toDo.complete ? style.textLine : style.text}>
        {toDo.text}
      </div>
      <div className={style.buttons}>
        <button onClick={toggle}>
          {toDo.complete ? '撤销' : '完成'}
        </button>
        <button onClick={remove} style={{marginLeft: 10}}>
          删除
        </button>
      </div>
    </li>
  )
})