const init = {
  info: JSON.parse(localStorage.getItem("info")) || []
}

function infoCard (state = init, action){
  if(action.type == "add"){
    state.info.push(action.payload)
    localStorage.setItem("info", JSON.stringify(state.info))
    return{
      info: state.info
    }
  }

  if (action.type == "delete") {
    state.info.splice(action.payload.index, 1)
    localStorage.setItem("info", JSON.stringify(state.info))
    return {
      info: state.info
    }
  }

  if (action.type == "edit") {
    state.info.splice(action.payload.index, 1, action.payload)
    localStorage.setItem("info", JSON.stringify(state.info))
    return {
      info: state.info
    }
  }

  return state
}
export  {infoCard}