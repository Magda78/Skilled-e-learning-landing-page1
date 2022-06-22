import Head from 'next/head';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';
import Banner from '../components/Banner/banner';
import Cards from '../components/Cards/cards';

export default function Home(data) {
	return (
		<div className="max-w-[1440px] m-auto realative font-PlusJakartaSans relative">
			<Head>
				<title>Frontend Mentor | Skilled e-learning landing page</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" sizes="32x32" href="./assets/favicon-32x32.png" />
			</Head>
			<Navbar />
			<img
				src="/assets/image-hero-desktop.png"
				className="absolute lg:top-[-150px] lg:right-[-350px] lg:inline hidden md:hidden"
			/>
			<img
				src="/assets/image-hero-tablet.png"
				className="absolute hidden md:inline lg:hidden md:top-[-100px] md:right-[-300px] "
			/>

			<Banner />
			{console.log('from index', data)}
			<Cards data={data} />
			{console.log('data frontend', data)}
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const host = process.env.HOST;
	console.log('hoooooost', host);
	//const res = await fetch(`${host}/api/data`);
	//let data = [];
	let error = '';
	try {
		const res = await fetch(`${host}/api/data`, {
			method: 'GET',
			headers: {
				// update with your user-agent
				'User-Agent':
					'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
				Accept: 'application/json; charset=UTF-8'
			}
		});

		const data = await res.json();
		console.log(data);
		return data;
	} catch (e) {
		error = e.toString();
	}
	return {
		props: {
			data
		}
	};
}
