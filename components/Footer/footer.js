function Footer() {
	return (
		<div className="w-full bg-bg-footer flex justify-center h-[120px]">
			<div className="w-5/6 lg:p-10 flex justify-between items-center">
				<img src="/assets/logo-light.svg" />
				<div className="bg-white rounded-3xl border-border-color">
					<button className="bg-gradient-to-b from-bg-footer-button-start to-bg-footer-button-end hover:opacity-50 pt-2 pb-2 pr-6 pl-6 rounded-3xl cursor-pointer">
						<span className="font-bold text-sm text-white">Get Started</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Footer;
