import { Container } from '@mui/material'
import React from 'react'
import Card from './Card'
import { Stack } from '@mui/material'

const Cards = () => {
	return (
		<Container>
			<h1>Hello Joonogon</h1>
			<Stack direction='row' spacing='50px' sx={{ margin: '0 auto' }}>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</Stack>
		</Container>
	)
}

export default Cards
