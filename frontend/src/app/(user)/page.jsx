// "use client"
// import Image from "next/image"
import img from "@/public/img/ima.png"
import arayesh from "@/public/img/arayesh.png"
import barghi from "@/public/img/barghi.png"
import laptop from "@/public/img/laptop.png"
// import {  Pagination,  Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const imageme = [
  {
    id: 1,
    pic: img,
    title: "خوراکی",
    td: "10%"
  },
  {
    id: 2,
    pic: arayesh,
    title: "آرایشی",
    td: "15%"
  },
  {
    id: 4,
    pic: barghi,
    title: "لوازم آشپزخانه",
    td: "32%"
  },
  {
    id: 5,
    pic: laptop,
    title: "لپ تاپ",
    td: "8%"
  },

]

function page() {

  return (
    <div className=" md:max-w-screen-lg mx-auto mt-12 md:mt-16">
      <div className='flex flex-col md:flex-row items-center gap-x-8'>
        <div className="text-center mt-8 md:text-right w-1/2 order-2 ">
          <h1 className="font-black text-2xl text-slate-900 md:text-5xl mb-4">هایپر مارکت پارسا</h1>
          <p className="font-light text-secondary-500 text-lg">خریدی راحت و آسان را با ما تجربه کنید</p>
        </div>
        <div className="w-full md:w-1/2  max-w-screen-sm flex duration-1000 md:order-2">

          {/* <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="mySwiper"
          >
            {
              imageme.map((item) => {
                return <SwiperSlide key={item.id} className="bg-red-100  ">
                  <div className={`aspect-video mb-4 relative flex flex-col items-center text-center `}>
                    <Image
                      src={item.pic}
                      fill
                      alt={item.id}
                      className={`object-contain `}
                      quality={100}
                      style={{
                        width: "100%",
                        height: "100%"
                      }}
                    />
                    <span className="font-bold absolute bottom-0 right-0 text-sm bg-primary-800
                     text-secondary-0 p-2 rounded-bl-xl rounded-tl-xl">{item.title}</span>
                    <span className=" absolute bottom-0 left-1 text-[12px] bg-error 
                     text-secondary-0 p-2 rounded-xl">{item.td} تخفیف</span>
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper> */}


        </div>
      </div>
    </div >
  )
}

export default page


