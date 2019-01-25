import * as React from 'react';
import Input from 'antd/lib/input';
interface Isstate {
    actived: boolean;
    dataList: string[];
}
class TodoList extends React.Component<{}> {
    // constructor(props) {
    //     super(props);
    // }
    public state: Isstate = {
        actived: true,
        dataList: [],
    }
    onInput = () => {
            
    }
    render() {
        
        return (
            <div>
                <Input onChange={this.onInput} />
                <div>
                    {}
                </div>
            </div>
        )
    }
}
export default TodoList;