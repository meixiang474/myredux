function combineReducers(reducers){
  return function reducer(state, action){
    const changed = {}
    for(let key in reducers){
      changed[key] = reducers[key](state[key], action)
    }
    return {
      ...state,
      ...changed
    }
  }
}
const reducers = {
  toDos(state,action){
    const {type, payload} = action
    switch(type){
      case 'set':
        return payload
      case 'add':
        return [...state, payload]
      case 'remove':
        return state.filter(item => item.id !== payload)
      case 'toggle':
        return state.map(item => item.id === payload ? {...item, complete: !item.complete} : item)
    }
    return state
  },
  incrementCount(state, action){
    const {type} = action
    switch(type){
      case 'set':
        return state + 1
      case 'add':
        return state + 1
    }
    return state
  }
}

export default combineReducers(reducers)