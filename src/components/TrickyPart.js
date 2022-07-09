import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const TrickyPart = () => {
	return (
		<Container>
			<Stack alignItems='center'>
				<Typography variant='h1' color='black' paddingY={2} marginY={4}>
					Hello Eid Mubarak
				</Typography>
			</Stack>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Box>xs=8</Box>
					</Grid>
					<Grid item xs={4}>
						<Box>xs=4</Box>
					</Grid>
					<Grid item xs={4}>
						<Box>xs=4</Box>
					</Grid>
					<Grid item xs={8}>
						<Box>xs=8</Box>
					</Grid>
				</Grid>
			</Box>
			{/* <Grid container columnSpacing='5px'>
				<Grid
					item
					display='flex'
					justifyContent='center'
					alignItems='center'
					xs={12}
					sm={6}
					md={4}
					height='100px'
					// padding={4}
					sx={{
						backgroundColor: 'primary.main',
						border: '1px solid red',
						'&:hover': {
							background: 'red',
						},
					}}
				>
					<Box
						// height='300px'
						sx={{ border: '1px solid black' }}
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						Hello Eid Mubarak
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					padding={4}
					sx={{
						backgroundColor: 'secondary.main',
						border: '1px solid red',
						'&:hover': {
							background: 'red',
						},
					}}
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<Box>Hell Eid Mubarak</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box>Hell Eid Mubarak</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box>Hell Eid Mubarak</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box>Hell Eid Mubarak</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box>Hell Eid Mubarak</Box>
				</Grid>
			</Grid> */}
		</Container>
	)
}

export default TrickyPart
