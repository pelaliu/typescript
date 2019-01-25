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
                <input onKeyDown={this.onInput} onChange={this.valueChange} />
                {this.state.dataList.map((item, index) => {
                    return <div key={index}>{item}</div>
                })}
            </div>
        )
    }

    protected onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        
        this.setState({ hasKeyCode: e.keyCode === 13 });       
    }

    protected valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { dataList, hasKeyCode } = JSON.parse(JSON.stringify(this.state));

        hasKeyCode && dataList.push(e.target.value);
        this.setState({ dataList });
    }


}
export default TodoList;