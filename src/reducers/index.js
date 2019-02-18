const initialState={
    showApp:true,
    showAddModal:false,
    showDenyAddModal:false,
    showConfirmAddPassword:false,
    showWrongPasswordAddModal:false,
	
	songs:[{title:'prva pesma', performer:'neki neko', 'id':1

	},{title:'druga pesma', performer:'neko drugi', 'id':2}],
}

const rootReducer=(state=initialState, action)=>{
    switch (action.type) {
	case "SONGS":
    return Object.assign({},state, {songs:action.songs});

    case "SHOW_LIST":
    return Object.assign({},state, {showApp:action.flag});

     case "SHOW_ADD_MODAL":
    return Object.assign({},state, {showAddModal:action.flag});

    case "SHOW_DENY_ADD_MODAL":
    return Object.assign({},state, {showDenyAddModal:action.flag});

    case "SHOW_CONFIRM_ADD_PASSWORD":
    return Object.assign({},state, {showConfirmAddPassword:action.flag});

    case "SHOW_WRONG_PASSWORD_ADD_MODAL":
    return Object.assign({},state, {showWrongPasswordAddModal:action.flag});

    default:
    return state;

}
};

export default rootReducer;