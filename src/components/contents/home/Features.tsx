import icon_person from '/src/assets/icon-person.svg';
import icon_cog from '/src/assets/icon-cog.svg';
import icon_chart from '/src/assets/icon-chart.svg';
import bg_pattern_home_3 from '/src/assets/bg-pattern-home-3.svg';

function Features() {
	return (
		<section className='features'>
			<div className='features__div--outer'>
				<div className='features__rectangle' />

				<div className='features__div--main'>
					<h1 className='features__h1'>
						Build & manage distributed teams like no one else.
					</h1>

					<ul className='features__list'>
						<li className='features__item'>
							<img
								className='features__img'
								src={icon_person}
								alt='icon-person.svg'
								fetchPriority='high'
							/>

							<div className='features__div--item'>
								<h2 className='features__h2'>Experienced Individuals</h2>
								<p className='features__paragraph'>
									Our network is made up of highly experienced professionals who are
									passionate about what they do.
								</p>
							</div>
						</li>

						<li className='features__item'>
							<img
								className='features__img'
								src={icon_cog}
								alt='icon-cog.svg'
								fetchPriority='high'
							/>

							<div className='features__div--item'>
								<h2 className='features__h2'>Easy to Implement</h2>
								<p className='features__paragraph'>
									Our processes have been refined over years of implementation meaning our
									teams always deliver.
								</p>
							</div>
						</li>

						<li className='features__item'>
							<img
								className='features__img'
								src={icon_chart}
								alt='icon-chart.svg'
								fetchPriority='high'
							/>

							<div className='features__div--item'>
								<h2 className='features__h2'>Enhanced Productivity</h2>
								<p className='features__paragraph'>
									Our customized platform with in-built analytics helps you manage your
									distributed teams.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<img
				className='features__background--first'
				src={bg_pattern_home_3}
				alt='bg-pattern-home-3.svg'
				fetchPriority='high'
			/>
		</section>
	);
}

export default Features;
