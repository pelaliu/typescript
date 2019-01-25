import * as React from 'react';

interface IState {
    dataList: string[];
    hasKeyCode: boolean;
    value: string;
}

export default class TodoList extends React.Component {

    public readonly state: IState = {
        dataList: [],
        hasKeyCode: false,
        value: '',
    }

    public render() {
        return (
            <div>
                <input value={this.state.value} onKeyDown={this.keydown} onChange={this.changeValue} />
                <div>
                    {this.state.dataList.map((item, index) => <div key={index}>{`${index + 1}.${item}`}</div>)}
                </div>
                <ul>
                    <li>All</li>
                    <li>Actived</li>
                    <li>UnActived</li>
                </ul>
            </div>
        )
    }

    protected keydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { dataList } = { ...this.state };
        if (e.keyCode === 13) {
            dataList.push(e.currentTarget.value);
            this.setState({ dataList, value: '' });
        }
    }

    protected changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.currentTarget.value });
    }

}