import { useEffect, useState } from 'react';
import { Item } from '../Item/Item';

export const Card = () => {
	const [data, getData] = useState([]);

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/?page=1')
			.then((res) => res.json())
			.then((data) => getData(data.results));
	}, []);

	console.log(data);
	return (
		data.lenght !== 0 && (
			<ul className="d-flex justify-content-center flex-wrap">
				{data.map((item) => (
					<Item
						image={item?.image}
						title={item?.name}
						species={item?.species}
						titleBottom={item?.status}
						known={item.location?.name}
						seen={item.origin?.name}
					/>
				))}
			</ul>
		)
	);
};
