const SET_USER = 'SET_USER';

let initialState = {
    user: {
        id: null,
        avatar_url: null,
        name: null,
        login: null,
        followers: null,
        following: null,
    }

};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return { ...state, ...state.user, user: action.user }
        }
        default:
            return state;
    }
}



export const setUser = (user) => {

    return { type: SET_USER, user }
}

export default userReducer;