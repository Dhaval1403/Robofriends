import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const CardListContainer = styled.div`
	display: grid;
	justify-content: center;
	margin: 1.5rem 2rem;
	grid-gap: 25px;

	@media screen and (min-width: 375px) {
		grid-template-columns: 1fr;
	}

	@media screen and (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 850px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 1148px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

const CardList = ({ robots }) => {
	return (
		<CardListContainer>
			{robots.map((robot, i) => {
				return (
					<Card key={i} id={robot.id} name={robot.name} email={robot.email} />
				)
			})}
		</CardListContainer>
	)
}

export default CardList
