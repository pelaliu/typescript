import * as React from 'react';

interface IState {
    dataList: string[];
    hasKeyCode: boolean;
}

class TodoList extends React.Component {

    public readonly state: IState = {
        dataList: [],
        hasKeyCode: false
    }

    public render() {
        return (
            <div>
                <input onKeyDown={this.onInput}/>
                {this.state.dataList.map((item, index) => {
                    return <div key={index}>{item}</div>
                })}
            </div>
        )
    }

    protected onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { dataList } = JSON.parse(JSON.stringify(this.state));
        if(e.keyCode === 13) {
            dataList.push(e.currentTarget.value);
            this.setState({ dataList });
        }
    }

}
export default TodoList;