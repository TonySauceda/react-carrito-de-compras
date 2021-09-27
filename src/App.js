import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

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
				<p>Hola Mundo</p>
			</div>
		)
	}
}

export default App
