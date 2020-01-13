import React from 'react'
import styled from 'styled-components'

const SearchBoxContainer = styled.div`
	padding: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Input = styled.input`
	padding: 1rem;
	border: 1px solid #fff;
	outline: none;
	border-radius: 8px;
	background-color: #fff;
`

const SearchBox = ({ searchChange }) => {
	return (
		<SearchBoxContainer>
			<Input type='search' placeholder='Search Kitty' onChange={searchChange} />
		</SearchBoxContainer>
	)
}

export default SearchBox
