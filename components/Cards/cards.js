import FirstCard from '../Card/firstCard';
import RestOfTheCards from '../Card/restOfTheCards';

function Cards({data}) {
	return (
	
		<div className="w-full flex justify-center bg-gradient-to-b from-bg-main-start to-bg-main-end pb-12 md:pt-8 md:mt-36">
			<div className="w-5/6 lg:p-10 md:p-2">
				<div className="grid lg:grid-cols-3 gap-7 md:grid-cols-2 md:gap-3 sm: grid-cols-1">
				{console.log('from cards',data)}
					{data.data.map((item) => {
						if (item.id === 1) {
							return <FirstCard key={item.id} />;
						} else {
							return (
								<RestOfTheCards
									key={item.id}
									id={item.id}
									title={item.title}
									content={item.content}
									img={item.img}
								/>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default Cards;
