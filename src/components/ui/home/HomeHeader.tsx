import BackgroundImage from '../../common/BackgroundImage.tsx';
import Navigation from '../../common/Navigation.tsx';

import bg_pattern_home_1 from '/src/assets/bg-pattern-home-1.svg';
import bg_pattern_home_2 from '/src/assets/bg-pattern-home-2.svg';

function HomeHeader() {
	return (
		<header className='homeHeader'>
			<Navigation />

			<section className='homeHeader__section'>
				<h1 className='homeHeader__header'>
					Find the best <span className='homeHeader__span'>talent</span>
				</h1>

				<div className='homeHeader__div'>
					<div className='homeHeader__rectangle' />

					<p className='homeHeader__paragraph'>
						Finding the right people and building high performing teams can be hard. Most
						companies aren’t tapping into the abundance of global talent. We’re about to
						change that.
					</p>
				</div>
			</section>

			<BackgroundImage
				className='homeHeader__background--first'
				src={bg_pattern_home_1}
			/>

			<BackgroundImage
				className='homeHeader__background--second'
				src={bg_pattern_home_2}
			/>
		</header>
	);
}

export default HomeHeader;
