import { Component } from 'react'
import Button from './Button'
import BubbleAlert from './BubbleAlert'
import CartDetail from './CartDetail'

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
		const { cart, showCart, toggleCart } = this.props
		const quantity = cart.reduce((acc, el) => acc + el.quantity, 0)

		return (
			<div>
				<span style={styles.bubble}>{quantity > 0 ? <BubbleAlert value={quantity} /> : null}</span>
				<Button onClick={toggleCart} style={styles.button}>
					Carrito
				</Button>
				{showCart ? <CartDetail cart={cart} /> : null}
			</div>
		)
	}
}

export default Cart
