import React from 'react'
import styled from 'styled-components'

const ScrollableContainer = styled.div`
	overflow: scroll;
	border: 5px solid #000;
	height: 800px;
`

const Scroll = props => {
	return <ScrollableContainer>{props.children}</ScrollableContainer>
}

export default Scroll
