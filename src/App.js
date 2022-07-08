import logo from './logo.svg'
import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { Container } from '@mui/material'
import Banner from './components/Banner'

function App() {
	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Banner></Banner>
		</div>
	)
}

export default App
