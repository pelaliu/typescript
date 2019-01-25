const initState = {
    dataList: []
}
export default (state = initState, action) => {
    switch (type) {
        case 'ACTIVED':
            return state.dataList.filter(item => item.isActived);
        case 'UNACTIVED':
            return state.dataList.filter(item => !item.isActived);
        default:
            return state;
    }
  }