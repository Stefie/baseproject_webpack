import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
	render() {
		let timeStamp = new Date();
		return (
			<div>
				<p>Dummy React component</p>
			</div>
		)
	}
}
ReactDOM.render(<Content/>, document.getElementById('content'));
