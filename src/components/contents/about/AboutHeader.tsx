import BackgroundImage from '../../common/BackgroundImage.tsx';

import bg_pattern_about_1_mobile_nav_1 from '/src/assets/background/bg-pattern-about-1-mobile-nav-1.svg';

function AboutHeader() {
	return (
		<header className='aboutHeader'>
			<section className='aboutHeader__section'>
				<h1 className='aboutHeader__header'>About</h1>

				<div className='aboutHeader__descriptionWrapper'>
					<div className='aboutHeader__rectangle' />
					<p className='aboutHeader__description'>
						We help companies build dynamic teams made up of top global talent. Using our
						network of passionate professionals we drive innovation and deliver incredible
						outcomes. Talented, diverse teams shape the best products and experiences.
						We’ll bring those teams to you.
					</p>
				</div>
			</section>

			<BackgroundImage
				className='aboutHeader__backgroundImage'
				src={bg_pattern_about_1_mobile_nav_1}
			/>
		</header>
	);
}

export default AboutHeader;
