import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
	AUTH_TOKEN,
	SIGNIN,
	SIGNOUT,
	SIGNUP,
} from '../constants/Auth';
import {
	showAuthMessage,
	authenticated,
	signOutSuccess,
	signUpSuccess,
} from "../actions/Auth";

import JwtAuthService from 'services/JwtAuthService';

export function* signIn() {
  yield takeEvery(SIGNIN, function* ({payload}) {
		const {email, password} = payload;
		try {
			const data = yield call(JwtAuthService.signIn, email, password);
			if (data.message) {
				yield put(showAuthMessage(data.message));
			} else {
				localStorage.setItem(AUTH_TOKEN, data.data.id);
				yield put(authenticated(data.data.id));
			}
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
		try {
			const signOutUser = yield call(JwtAuthService.signIn);
			if (signOutUser === undefined) {
				localStorage.removeItem(AUTH_TOKEN);
				yield put(signOutSuccess(signOutUser));
			} else {
				yield put(showAuthMessage(signOutUser.message));
			}
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

export function* signUp() {
  yield takeEvery(SIGNUP, function* ({payload}) {
		const {email, password} = payload;
		try {
			const data = yield call(JwtAuthService.signUp, email, password);
			if (data.message) {
				yield put(showAuthMessage(data.message));
			} else {
				localStorage.setItem(AUTH_TOKEN, data.data.id);
				yield put(signUpSuccess(data.data.id));
			}
		} catch (error) {
			yield put(showAuthMessage(error));
		}
	}
	);
}

export default function* rootSaga() {
  yield all([
		fork(signIn),
		fork(signOut),
		fork(signUp),
  ]);
}
