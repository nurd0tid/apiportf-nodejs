import fetch from 'auth/FetchInterceptor'

const JwtAuthService = {}

JwtAuthService.login = function (data) {
	return fetch({
		url: '/auth/login',
		method: 'post',
		headers: {
      'public-request': 'true'
    },
		data: data
	})
}

JwtAuthService.signUp = function (data) {
	return fetch({
		url: '/auth/register',
		method: 'post',
		data: data
	})
}

export default JwtAuthService