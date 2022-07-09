import logo from './logo.svg'
import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { Container } from '@mui/material'
import Banner from './components/Banner'
import Cards from './components/Cards'
import TrickyPart from './components/TrickyPart'
import TitlebarImageList from './components/TitlebarImageList'
import CollapsibleTable from './components/CollapsibleTable'
import Footer from './components/Footer'
// import DatingTime from './components/DatingTime'
// import TimeLIne from './components/CustomizedTimeline.js'
// import CustomizedTimeline from './components/CustomizedTimeline'

function App() {
	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Banner></Banner>
			<Cards></Cards>
			<TrickyPart></TrickyPart>
			<TitlebarImageList></TitlebarImageList>
			<CollapsibleTable></CollapsibleTable>
			<Footer></Footer>
		</div>
	)
}

export default App
