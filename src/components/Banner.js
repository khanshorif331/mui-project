import { Container, Typography } from '@mui/material'
import React from 'react'
import bgImage from '../assets/images/Transfile.jpg'
// import Paper from 'material-ui/Paper'
import Paper from '@mui/material/Paper'

// import IconButton from 'material-ui/IconButton'
// import ActionHome from 'material-ui/svg-icons/action/home'

const Banner = () => {
	const styles = {
		paperContainer: {
			backgroundImage: `url(${bgImage})`,
			backgoundRepeat: 'no-repeat',
			// imageSize: 'cover',
		},
	}
	return (
		<Container
			maxWidth='xl'
			className='hello'
			sx={{ backgroundColor: 'blueviolet', padding: '2px', height: '89vh' }}
			style={styles.paperContainer}
		>
			<Typography
				variant='h2'
				display='flex'
				justifyContent='center'
				alignItems='center'
				height='100%'
			>
				Hello! Eid Mubarak !
			</Typography>
		</Container>
	)
}

export default Banner
