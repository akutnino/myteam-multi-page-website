import { useState } from 'react';

import twitter_icon from '/src/assets/icon-twitter.svg';
import linkedin_icon from '/src/assets/icon-linkedin.svg';
import toggle_icon from '/src/assets/icon-cross.svg';

function DirectorsListItem({
	directorImageSrc,
	directorName,
	directorPosition,
}: {
	directorImageSrc: string;
	directorName: string;
	directorPosition: string;
}) {
	const [isToggled, setIsToggled] = useState<boolean>(false);

	const handleToggle = () => {
		setIsToggled((currentState) => !currentState);
	};

	return (
		<li className='directorsListItem__li'>
			{!isToggled && (
				<>
					<img
						className='directorsListItem__img--directorImage'
						src={directorImageSrc}
						alt='director_image'
						role='presentation'
						fetchPriority='high'
					/>

					<h3 className='directorsListItem__h3--directorName'>{directorName}</h3>
					<p className='directorsListItem__p--directorPosition'>{directorPosition}</p>
				</>
			)}

			{isToggled && (
				<>
					<h3 className='directorsListItem__h3--directorName'>{directorName}</h3>
					<p className='directorsListItem__p--statement'>
						“Empowered teams create truly amazing products. Set the north star and let
						them follow it.”
					</p>

					<ul className='directorsListItem__ul--iconList'>
						<li className='directorsListItem__li--icon'>
							<img
								className='directorsListItem__img--icon'
								src={twitter_icon}
								alt='twitter_icon'
								role='presentation'
								fetchPriority='high'
							/>
						</li>

						<li className='directorsListItem__li--icon'>
							<img
								className='directorsListItem__img--icon'
								src={linkedin_icon}
								alt='linkedin_icon'
								role='presentation'
								fetchPriority='high'
							/>
						</li>
					</ul>
				</>
			)}

			<button
				className='directorsListItem__btn--toggle'
				type='button'
				title='button'
				onClick={handleToggle}
			>
				<img
					className='directorsListItem__img--toggle'
					src={toggle_icon}
					alt='toggle_icon'
					role='presentation'
					fetchPriority='high'
				/>
			</button>
		</li>
	);
}

export default DirectorsListItem;
