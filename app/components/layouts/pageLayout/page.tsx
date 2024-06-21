import React from 'react'
import NavBar from '../../organisms/navbar/page'
import Menubar from '../../organisms/menubar/page'
import Footer from '../../organisms/footer/page'

function PageLayout({ children }: any) {
    return (
        <div><NavBar />
            <Menubar />
            {children}
            <Footer />
        </div>
    )
}

export default PageLayout