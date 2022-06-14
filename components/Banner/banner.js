function Banner() {
	return (
		<div className="w-full flex justify-center flex-col items-center md:mt-20">
			<div className="w-5/6 lg:p-10">
				<div className="md:w-96 lg:w-5/12">
					<h1 className="text-text-dark font-bold lg:text-6xl md:text-5xl text-5xl">
						Maximize skill, minimize budget
					</h1>
					<p className="text-text-light text-lg mt-6">
						Our modern courses across a range of in-demand skills will give you the knowledge you need to
						live the life you want.
					</p>

					<button className="mt-6 bg-gradient-to-b from-bg-banner-button-start to-bg-banner-button-end  hover:opacity-50 pt-2 pb-2 pr-6 pl-6 rounded-3xl cursor-pointer">
						<span className="font-bold text-sm text-white">Get Started</span>
					</button>
				</div>
			</div>

			<img src="/assets/image-hero-mobile.png" className="sm:inline md:hidden" />
		</div>
	);
}

export default Banner;
