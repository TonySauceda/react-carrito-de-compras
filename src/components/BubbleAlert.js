import { Component } from 'react'

const styles = {
	bubbleAlert: {
		backgroundColor: '#E9725A',
		borderRadius: '15px',
		padding: '2px 8px',
		color: '#fff',
		fontSize: '0.9rem',
		width: '20px',
	},
}

class BubbleAlert extends Component {
	getNumber(number) {
		if (!number) {
			return ''
		}

		return number > 9 ? '9+' : number
	}

	render() {
		const { value } = this.props
		return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>
	}
}

export default BubbleAlert
