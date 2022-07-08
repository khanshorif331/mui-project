import logo from './logo.svg'
import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { Container } from '@mui/material'
import Banner from './components/Banner'
import Cards from './components/Cards'

function App() {
	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Banner></Banner>
			<Cards></Cards>
		</div>
	)
}

export default App
