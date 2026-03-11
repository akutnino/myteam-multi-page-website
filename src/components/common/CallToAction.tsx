import BackgroundImage from './BackgroundImage.tsx';
import ContactButton from './ContactButton.tsx';

import bg_pattern_home_6_about_5 from '/src/assets/background/bg-pattern-home-6-about-5.svg';

function CallToAction() {
	return (
		<section
			className='callToAction'
			role='region'
		>
			<div className='callToAction__wrapper'>
				<h1 className='callToAction__heading'>Ready to get started?</h1>

				<ContactButton
					className='callToAction__contactButton'
					hoverStyles={{
						backgroundColor: '--color-Teal-900',
						color: '--color-Neutral-0',
					}}
				>
					contact us
				</ContactButton>
			</div>

			<BackgroundImage
				className='callToAction__backgroundImage'
				src={bg_pattern_home_6_about_5}
			/>
		</section>
	);
}

export default CallToAction;
