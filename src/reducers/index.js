const initialState={
	
	songs:[{title:'prva pesma', performer:'neki neko', 'id':1

	},{title:'druga pesma', performer:'neko drugi', 'id':2}],
}

const rootReducer=(state=initialState, action)=>{
    switch (action.type) {
	case "SONGS":
    return Object.assign({},state, {songs:action.songs});

    case "DELETE_SONG":
     return {...state, songs:{...state.songs,[action.id]:{...state.songs[action.id],deleteSong:action.flag}}}

    default:
    return state;

}
};

export default rootReducer;