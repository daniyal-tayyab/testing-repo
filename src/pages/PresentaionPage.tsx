// base
import React, { useEffect } from "react";

// libs

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

// custom
import base from "../assets/bg-base.png";

function PresentaionPage() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<section className="page-100 h-auto flex items-center justify-center">
			<img
				className="absolute -z-10 top-0 left-0 h-screen w-full opacity-50"
				src={base}
				alt="Innovation Chain"
			/>
			<div className="w-11/12 mx-auto flex items-center justify-center h-full">
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={false}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Mousewheel, Keyboard]}
					className="mySwiper"
				>
					<SwiperSlide className="h-full">
						<div className="w-10/12 mx-auto flex space-y-10 flex-col items-center">
							<h1 className="text-8xl font-bold">Title</h1>
							<div className="text-xl py-5 font-normal flex flex-col space-y-10">
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Provident minima vero quia distinctio repudiandae doloribus
									temporibus reprehenderit ex rem doloremque voluptatem sit
									eaque assumenda rerum architecto error, suscipit aspernatur
									neque consectetur officiis itaque, quibusdam molestias
									explicabo quasi! Nisi deserunt, ad ipsum sequi quod minima
									eius numquam at soluta, vel unde.
								</p>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Provident minima vero quia distinctio repudiandae doloribus
									temporibus reprehenderit ex rem doloremque voluptatem sit
									eaque assumenda rerum architecto error, suscipit aspernatur
									neque consectetur officiis itaque, quibusdam molestias
									explicabo quasi! Nisi deserunt, ad ipsum sequi quod minima
									eius numquam at soluta, vel unde.
								</p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide className="h-full">
						<div className="w-10/12 mx-auto flex space-y-10 flex-col items-center">
							<h1 className="text-8xl font-bold">Title</h1>
							<div className="text-xl py-5 font-normal flex flex-col space-y-10">
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Provident minima vero quia distinctio repudiandae doloribus
									temporibus reprehenderit ex rem doloremque voluptatem sit
									eaque assumenda rerum architecto error, suscipit aspernatur
									neque consectetur officiis itaque, quibusdam molestias
									explicabo quasi! Nisi deserunt, ad ipsum sequi quod minima
									eius numquam at soluta, vel unde.
								</p>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Provident minima vero quia distinctio repudiandae doloribus
									temporibus reprehenderit ex rem doloremque voluptatem sit
									eaque assumenda rerum architecto error, suscipit aspernatur
									neque consectetur officiis itaque, quibusdam molestias
									explicabo quasi! Nisi deserunt, ad ipsum sequi quod minima
									eius numquam at soluta, vel unde.
								</p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide className="h-full">
						<div className="w-10/12 mx-auto flex space-y-10 flex-col items-center">
							<h1 className="text-8xl font-bold">Title</h1>
							<div className="text-xl py-5 font-normal flex flex-col space-y-10">
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Provident minima vero quia distinctio repudiandae doloribus
									temporibus reprehenderit ex rem doloremque voluptatem sit
									eaque assumenda rerum architecto error, suscipit aspernatur
									neque consectetur officiis itaque, quibusdam molestias
									explicabo quasi! Nisi deserunt, ad ipsum sequi quod minima
									eius numquam at soluta, vel unde.
								</p>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Provident minima vero quia distinctio repudiandae doloribus
									temporibus reprehenderit ex rem doloremque voluptatem sit
									eaque assumenda rerum architecto error, suscipit aspernatur
									neque consectetur officiis itaque, quibusdam molestias
									explicabo quasi! Nisi deserunt, ad ipsum sequi quod minima
									eius numquam at soluta, vel unde.
								</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}

export default PresentaionPage;
