import * as React from 'react';

interface IDataListItem {
    title: string;
    isActived: boolean;
}

interface IState {
    dataList: IDataListItem[];
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
                <ul>
                    {this.state.dataList.map((item, index) => <ol onClick={this.handlerClick.bind(this,item)} key={index}>{`${index + 1}.${item.title}`}</ol>)}
                </ul>
                <ul>
                    <li>All</li>
                    <li>Actived</li>
                    <li>UnActived</li>
                </ul>
            </div>
        )
    }

    protected handlerClick = () => {

    }

    protected keydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { dataList } = { ...this.state };
        if (e.keyCode === 13) {
            dataList.push({title: e.currentTarget.value,isActived: false});
            this.setState({ dataList, value: '' });
        }
    }

    protected changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.currentTarget.value });
    }

}