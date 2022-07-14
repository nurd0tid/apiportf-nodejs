import {
	// AUTH_TOKEN,
	// AUTHENTICATED,
	// SHOW_AUTH_MESSAGE,
	// HIDE_AUTH_MESSAGE,
	// SIGNOUT_SUCCESS,
	// SIGNUP_SUCCESS,
	// SHOW_LOADING,
	AUTHENTICATED, 
	NOT_AUTHENTICATED
} from '../constants/Auth';

// const initState = {
//   loading: false,
//   message: '',
//   showMessage: false,
//   redirect: '',
//   accessToken: localStorage.getItem(AUTH_TOKEN),
// }

const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: {}
};

// export default function authReducer(state = initialState, action) {
//   switch (action.type) {
//     case AUTHENTICATED:
//       return {
//         authChecked: true,
//         loggedIn: true,
//         currentUser: action.payload,
//       };
//     case NOT_AUTHENTICATED:
//       return {
//         authChecked: true,
//         loggedIn: false,
//         currentUser: {}
//       };
//     default:
//       return state;
//   }
// }

const auth = (state = initState, action) => {
	switch (action.type) {
		case AUTHENTICATED:
			return {
				...state,
				loading: false,
				redirect: '/',
				token: action.token
			}
		case SHOW_AUTH_MESSAGE: 
			return {
				...state,
				message: action.message,
				showMessage: true,
				loading: false
			}
		case HIDE_AUTH_MESSAGE: 
			return {
				...state,
				message: '',
				showMessage: false,
			}
		case SIGNOUT_SUCCESS: {
			return {
				...state,
				token: null,
				redirect: '/',
				loading: false
			}
		}
		case SIGNUP_SUCCESS: {
			return {
			  ...state,
			  loading: false,
			  token: action.token
			}
		}
		case SHOW_LOADING: {
			return {
				...state,
				loading: true
			}
		}
		default:
			return state;
	}
}

export default auth