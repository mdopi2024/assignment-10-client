
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
            <div  className='grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-16 '>
                {
                 visas.slice(-6).map(visa=><LatestVisa key={visa._id} visa={visa}></LatestVisa>)
                }
            </div>
        </div>
       </div>
    );
};

export default Home;