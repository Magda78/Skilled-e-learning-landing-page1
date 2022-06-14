module.exports = {
	content: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			colors: {
				'bg-footer': '#13183f',
				'bg-footer-button-start': '#4851FF',
				'bg-footer-button-end': '#F02AA6',
				'bg-navbar-button': '#13183f',
				'text-dark': '#13183f',
				'text-light': '#83869a',
				'bg-banner-button-start': '#FF6F48',
				'bg-banner-button-end': '#F02AA6',
				'bg-main-start': '#FFFFFF',
				'bg-main-end': '#F0F1FF',
				'link-font-color': '#F74780',
				'border-color': '#979797'
			},
			fontFamily: {
				PlusJakartaSans: [ 'Plus+Jakarta+Sans' ]
			}
		}
	},
	plugins: []
};
