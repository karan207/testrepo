export default (state, action) => {
	switch(action.type){
		case "TOGGLE_AUTH":
			return{
				...state,
				auth: !state.auth
			}
		default:
			return state;
	}
}