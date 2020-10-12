import React from 'react'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'

import DesktopImage from '../assets/desktop.png'
import MobileImage from '../assets/mobile.png'
import {
    Layout,
    Column,
    ColumnContent,
    ColumnFooter,
    ColumnHeader,
    CornerContent,
} from '../components'

export default {
    title: 'Layout',
    component: Layout,
    decorators: [withKnobs],
}

const options = {
    center: 'center',
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    spaceAround: 'space-around',
    spaceBetween: 'space-between',
}

export const ColumnRight = () => {
    return (
        <Layout
            style={{ justifyContent: 'flex-end' }}
            image={{ desktop: DesktopImage, mobile: MobileImage }}
        >
            <Column justifyDesktop={select('desktop', options, 'center')} grow={0.5}>
                <ColumnHeader>
                    <CornerContent>Text A</CornerContent>
                    <CornerContent>Text B</CornerContent>
                </ColumnHeader>
                <ColumnContent expendMobile>
                    <h1>{text('label', 'Main Content')}</h1>
                </ColumnContent>
                <ColumnFooter>
                    <CornerContent>Text C</CornerContent>
                    <CornerContent>Text D</CornerContent>
                </ColumnFooter>
            </Column>
        </Layout>
    )
}

export const TwoColumns = () => {
    return (
        <Layout image={{ desktop: DesktopImage, mobile: MobileImage }}>
            <Column justifyDesktop={select('desktop 1', options, 'flex-start')}>
                <ColumnHeader>
                    <CornerContent>Text A</CornerContent>
                    <CornerContent>Text B</CornerContent>
                </ColumnHeader>
                <ColumnContent expendMobile>
                    <h1>{text('label 1', 'Column 1')}</h1>
                </ColumnContent>
                <ColumnFooter>
                    <CornerContent>Text C</CornerContent>
                    <CornerContent>Text D</CornerContent>
                </ColumnFooter>
            </Column>
            <Column justifyDesktop={select('desktop 2', options, 'center')}>
                <ColumnHeader>
                    <CornerContent>Text A</CornerContent>
                    <CornerContent>Text B</CornerContent>
                </ColumnHeader>
                <ColumnContent expendMobile>
                    <h1>{text('label 2', 'Column 2')}</h1>
                </ColumnContent>
                <ColumnFooter>
                    <CornerContent>Text C</CornerContent>
                    <CornerContent>Text D</CornerContent>
                </ColumnFooter>
            </Column>
        </Layout>
    )
}

export const VariableWidthColumn = () => {
    return (
        <Layout image={{ desktop: DesktopImage, mobile: MobileImage }}>
            <Column grow={2} justifyDesktop={select('desktop 1', options, 'center')}>
                <ColumnHeader>
                    <CornerContent>Text A</CornerContent>
                    <CornerContent>Text A</CornerContent>
                </ColumnHeader>
                <ColumnContent expendMobile>
                    <h1>{text('label 1', 'Column 1')}</h1>
                </ColumnContent>
                <ColumnFooter>
                    <CornerContent>Text C</CornerContent>
                    <CornerContent>Text D</CornerContent>
                </ColumnFooter>
            </Column>
            <Column grow={1} justifyDesktop={select('desktop 2', options, 'center')}>
                <ColumnHeader>
                    <CornerContent>Text A</CornerContent>
                    <CornerContent>Text A</CornerContent>
                </ColumnHeader>
                <ColumnContent expendMobile>
                    <h1>{text('label 2', 'Column 2')}</h1>
                </ColumnContent>
                <ColumnFooter>
                    <CornerContent>Text C</CornerContent>
                    <CornerContent>Text D</CornerContent>
                </ColumnFooter>
            </Column>
        </Layout>
    )
}

export const CenterBottom = () => {
    return (
        <Layout image={{ desktop: DesktopImage, mobile: MobileImage }}>
            <Column
                justifyDesktop={select('desktop', options, 'center')}
                justifyMobile={select('mobile', options, 'flex-end')}
                grow={0.5}
            >
                <ColumnHeader>
                    <CornerContent>Text A</CornerContent>
                    <CornerContent>Text B</CornerContent>
                </ColumnHeader>
                <ColumnContent>
                    <h1>{text('label', 'Main Content')}</h1>
                </ColumnContent>
                <ColumnFooter>
                    <CornerContent>Text C</CornerContent>
                    <CornerContent>Text D</CornerContent>
                </ColumnFooter>
            </Column>
        </Layout>
    )
}
