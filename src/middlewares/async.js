export default function({ dispatch }) {
	return function(next) {
		return function(action) {
			console.log(action);

			next(action);
		};
	};
}