function Navbar() {
	return (
		<div className="w-full bg-white flex justify-center h-[120px]">
			<div className="w-5/6 lg:p-10 md:p-2 flex justify-between items-center">
				<img src="/assets/logo-dark.svg" />
				<button className="bg-bg-navbar-button pt-2 pb-2 pr-6 pl-6 rounded-3xl cursor-pointer">
					<span className="font-bold text-sm text-white">Get Started</span>
				</button>
			</div>
		</div>
	);
}

export default Navbar;
