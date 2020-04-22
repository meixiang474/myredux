import React, {memo} from 'react';
import style from '../assets/ToDos.less';
import ToDoItem from './ToDoItem';

export default memo(function ToDos(props) {
  const {toDos} = props;
  return (
    <ul>
      {
        toDos.map(item => <ToDoItem {...props} toDo={item} key={item.id}/>)
      }
    </ul>
  )
})