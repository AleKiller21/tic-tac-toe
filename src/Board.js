import React from 'react';
import Square from './Square';

class Board extends React.Component {
	renderSquare(i, winner = false) {
		return (
			<Square
				key={i}
				value={ this.props.squares[i] }
				onClick={() => this.props.onClick(i)}
				winner={winner} />
		);
	}

	render() {
		let index = 0;
		let winnerIndex = 0;
		let description = [];

		for(let i = 0; i < 3; i++) {
			let rows = [];
			for(let j = 0; j < 3; j++) {
				if(this.props.winner) {
					if(this.props.winner.squares[winnerIndex] === index) {
						rows.push(this.renderSquare(index++, true));
						winnerIndex++;
					}
					else rows.push(this.renderSquare(index++));
				}
				else rows.push(this.renderSquare(index++));
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