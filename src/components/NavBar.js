import { Component } from 'react'
import Logo from './Logo'
import Cart from './Cart'

const styles = {
	navBar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: '100px',
		justifyContent: 'space-between',
		position: 'relative',
		padding: '0 50px',
		boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
	},
}

class NavBar extends Component {
	render() {
		return (
			<nav style={styles.navBar}>
				<Logo />
				<Cart />
			</nav>
		)
	}
}

export default NavBar
