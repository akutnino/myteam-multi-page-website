import BackgroundImage from '../../common/BackgroundImage.tsx';
import Navigation from '../../common/Navigation.tsx';

import bg_pattern_about_1_mobile_nav_1 from '/src/assets/bg-pattern-about-1-mobile-nav-1.svg';

function AboutHeader() {
	return (
		<header className='aboutHeader'>
			<Navigation />

			<section className='aboutHeader__section'>
				<h1 className='aboutHeader__header'>About</h1>

				<div className='aboutHeader__div'>
					<div className='aboutHeader__rectangle' />
					<p className='aboutHeader__paragraph'>
						We help companies build dynamic teams made up of top global talent. Using our
						network of passionate professionals we drive innovation and deliver incredible
						outcomes. Talented, diverse teams shape the best products and experiences.
						We’ll bring those teams to you.
					</p>
				</div>
			</section>

			<BackgroundImage
				className='aboutHeader__background--first'
				src={bg_pattern_about_1_mobile_nav_1}
			/>
		</header>
	);
}

export default AboutHeader;
