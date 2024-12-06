
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../assets/image3.jpg';
import img2 from '../assets/image5.jpg';
import img3 from '../assets/img1.jpg';
import img4 from '../assets/img2.webp';
import { useLoaderData } from 'react-router-dom';
import LatestVisa from '../components/LatestVisa';



const Home = () => {
    const visas = useLoaderData()


    return (
        <div>
            <div className='mx-5 md:mx-10 my-16'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                    className='h-[400px] md:h-[500px] '
                >
                    <SwiperSlide><img className='w-full h-full object-cover' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-full object-cover' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-full object-cover' src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-full object-cover' src={img4} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div>
                <h1 className='my-6 text-center text-3xl md:text-4xl font-bold text-blue-700'>Latest Visa Added</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-16 '>
                    {
                        visas.slice(-6).map(visa => <LatestVisa key={visa._id} visa={visa}></LatestVisa>)
                    }
                </div>
            </div>

            {/* abilable  offers */}
            <div className='my-7'>
                <h1 className='my-6 text-center text-3xl md:text-4xl font-bold text-blue-700'>See Abailable offers</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-5'>
                    <div className="card  shadow-xl bg-[#D1E7FD]">
                        <div className="card-body">
                            <h2 className="card-title">Visa Type : <span className='font-semibold'>Student Visa</span> </h2>
                            <p className='font-semibold text-gray-500'>Offer: <span className=' text-green-600'>50%</span></p>
                            <p className='font-semibold text-gray-500'>Eligibility: For the first time apply </p>
                            <p className='font-semibold text-gray-500'>Validity: Valid until: Dec 31, 2024 </p>
                            <p className='text-gray-500'>If your are interested form higher study in your dream city.As soon as posible apply for visa with 50% discout.Dont miss this offer</p>

                        </div>
                    </div>
                    <div className="card  shadow-xl bg-[#D1E7FD]">
                        <div className="card-body">
                            <h2 className="card-title">Visa Type : <span className='font-semibold'>Tourist Visa</span> </h2>
                            <p className='font-semibold text-gray-500'>Offer: <span className=' text-green-600'>40%</span></p>
                            <p className='font-semibold text-gray-500'>Eligibility: For the first time apply </p>
                            <p className='font-semibold text-gray-500'>Validity: Valid until: Jan 31, 2025 </p>
                            <p className='text-gray-500'>If your are interested for explore the world .As soon as posible apply for visa with 40% discout.Dont miss this offer</p>

                        </div>
                    </div>
                    <div className="card  shadow-xl bg-[#D1E7FD]">
                        <div className="card-body">
                            <h2 className="card-title">Visa Type : <span className='font-semibold'>Official Visa</span> </h2>
                            <p className='font-semibold text-gray-500'>Offer: <span className=' text-green-600'>30%</span></p>
                            <p className='font-semibold text-gray-500'>Eligibility: For the first time apply </p>
                            <p className='font-semibold text-gray-500'>Validity: Valid until: Feb 31, 2025 </p>
                            <p className='text-gray-500'>If your are worried about your career.As soon as posible apply for visa with 30% discout.Dont miss this offer</p>

                        </div>
                    </div>
                </div>
            </div>
            {/* your facilites */}
            <div className='my-16'>
                <h1 className='my-6 text-center text-3xl md:text-4xl font-bold text-blue-700'>Our Abailable Facilites</h1>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mx-5'>

                    <div className="card  shadow-xl bg-[#D1E7FD]">
                        <div className="card-body">
                            <h2 className="card-title">Free Consultation </h2>
                            <p className=' text-gray-500'>Access a detailed checklist of all the documents needed for your visa application to avoid any mistakes</p>
                            <p className='font-semibold text-gray-500'>Eligibility:  Available for all visa types. </p>
                            <p className='font-semibold text-gray-500'>Pricing : Free </p>
                            <p className='font-semibold text-gray-500'>Availability:  Available for 24/7 </p>
                        </div>
                    </div>

                    <div className="card  shadow-xl bg-[#D1E7FD]">
                        <div className="card-body">
                            <h2 className="card-title">Express Visa Processing</h2>
                            <p className=' text-gray-500'>Opt for faster processing and get your visa approved in half the usual time.</p>
                            <p className='font-semibold text-gray-500'>Eligibility:  Available for selected visa types (Tourist, Business). </p>
                            <p className='font-semibold text-gray-500'>Pricing : $20 additional fee </p>
                            <p className='font-semibold text-gray-500'>Availability: Available all year round </p>
                        </div>
                    </div>


                    <div className="card  shadow-xl bg-[#D1E7FD]">
                        <div className="card-body">
                            <h2 className="card-title">Document Checklist</h2>
                            <p className=' text-gray-500'>Access a detailed checklist of all the documents needed for your visa application to avoid any mistakes.</p>
                            <p className='font-semibold text-gray-500'>Eligibility:  Available for selected visa types.  </p>
                            <p className='font-semibold text-gray-500'>Pricing : $20 additional fee </p>
                            <p className='font-semibold text-gray-500'>Availability:Available 24/7 </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;