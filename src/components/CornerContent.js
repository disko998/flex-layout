import React from 'react'
import styled from 'styled-components'

export default function CornerContent({ children }) {
    return <Container>{children}</Container>
}

const Container = styled.div`
    padding: 0.4em 2em;
    border: 1px solid gray;
`
