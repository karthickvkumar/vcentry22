const initalState = {
  userList : []
}

export default function AppReducer(state = initalState, action){
  // console.log(state, action);
  switch(action.type){
    case "SEND_USER_DATA":
      return {...state, userList : [...state.userList, action.value]}
    default:
      return state
  }
}