function createReducer(initialState, reducerMap) {
    return (state = initialState, message) => reducerMap[message.type] ?
            reducerMap[message.type](state, message) :
            state;
}

export { createReducer };