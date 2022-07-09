import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
	return (
		<Box height='80px' sx={{ backgroundColor: 'black' }}>
			<Typography
				variant='h6'
				color='red'
				display='flex'
				justifyContent='center'
				alignItems='center'
				component='div'
				size='small'
				height='100%'
			>
				Copyright@2022 All Rights Reserver By Shoriful Islam
			</Typography>
		</Box>
	)
}

export default Footer
