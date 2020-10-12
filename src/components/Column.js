import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Column({
    children,
    justifyDesktop,
    justifyMobile,
    grow,
    ...props
}) {
    return (
        <Container
            grow={grow}
            justifyDesktop={justifyDesktop}
            justifyMobile={justifyMobile}
            {...props}
        >
            {children}
        </Container>
    )
}

Column.propTypes = {
    justifyDesktop: PropTypes.oneOf([
        'flex-start, flex-end, center, space-around, space-between',
    ]),
    justifyMobile: PropTypes.oneOf([
        'flex-start, flex-end, center, space-around, space-between',
    ]),
    width: PropTypes.number,
}

const Container = styled.div`
    flex: ${props => (props.grow ? props.grow : 1)};
    border: 2px solid blue;
    padding: 2em;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyDesktop};
    align-items: center;

    @media only screen and (max-width: ${768}px) {
        & {
            flex: 1;
            padding: 0;
            justify-content: ${props => props.justifyMobile};
        }
    }
`
