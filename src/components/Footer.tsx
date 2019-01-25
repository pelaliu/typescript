import * as React from 'react'
import FilterLink from '../containers/FilterLink'
class Footer extends React.Component {
  public render() {
    const options = [{
      filter: 'SHOW_ALL',
      text: 'All'
    }, {
      filter: 'SHOW_ACTIVE',
      text: 'Active'
    }, {
      filter: 'SHOW_COMPLETED',
      text: 'Completed'
    }];
    return (
      <div>
        {options.map((item, index) => {
          return <FilterLink key={index} filter={item.filter}>{item.text}</FilterLink>
        })}
      </div>
    )
  }
}

export default Footer;