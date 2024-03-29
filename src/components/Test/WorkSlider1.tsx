"use client";
// data
const workSlides = {
    slides: [
        {
            images: [
                {
                    title: "The Architect Stage",
                    path: "/projects/archStage.png",
                    site: "https://the-architect-stage-nu.vercel.app"
                },
                {
                    title: "ethan smith",
                    path: "/projects/ethanSmith.png",
                    site: "https://ethansmith.vercel.app"
                },
                {
                    title: "The Explorer's Guild",
                    path: "/projects/explorGuild.png",
                    site: "https://explorers-guild.vercel.app"
                },
                {
                    title: "Panaverse DAO",
                    path: "/projects/panaverse.png",
                    site: "https://panaverse-dao-lime-seven.vercel.app"
                },
            ],
        },
        {
            images: [
                {
                    title: "The Explorer's Guild",
                    path: "/projects/explorGuild.png",
                    site: "https://explorers-guild.vercel.app"
                },
                {
                    title: "Panaverse DAO",
                    path: "/projects/panaverse.png",
                    site: "https://panaverse-dao-lime-seven.vercel.app"
                },
                {
                    title: "The Pink Lotus",
                    path: "/projects/pinkLotus.png",
                    site: "https://ecommerce-peach-nine.vercel.app"
                },
                {
                    title: "Portfolio",
                    path: "/projects/portfolio.png",
                    site: "https://panaverse-dao-tail-g2wbsp2aa-syedmuhammadashhar-gmailcom.vercel.app"
                },
            ],
        },
    ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";
import Link from "next/link";

export default function WorkSlider() {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className=" max-w-[800px] xl:skew-y-3"
        >
            {workSlides.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                            {slide.images.map((image, index) => {
                                return (
                                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                                        <Link href={image.site} className="flex items-center justify-centerrelative overflow-hidden group">
                                            {/* images */}
                                            <Image src={image.path} width={800} height={800} alt="" className="rounded-lg" />
                                            {/* overlay gradiant */}
                                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                            {/* title */}
                                            <div className="absolute text-center w-full bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                                <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                                                    {/* title part 1 */}
                                                    <div className="delay-100">LIVE</div>
                                                    {/* title part 1 */}
                                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                                                    {/* icon */}
                                                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}