import React from 'react'
import styled from 'styled-components'

const SearchBoxContainer = styled.div`
	padding: 0.5rem;
`

const Input = styled.input`
	padding: 1rem;
	border: 1px solid #fff;
	border-radius: 8px;
	background-image: linear-gradient(
		to right,
		rgb(255, 140, 198),
		rgb(255, 100, 100)
	);
	color: #fff;
`

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<SearchBoxContainer>
			<Input
				type='search'
				placeholder='Search Cute Monsters'
				onChange={searchChange}
			/>
		</SearchBoxContainer>
	)
}

export default SearchBox
