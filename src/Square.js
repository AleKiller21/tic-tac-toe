import React from 'react';

function Square(props) {
	const style = props.winner ? "square-winner" : "square";
	return (
		<button className={style} onClick={props.onClick}>
			{props.value}
		</button>
	)
}

export default Square;