import React from 'react';
import Square from './Square';

class Board extends React.Component {
	renderSquare(i) {
		return (
			<Square
				key={i}
				value={ this.props.squares[i] }
				onClick={() => this.props.onClick(i)} />
		);
	}

	render() {
		let index = 0;
		let description = [];

		for(let i = 0; i < 3; i++) {
			let rows = [];
			for(let j = 0; j < 3; j++) {
				rows.push(this.renderSquare(index++));
			}

			description.push((
				<div className="board-row" key={i}>
					{ rows.map((square) => square) }
				</div>
			));
		}
		
		return description;
	}
}

export default Board;