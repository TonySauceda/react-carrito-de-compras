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
	}
	render() {
		return (
			<div>
				<NavBar />
				<Layout>
					<Title />
					<Productos addToCart={() => console.log('Agregar producto al carrito')} products={this.state.products} />
				</Layout>
			</div>
		)
	}
}

export default App
