import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    SET_ADDRESS
  } from '../utils/actions'
  
  const main_reducer = (state : any , action : any) => {
  
    switch (action.type) {
      case SIDEBAR_OPEN:
        return {...state, isSidebarOpen :true}
      case SIDEBAR_CLOSE:
        return { ...state, isSidebarOpen: false }
      case SET_ADDRESS:
        return {...state , address : action.payload}  
  
      default:
        return state
      //throw new Error(`No Matching "${action.type}" - action type`)
    }
  }
  
  export default main_reducer