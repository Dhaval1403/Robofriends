import React from 'react'
import styled from 'styled-components'

const SearchBoxContainer = styled.div`
	padding: 0.5rem;
`

const Input = styled.input`
	padding: 1rem;
	border: 1px solid #19a974;
	background-color: #cdecff;
`

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<SearchBoxContainer>
			<Input
				type='search'
				placeholder='search robots'
				onChange={searchChange}
			/>
		</SearchBoxContainer>
	)
}

export default SearchBox
