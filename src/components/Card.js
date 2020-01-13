import React from 'react'
import styled from 'styled-components'

const IndividualCard = styled.div`
	cursor: pointer;
	box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
	border-width: 0.25rem;
	border-radius: 0.5rem;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	backface-visibility: hidden;
	transition: transform 0.25s ease-out;
	transform: translateZ(0);

	&:hover {
		transform: scale(1.05);
	}
`

const Card = ({ name, email, id }) => {
	return (
		<IndividualCard>
			<img
				alt='cats'
				src={`https://robohash.org/${id}?size=200x200&set=set4`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</IndividualCard>
	)
}

export default Card
