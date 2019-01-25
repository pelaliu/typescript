interface IDataListItem {
    title: string;
    isActived: boolean;
    readonly [index: number]: string;
}

interface IState {
    dataList: IDataListItem[];
    type: string;
}

const initState = {
    dataList: [],
    type: 'All'
}
export default (state = initState, action) => {
    switch (type) {
        case 'ACTIVED':
            state.type = 'Actived';
        case 'UNACTIVED':
            state.type = 'UnActived';
        default:
            state.type = 'All';
    }
    return state;
  }