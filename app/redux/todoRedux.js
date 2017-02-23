const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED'
}

export const actionCreators = {
  add: (item) => {
    return {type: types.ADD_ITEM, payload: item}
  },
  remove: (index) => {
    return {type: types.REMOVE_ITEM, payload: index}
  },
  toggle: (index) => {
    return {type: types.TOGGLE_ITEM_COMPLETED, payload: index}
  }
}

const initialState = {
  items: ['Click me', 'Learn React Native', 'Start Coding', 'Deploy App'],
}

export const reducer = (state = initialState, action) => {
  const {items} = state
  const {type, payload} = action

  switch(type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [payload, ...items]
      }
    }
    case types.REMOVE_ITEM: {
      return {
        ...state,
        items: items.filter((item, index) => index !== payload)
      }
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      return {
        ...state,
        items: items.map((item, index) => index === payload ? 'checked' : index)
      }
    }
    default: {
      return state
    }
  }
}
