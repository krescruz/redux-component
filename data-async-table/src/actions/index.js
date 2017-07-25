export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const API_URL = 'https://api.github.com/users/reactjs/repos'

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivePosts = (json) => ({
  type: RECEIVE_POSTS,
  data: json
})

export const fetchPosts = () => (dispatch, getState) => {
	dispatch(requestPosts())
	return fetch(API_URL)
		.then(response => response.json())
		.then(json => dispatch(receivePosts(json)))
}

