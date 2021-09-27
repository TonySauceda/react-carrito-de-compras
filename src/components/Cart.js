import { Component } from 'react'
import Button from './Button'
import BubbleAlert from './BubbleAlert'

const styles = {
	button: {
		backgroundColor: '#359A2C',
		color: '#fff',
		padding: '15px 10px',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
	},
	bubble: {
		position: 'relative',
		left: 12,
		top: 20,
	},
}

class Cart extends Component {
	render() {
		return (
			<div>
				<span style={styles.bubble}>
					<BubbleAlert value="" />
				</span>
				<Button style={styles.button}>Carrito</Button>
			</div>
		)
	}
}

export default Cart
