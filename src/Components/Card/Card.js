import { Item } from '../Item/Item';

export const Card = ({ image, name, species, titleBottom, known, seen }) => {
	return (
		<Item
			image={image}
			title={name}
			species={species}
			titleBottom={titleBottom}
			known={known}
			seen={seen}
		/>
	);
};
