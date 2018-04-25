export default function({ dispatch }) {
	return next => action => {
		// if the action doesn't have a payload,
		// or if the payload doesn't have a property .then,
		// we don't care a bout it, send it on
		if (!action.payload || !action.payload.then) {
			return next(action);
		}

		// Make sure the action's promise resolves

		action.payload
			.then(function (response) {
				// Create a new action with the old type, but
				// replace the promise with the response data
				const newAction = { ...action, payload: response };
				dispatch(newAction);
			})
	};
}