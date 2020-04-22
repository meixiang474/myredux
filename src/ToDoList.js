import React, { useState, useCallback, useEffect } from 'react';
import style from './ToDoList.less';
import Control from './components/Control';
import ToDos from './components/ToDos';
import {createSet, createAdd, createRemove, createToggle} from './action';
import reducer from './reducers'

function bindActionCreators(actionCreators, dispatch){
  const ret = {}
  for(let key in actionCreators){
    ret[key] = function(...args){
      const actionCreator = actionCreators[key]
      const action = actionCreator(...args)
      dispatch(action)
    }
  }
  return ret
}

const store = {
  toDos: [],
  incrementCount: 0,
}

export default function (props) {
  const [toDos, setToDos] = useState([]);
  const [incrementCount, setIncrementCount] = useState(0);

  const dispatch = (action) => {
    const setters = {
      toDos: setToDos,
      incrementCount: setIncrementCount
    }
    if(typeof action === 'function'){
      action(dispatch, () => store);
      return;
    }
    const newState = reducer(store, action)
    for(let key in newState){
      setters[key](newState[key]);
    }
  }

  useEffect(() => {
    Object.assign(store, {toDos, incrementCount});
  }, [toDos, incrementCount])

  useEffect(() => {
    dispatch(createSet(JSON.parse(localStorage.getItem('toDos'))))
  }, [])

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos])

  return (
    <div className={style.todoList}>
      <div className={style.head}>
        <Control {
          ...bindActionCreators({
            addTodo: createAdd
          }, dispatch)
        }/>
      </div>
      <div className={style.body}>
        <ToDos {
          ...bindActionCreators({
            removeTodo: createRemove,
            toggleTodo: createToggle
          }, dispatch)
        } toDos={toDos}/>
      </div>
    </div>
  )
}