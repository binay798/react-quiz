const reducer = (state,action) => {

    switch(action.type) {
        case "GET_QUESTIONS":
            return state;
        default:
            return state;
    }

    return {
        ...state
    }
}

export default reducer;