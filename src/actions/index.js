export const setSongs=songs=>(
    {type:"SONGS",
    songs:songs}
    )

export const renderDeleteSong=(flag,id)=>(
    {type:"DELETE_SONG",
    flag:flag,
	id:id		
			}
    )