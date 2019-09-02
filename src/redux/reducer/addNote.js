const initialState = {
    noteList: [],
    isLoading: false,
    isError: false,
    isFulfilled: false,
}

export default (addNote = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NOTE_PENDING":
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isError: false
            }
        case "GET_NOTE_REJECTED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: false,
                isError: true
            }
        case "GET_NOTE_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                isError: false,
                noteList: action.payload.data.result
            }
        default:
            return state
    }
})