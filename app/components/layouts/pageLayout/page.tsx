import React from 'react'
import NavBar from '../../organisms/navbar/page'
import Menubar from '../../organisms/menubar/page'
import Footer from '../../organisms/footer/page'
import Image from 'next/image'
import chatIcon from '../../../../public/chat.png'
import Whatsapp from '../../../../public/WhatsApp_icon.png.webp'
import quote from '../../../../public/quote.png'

function PageLayout({ children }: any) {
    return (
        <div className='relative'><NavBar />
            <Menubar />
            {children}
            <Footer />
            <div className='flex flex-col'>
                <div className='fixed z-50 right-5 bottom-16 w-12 h-12 flex flex-col'>
                    <Image className='mb-2' src={chatIcon} alt="" width={0}
                        height={0}
                        sizes="100vw" />
                    <Image src={Whatsapp} alt="" width={0}
                        height={0}
                        sizes="100vw" />
                </div>
                <div className=' fixed z-50 left-5 bottom-5 w-10 h-10 p-2 bg-white rounded-full drop-shadow'>
                    <Image src={quote} alt="" width={0}
                        height={0}
                        sizes="100vw" />
                </div>
            </div>

        </div>
    )
}

export default PageLayout