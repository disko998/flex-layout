import React from 'react'
import styled from 'styled-components'

import { MOBILE_BREAK_POINT } from '../App'

export default function Layout({ children, image, ...props }) {
    return (
        <Container image={image} {...props}>
            {children}
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${({ image }) => image.desktop});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;

    @media only screen and (max-width: ${768}px) {
        flex-direction: column;
        & {
            ${props =>
                props.image.mobile && `background-image: url(${props.image.mobile})`}
        }
    }
`
