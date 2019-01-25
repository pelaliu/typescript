import * as React from 'react';
import './index.css';
import ClassNames from 'classnames';

interface IDataListItem {
    title: string;
    isActived: boolean;
    readonly [index: number]: string;
}

interface IState {
    dataList: IDataListItem[];
    hasKeyCode: boolean;
    value: string;
}

interface IProps {
    type: string;
    checkout: void;
}

export default class TodoList extends React.Component<IProps,IState> {

    public readonly state: IState = {
        dataList: [],
        hasKeyCode: false,
        value: ''
    }

    public render() {
        const data = this.renderList(this.props.type);
        return (
            <div>
                <input value={this.state.value} onKeyDown={this.keydown} onChange={this.changeValue} />
                <br />
                <button className='button' onClick={this.props.checkout.bind(this, 'ALL')}>All</button>
                <button className='button' onClick={this.props.checkout.bind(this, 'ACTIVED')}>Actived</button>
                <button className='button' onClick={this.props.checkout.bind(this, 'UNACTIVED')}>UnActived</button>

                <ol>
                    {
                        data.map((item, index) => {
                            return <li className={ClassNames(item.isActived && 'dashline')}
                                onClick={this.handlerClick.bind(this, index)}
                                key={index}>
                                {item.title}
                            </li>
                        })
                    }
                </ol>

            </div>
        )
    }

    protected renderList = (type: string) => {
        let { dataList } = { ...this.state };
        switch (type) {
            case 'Actived':
                dataList = dataList.filter(item => item.isActived);
                break;
            case 'UnActived':
                dataList = dataList.filter(item => !item.isActived);
                break;
            default:
                break;
        }
        return dataList;
    }

    protected handlerClick(index: number, e: React.ChangeEvent<HTMLInputElement>) {
        const { dataList } = { ...this.state };
        dataList[index].isActived = !dataList[index].isActived;
        this.setState({ dataList });
    }

    protected keydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { dataList } = { ...this.state };
        if (e.keyCode === 13) {
            dataList.push({ title: e.currentTarget.value, isActived: false });
            this.setState({ dataList, value: '' });
        }
    }

    protected changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.currentTarget.value });
    }
}
