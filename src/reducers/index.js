const initialState={
	songs:[{title:'prva pesma', performer:'neki neko', 'id':1

	},{title:'druga pesma', performer:'neko drugi', 'id':2}],
}

const rootReducer=(state=initialState, action)=>{
    switch (action.type) {
	case "SONGS":
    return Object.assign({},state, {songs:action.songs});

    default:
    return state;

}
};

export default rootReducer;