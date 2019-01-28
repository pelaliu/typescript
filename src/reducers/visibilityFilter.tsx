interface IAction {
  type: string;
  filter: string;
}
const visibilityFilter = (state = 'SHOW_ALL', action: IAction) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }
  
  export default visibilityFilter;