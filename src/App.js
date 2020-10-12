import React from 'react'

import DesktopImage from './assets/desktop.png'
import MobileImage from './assets/mobile.png'
import {
    Layout,
    Column,
    ColumnContent,
    ColumnFooter,
    ColumnHeader,
    CornerContent,
} from './components'

export const MOBILE_BREAK_POINT = 768

function App() {
    return (
        <Layout image={{ desktop: DesktopImage, mobile: MobileImage }}>
            <Column justifyContent='flex-end'>
                <ColumnHeader>
                    <CornerContent>Text A</CornerContent>
                    <CornerContent>Text A</CornerContent>
                </ColumnHeader>
                <ColumnContent>
                    <h1>MAIN CONTENT</h1>
                </ColumnContent>
                <ColumnFooter>
                    <CornerContent>Text C</CornerContent>
                    <CornerContent>Text D</CornerContent>
                </ColumnFooter>
            </Column>
        </Layout>
    )
}

export default App
