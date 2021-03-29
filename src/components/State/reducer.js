export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after dev and set to null
    token: 'BQBU3o0MHwt4aN4f28g4l1WH_k9_tiRX4fTlTGLyz_gOICqBdUzwuBgzfxhOiO8UcesAqCu_yTClQnhc9YfQh8Su270RUZp9J36yVjwBTiI_MAgCk8RjjiguBebV2UU0krKws4jWrx9g75DSKmm3fnfftTu6n0S5l5NmYSbM25Hyy5S8',
}

const reducer = (state,action) => {
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default reducer;