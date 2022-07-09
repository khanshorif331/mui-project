import logo from './logo.svg'
import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { Container } from '@mui/material'
import Banner from './components/Banner'
import Cards from './components/Cards'
import TrickyPart from './components/TrickyPart'
import TitlebarImageList from './components/TitlebarImageList'

function App() {
	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Banner></Banner>
			<Cards></Cards>
			<TrickyPart></TrickyPart>
			<TitlebarImageList></TitlebarImageList>
		</div>
	)
}

export default App
