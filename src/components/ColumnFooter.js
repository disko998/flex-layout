import React from 'react'
import styled from 'styled-components'

export default function ColumnFooter({ children }) {
    return <Container>{children}</Container>
}

const Container = styled.div`
    padding: 2em;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
