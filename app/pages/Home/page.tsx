
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import Banner from '@/app/components/organisms/banner/page'
import TitleMain from '@/app/components/atoms/titleMain/page'
import PageLayout from '@/app/components/layouts/pageLayout/page'
import BtnMain from '@/app/components/atoms/BtnMain/page'
const topContents = [
    { image: 'https://www.shutterstock.com/image-photo/dubai-cityscape-modern-metro-railway-600nw-2414539851.jpg', title: 'Dubai Cityscape' },
    { image: 'https://www.shutterstock.com/image-photo/dubai-cityscape-modern-metro-railway-600nw-2414539851.jpg', title: 'Dubai Cityscape' },
    { image: 'https://www.shutterstock.com/image-photo/dubai-cityscape-modern-metro-railway-600nw-2414539851.jpg', title: 'Dubai Cityscape' },
]
const brands = [

]
function Home() {
    return (

        <PageLayout>
            <Banner />
            <div className='my-16'>

                <TitleMain>
                    Chose Your Jurisdiction
                </TitleMain>
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">

                        {
                            topContents.map(data => (
                                <div className="w-full sm:w-1/2 md:w-1/3 px-4">

                                    <div className="relative overflow-hidden transit">
                                        <img src={data.image} alt={data.title} className=" h-auto transition-transform duration-500 transform hover:scale-110" />
                                        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold transition-all duration-500 opacity-100 ">
                                            {data.title}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='my-16'>
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className='w-full sm:w-1 md:w-1/3 px-4'>
                            <img src="https://png.pngtree.com/png-clipart/20231006/ourmid/pngtree-handsome-businessman-transparent-background-png-image_10194933.png" alt="" />
                        </div>

                        <div className='w-full sm:w-1 md:w-2/3 px-4'>
                            <TitleMain >
                                <div className='text-start'> Setting up a business in dubai</div>

                            </TitleMain>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit rem, excepturi maiores quas eligendi omnis alias, doloribus numquam repudiandae recusandae, tempore vero ducimus dolore consequatur sequi minus reprehenderit adipisci.</p>
                                <ul className=''>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                </ul>
                            </div>
                        </div>

                    </div></div>
            </div>
            <div className='my-16 '>
                <div className="container mx-auto bg-gray-300 p-6 border-r-4 ">
                    <div className="flex flex-wrap mx-4">

                        <div className='w-full sm:w-1 md:w-1/2 px-4'>
                            <TitleMain >
                                <div className='text-start'> We Work Closely With Government Agencies</div>

                            </TitleMain>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit rem, excepturi maiores quas eligendi omnis alias, doloribus numquam repudiandae recusandae, tempore vero ducimus dolore consequatur sequi minus reprehenderit adipisci.</p>
                                <ul className=''>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                </ul>
                            </div>

                        </div>
                        <div className='w-full sm:w-1 md:w-1/2 px-4'>
                            <div className="flex flex-wrap mx-4">
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-1-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-2-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-3-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-4-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-5-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-6-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-7-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-7-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-8-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-9-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-6-170x100.webp" alt="" /></div>
                            </div>
                        </div></div></div>
            </div>
            <div className='my-16 '>
                <div className="container mx-auto  p-6  text-center">
                   


                        <TitleMain>
                            Calculate Your <br /> Business Setup Cost
                        </TitleMain>
                        <h3 className='text-center text-xl'>Which business activity are you looking for ?</h3>
                        <select className='text-center drop-shadow w-4 h-1 border' name="Select" id="">
                            <option value="" selected>1</option>
                            <option value="" >1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                        </select>
                        <BtnMain>
                            Next
                        </BtnMain>

                    </div>
            </div>
        </PageLayout>


    )
}

export default Home