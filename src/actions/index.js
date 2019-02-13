export const setSongs=songs=>(
    {type:"SONGS",
    songs:songs}
    )
export const showList=flag=>(
    {type:"SHOW_LIST",
    flag:flag}
    )

export const showAddModalAction=flag=>(
    {type:"SHOW_ADD_MODAL",
    flag:flag}
    )

export const showDenyAddModalAction=flag=>(
    {type:"SHOW_DENY_ADD_MODAL",
    flag:flag}
    )

export const showConfirmAddPasswordAction=flag=>(
    {type:"SHOW_CONFIRM_ADD_PASSWORD",
    flag:flag}
    )

export const showWrongAddPasswordAction=flag=>(
    {type:"SHOW_WRONG_PASSWORD_ADD_MODAL",
    flag:flag}
    )