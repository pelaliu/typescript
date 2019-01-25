import * as React from 'react';

interface IState {
    dataList: string[];
    hasKeyCode: boolean;
    value: string;
}

class TodoList extends React.Component {

    public readonly state: IState = {
        dataList: [],
        hasKeyCode: false,
        value: '',
    }

    public render() {
        return (
            <div>
                <input value={this.state.value} onKeyDown={this.keydown} onChange={this.changeValue} />
                {this.state.dataList.map((item, index) => <div key={index}>{item}</div>)}
            </div>
        )
    }

    protected keydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { dataList } = JSON.parse(JSON.stringify(this.state));
        if (e.keyCode === 13) {
            dataList.push(e.currentTarget.value);
            this.setState({ dataList });
        }
    }

    protected changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.currentTarget.value });
    }

}
export default TodoList;