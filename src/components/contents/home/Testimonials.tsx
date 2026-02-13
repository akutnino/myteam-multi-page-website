import icon_quotes from '/src/assets/icon-quotes.svg';
import avatar_kady from '/src/assets/avatar-kady.jpg';
import avatar_aiysha from '/src/assets/avatar-aiysha.jpg';
import avatar_arthur from '/src/assets/avatar-arthur.jpg';
import bg_pattern_home_5 from '/src/assets/bg-pattern-home-5.svg';
import bg_pattern_home_4_about_3 from '/src/assets/bg-pattern-home-4-about-3.svg';

function Testimonials() {
	return (
		<section className='testimonials'>
			<div className='testimonials__div--outer'>
				<h1 className='testimonials__h1'>
					Delivering real results for top companies. Some of our
					<span className='testimonials__span'> success stories.</span>
				</h1>

				<ul className='testimonials__list'>
					<li className='testimonials__item'>
						<div className='testimonials__div--feedback'>
							<img
								className='testimonials__img--quotes'
								src={icon_quotes}
								alt='icon-quotes.svg'
								fetchPriority='high'
							/>
							<p className='testimonials__paragraph'>
								“The team perfectly fit the specialized skill set required. They focused
								on the most essential features helping us launch the platform eight months
								faster than planned.”
							</p>
						</div>
						<div className='testimonials__div--user'>
							<div className='testimonials__div--details'>
								<h3 className='testimonials__h3--username'>Kady Baker</h3>
								<h3 className='testimonials__h3--userposition'>
									Product Manager at Bookmark
								</h3>
							</div>
							<img
								className='testimonials__img--avatar'
								src={avatar_kady}
								alt='avatar-kady.jpg'
								fetchPriority='high'
							/>
						</div>
					</li>

					<li className='testimonials__item'>
						<div className='testimonials__div--feedback'>
							<img
								className='testimonials__img--quotes'
								src={icon_quotes}
								alt='icon-quotes.svg'
								fetchPriority='high'
							/>
							<p className='testimonials__paragraph'>
								“We needed to automate our entire onboarding process. The team came in and
								built out the whole journey. Since going live, user retention has gone
								through the roof!”
							</p>
						</div>
						<div className='testimonials__div--user'>
							<div className='testimonials__div--details'>
								<h3 className='testimonials__h3--username'>Aiysha Reese</h3>
								<h3 className='testimonials__h3--userposition'>Founder of Manage</h3>
							</div>
							<img
								className='testimonials__img--avatar'
								src={avatar_aiysha}
								alt='avatar-aiysha.jpg'
								fetchPriority='high'
							/>
						</div>
					</li>

					<li className='testimonials__item'>
						<div className='testimonials__div--feedback'>
							<img
								className='testimonials__img--quotes'
								src={icon_quotes}
								alt='icon-quotes.svg'
								fetchPriority='high'
							/>
							<p className='testimonials__paragraph'>
								“Amazing. Our team helped us build an app that delivered a new experience
								for hiring a physio. The launch was an instant success with 100k downloads
								in the first month.”
							</p>
						</div>
						<div className='testimonials__div--user'>
							<div className='testimonials__div--details'>
								<h3 className='testimonials__h3--username'>Arthur Clarke</h3>
								<h3 className='testimonials__h3--userposition'>Co-founder of MyPhysio</h3>
							</div>
							<img
								className='testimonials__img--avatar'
								src={avatar_arthur}
								alt='avatar-arthur.jpg'
								fetchPriority='high'
							/>
						</div>
					</li>
				</ul>
			</div>

			<img
				className='testimonials__background--first'
				src={bg_pattern_home_4_about_3}
				alt='bg-pattern-home-4-about-3.svg'
				fetchPriority='high'
			/>

			<img
				className='testimonials__background--second'
				src={bg_pattern_home_5}
				alt='bg-pattern-home-5.svg'
				fetchPriority='high'
			/>
		</section>
	);
}

export default Testimonials;
