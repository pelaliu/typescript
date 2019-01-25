import * as React from 'react';
import { Input, List } from 'antd';
// interface Isstate {
//     dataList: string[];
// }
class TodoList extends React.Component {
    state = {
        dataList: []
    }
    // public state: Isstate = {
    //     dataList: [],
    // }
     onInput(e: Event) {
        const { dataList } = JSON.parse(JSON.stringify(this.state));
        const dataItem = e.target.keycode === 13 && {title: e.target.value};

        dataItem && dataList.push(dataItem);
        this.setState({ dataList });
    }
    render() {
        
        return (
            <div>
                <Input onChange={this.onInput.bind(this)} />
                <List dataSource={this.state.dataList} />
            </div>
        )
    }
}
export default TodoList;