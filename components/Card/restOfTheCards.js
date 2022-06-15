function RestOfTheCards({ id, title, content, img }) {
	return (
		<div className="p-7 mt-8 bg-white h-[283px] relative rounded-lg">
			<h1 className="font-bold text-3xl text-text-dark mt-5">{title}</h1>
			<p className="text-text-light mt-6 text-base">{content}</p>
			<img src={img} className="absolute -top-6 left-7 w-[56px] h-[56px]" />
			<div className="absolute bottom-12 md:bottom-8">
				<button type="text" className="text-link-font-color font-bold text-lg">
					Get Started
				</button>
			</div>
		</div>
	);
}

export default RestOfTheCards;
