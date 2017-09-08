export const CHANGE = 'change'
export function createChangeAction(word) {
	return ({
		type: CHANGE,
		word: word
	})
}

export function changeAsyncAction(word){

	return function(dispatch){
		dispatch(createChangeAction('请等待1秒'))
		setTimeout(() => {
			dispatch(createChangeAction(word))
		},1000)
	}

}