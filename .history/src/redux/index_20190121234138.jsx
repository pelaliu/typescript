const initState = {
    dataList: []
}
export default (state = initState, action) => {
    switch (type) {
        case 'ACTIVED':
            return dataList.filter(item => item.isActived);
        case 'UNACTIVED':
            return dataList.filter(item => !item.isActived);
        default:
            return state;
    }
  }