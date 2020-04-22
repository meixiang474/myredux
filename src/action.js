export function createSet(payload){
  return {
    type: 'set',
    payload
  }
}

export function createAdd(text){
  return (dispatch, getState) => {
    setTimeout(() => {
      const {toDos} = getState();
      if(!toDos.find(toDo => toDo.text === text)){
        dispatch({
          type: 'add',
          payload: {
            text,
            id: Date.now(),
            complete: false
          }
        })
      }
    }, 3000)
  }
}

export function createRemove(payload){
  return {
    type: 'remove',
    payload
  }
}

export function createToggle(payload){
  return {
    type: 'toggle',
    payload
  }
}