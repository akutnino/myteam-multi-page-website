import DirectorsListItem from './elements/DirectorsListItem.tsx';
import BackgroundImage from '../../common/BackgroundImage.tsx';

import avatar_nikita from '/src/assets/avatar/avatar-nikita.jpg';
import avatar_cristian from '/src/assets/avatar/avatar-christian.jpg';
import avatar_cruz from '/src/assets/avatar/avatar-cruz.jpg';
import avatar_drake from '/src/assets/avatar/avatar-drake.jpg';
import avatar_griffin from '/src/assets/avatar/avatar-griffin.jpg';
import avatar_aden from '/src/assets/avatar/avatar-aden.jpg';
import bg_pattern_home_4_about_3 from '/src/assets/background/bg-pattern-home-4-about-3.svg';
import bg_pattern_about_2_contact_1 from '/src/assets/background/bg-pattern-about-2-contact-1.svg';

function Directors() {
	return (
		<section className='directors'>
			<div className='directors__wrapper'>
				<h1 className='directors__header'>Meet the directors</h1>

				<ul className='directors__list'>
					<DirectorsListItem
						directorImageSrc={avatar_nikita}
						directorName='Nikita Marks'
						directorPosition='Founder & CEO'
					/>
					<DirectorsListItem
						directorImageSrc={avatar_cristian}
						directorName='Cristian Duncan'
						directorPosition='Co-founder & COO'
					/>
					<DirectorsListItem
						directorImageSrc={avatar_cruz}
						directorName='Cruz Hamer'
						directorPosition='Co-founder & CTO'
					/>
					<DirectorsListItem
						directorImageSrc={avatar_drake}
						directorName='Drake Heaton'
						directorPosition='Business Development Lead'
					/>
					<DirectorsListItem
						directorImageSrc={avatar_griffin}
						directorName='Griffin Wise'
						directorPosition='Lead Marketing'
					/>
					<DirectorsListItem
						directorImageSrc={avatar_aden}
						directorName='Aden Allan'
						directorPosition='Lead Marketing'
					/>
				</ul>
			</div>

			<BackgroundImage
				className='directors__backgroundImage--first'
				src={bg_pattern_about_2_contact_1}
			/>

			<BackgroundImage
				className='directors__backgroundImage--second'
				src={bg_pattern_home_4_about_3}
			/>
		</section>
	);
}

export default Directors;
