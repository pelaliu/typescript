import * as React from 'react';
import ClassNames from 'classnames';

interface IProps {
  active: boolean;
  onClick: any;
  children: any;
}
class Link extends React.Component {
  public readonly props: IProps;
  public render() {
    return (
      <button className={ClassNames('submit', this.props.active && 'choose')} onClick={e => {
        e.preventDefault();
        this.props.onClick();
      }}>
        {this.props.children}
      </button>
    )
  }
}

export default Link;