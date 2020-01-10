import React from 'react'
import styled from 'styled-components'

const IndividualCard = styled.div`
	text-align: center;
	box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
	border-width: 0.25rem;
	border-radius: 0.5rem;
	background-image: linear-gradient(
		to right,
		rgb(255, 200, 220),
		rgb(255, 75, 150)
	);
	display: inline-block;
	padding: 1rem;
	margin: 0.5rem;
	backface-visibility: hidden;
	transition: transform 0.25s ease-out;
	transform: translateZ(0);
`

const Card = ({ name, email, id }) => {
	return (
		<IndividualCard>
			<img
				alt='robots'
				src={`https://robohash.org/${id}?size=200x200&set=set3`}
			/>
			<div>
				<h2 style={{ color: '#fff' }}>{name}</h2>
				<p style={{ color: '#fff' }}>{email}</p>
			</div>
		</IndividualCard>
	)
}

export default Card
