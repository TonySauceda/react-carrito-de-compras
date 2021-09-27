import { Component } from 'react'
import Producto from './Producto'

class Productos extends Component {
	render() {
		const { products, addToCart } = this.props

		return (
			<div>
				{products.map((product) => (
					<Producto addToCart={addToCart} key={product.name} product={product} />
				))}
			</div>
		)
	}
}

export default Productos
