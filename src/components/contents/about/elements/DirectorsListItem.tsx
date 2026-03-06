import { useState } from 'react';

import BackgroundImage from '../../../common/BackgroundImage.tsx';

import twitter_icon from '/src/assets/icon/icon-twitter.svg';
import linkedin_icon from '/src/assets/icon/icon-linkedin.svg';
import toggle_icon from '/src/assets/icon/icon-cross.svg';

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
	const isButtonToggled: string = isToggled ? 'directorsListItem__activeButton' : '';

	const handleToggle = () => {
		setIsToggled((currentState) => !currentState);
	};

	return (
		<li className='directorsListItem'>
			<div className={`directorsListItem__wrapper`}>
				{!isToggled && (
					<>
						<BackgroundImage
							className='directorsListItem__directorImage'
							src={directorImageSrc}
						/>

						<h3 className='directorsListItem__directorName'>{directorName}</h3>
						<p className='directorsListItem__directorPosition'>{directorPosition}</p>
					</>
				)}

				{isToggled && (
					<>
						<h3 className='directorsListItem__directorName'>{directorName}</h3>
						<p className='directorsListItem__directorStatement'>
							“Empowered teams create truly amazing products. Set the north star and let
							them follow it.”
						</p>

						<ul className='directorsListItem__list'>
							<li className='directorsListItem__item'>
								<BackgroundImage
									className='directorsListItem__iconImage'
									src={twitter_icon}
								/>
							</li>

							<li className='directorsListItem__item'>
								<BackgroundImage
									className='directorsListItem__iconImage'
									src={linkedin_icon}
								/>
							</li>
						</ul>
					</>
				)}
			</div>

			<button
				className={`directorsListItem__toggleButton ${isButtonToggled} `}
				type='button'
				title='button'
				onClick={handleToggle}
			>
				<img
					className='directorsListItem__buttonImage'
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
