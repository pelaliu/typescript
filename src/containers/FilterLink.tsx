import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Links'
interface ITodos {
  id: number;
  completed: boolean;
  text: string;
}
interface IState {
  todos: ITodos[];
  visibilityFilter: string;
  filter: string;
}
const mapStateToProps = (state: IState, ownProps: any) => {
  debugger
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: (param: { type: string; filter: string; }) => void, ownProps: any) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;