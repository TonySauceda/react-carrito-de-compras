import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import NavBar from './components/NavBar'

class App extends Component {
	state = {
		products: [
			{ name: 'Tomate', price: 100, img: '/products/tomate.jpg' },
			{ name: 'Arbejas', price: 200, img: '/products/arbeja.jpg' },
			{ name: 'Lechuga', price: 300, img: '/products/lechuga.jpg' },
		],
		cart: [],
		showCart: false,
	}

	addProductToCart = (product) => {
		const { cart } = this.state

		if (cart.find((x) => x.name === product.name)) {
			const newCart = cart.map((x) => (x.name === product.name ? { ...x, quantity: x.quantity + 1 } : x))

			return this.setState({ cart: newCart })
		}
		return this.setState({
			cart: this.state.cart.concat({ ...product, quantity: 1 }),
		})
	}

	toggleCart = () => {
		if (!this.state.cart.length) {
			return
		}

		this.setState({ showCart: !this.state.showCart })
	}

	render() {
		const { cart, products, showCart } = this.state
		return (
			<div>
				<NavBar cart={cart} showCart={showCart} toggleCart={this.toggleCart} />
				<Layout>
					<Title />
					<Productos addToCart={this.addProductToCart} products={products} />
				</Layout>
			</div>
		)
	}
}

export default App
