import React from 'react'
import styled from 'styled-components'

export default function ColumnContent({ children, expendMobile, ...props }) {
    return (
        <Container expendMobile={expendMobile} {...props}>
            {children}
        </Container>
    )
}

const Container = styled.div`
    min-width: 80%;
    height: 300px;
    border: 2px solid purple;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: ${768}px) {
        & {
            ${props => props.expendMobile && 'flex: 1; min-width: 100% !important;'}
        }
    }
`
