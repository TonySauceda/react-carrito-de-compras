import { Component } from 'react'
import Producto from './Producto'

const styles = {
	products: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
}
class Productos extends Component {
	render() {
		const { products, addToCart } = this.props

		return (
			<div style={styles.products}>
				{products.map((product) => (
					<Producto addToCart={addToCart} key={product.name} product={product} />
				))}
			</div>
		)
	}
}

export default Productos
