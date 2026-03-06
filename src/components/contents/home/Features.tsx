import BackgroundImage from '../../common/BackgroundImage.tsx';

import icon_person from '/src/assets/icon/icon-person.svg';
import icon_cog from '/src/assets/icon/icon-cog.svg';
import icon_chart from '/src/assets/icon/icon-chart.svg';
import bg_pattern_home_3 from '/src/assets/background/bg-pattern-home-3.svg';

function Features() {
	return (
		<section className='features'>
			<div className='features__wrapper'>
				<div className='features__rectangle' />

				<div className='features__listWrapper'>
					<h1 className='features__header'>
						Build & manage distributed teams like no one else.
					</h1>

					<ul className='features__list'>
						<li className='features__item'>
							<BackgroundImage
								className='features__iconImage'
								src={icon_person}
							/>

							<div className='features__descriptionWrapper'>
								<h2 className='features__featureHeader'>Experienced Individuals</h2>
								<p className='features__description'>
									Our network is made up of highly experienced professionals who are
									passionate about what they do.
								</p>
							</div>
						</li>

						<li className='features__item'>
							<BackgroundImage
								className='features__iconImage'
								src={icon_cog}
							/>

							<div className='features__descriptionWrapper'>
								<h2 className='features__featureHeader'>Easy to Implement</h2>
								<p className='features__description'>
									Our processes have been refined over years of implementation meaning our
									teams always deliver.
								</p>
							</div>
						</li>

						<li className='features__item'>
							<BackgroundImage
								className='features__iconImage'
								src={icon_chart}
							/>

							<div className='features__descriptionWrapper'>
								<h2 className='features__featureHeader'>Enhanced Productivity</h2>
								<p className='features__description'>
									Our customized platform with in-built analytics helps you manage your
									distributed teams.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<BackgroundImage
				className='features__backgroundImage'
				src={bg_pattern_home_3}
			/>
		</section>
	);
}

export default Features;
