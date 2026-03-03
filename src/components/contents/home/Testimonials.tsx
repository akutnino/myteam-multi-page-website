import BackgroundImage from '../../common/BackgroundImage.tsx';

import icon_quotes from '/src/assets/icon-quotes.svg';
import avatar_kady from '/src/assets/avatar-kady.jpg';
import avatar_aiysha from '/src/assets/avatar-aiysha.jpg';
import avatar_arthur from '/src/assets/avatar-arthur.jpg';
import bg_pattern_home_5 from '/src/assets/bg-pattern-home-5.svg';
import bg_pattern_home_4_about_3 from '/src/assets/bg-pattern-home-4-about-3.svg';

function Testimonials() {
	return (
		<section className='testimonials'>
			<div className='testimonials__wrapper'>
				<h1 className='testimonials__header'>
					Delivering real results for top companies. Some of our
					<span className='testimonials__span'> success stories.</span>
				</h1>

				<ul className='testimonials__list'>
					<li className='testimonials__item'>
						<div className='testimonials__feedbackWrapper'>
							<BackgroundImage
								className='testimonials__quotesImage'
								src={icon_quotes}
							/>
							<p className='testimonials__feedbackStatement'>
								“The team perfectly fit the specialized skill set required. They focused
								on the most essential features helping us launch the platform eight months
								faster than planned.”
							</p>
						</div>
						<div className='testimonials__userWrapper'>
							<div className='testimonials__detailsWrapper'>
								<h3 className='testimonials__username'>Kady Baker</h3>
								<h3 className='testimonials__userposition'>
									Product Manager at Bookmark
								</h3>
							</div>
							<BackgroundImage
								className='testimonials__avatarImage'
								src={avatar_kady}
							/>
						</div>
					</li>

					<li className='testimonials__item'>
						<div className='testimonials__feedbackWrapper'>
							<BackgroundImage
								className='testimonials__quotesImage'
								src={icon_quotes}
							/>
							<p className='testimonials__feedbackStatement'>
								“We needed to automate our entire onboarding process. The team came in and
								built out the whole journey. Since going live, user retention has gone
								through the roof!”
							</p>
						</div>
						<div className='testimonials__userWrapper'>
							<div className='testimonials__detailsWrapper'>
								<h3 className='testimonials__username'>Aiysha Reese</h3>
								<h3 className='testimonials__userposition'>Founder of Manage</h3>
							</div>
							<BackgroundImage
								className='testimonials__avatarImage'
								src={avatar_aiysha}
							/>
						</div>
					</li>

					<li className='testimonials__item'>
						<div className='testimonials__feedbackWrapper'>
							<BackgroundImage
								className='testimonials__quotesImage'
								src={icon_quotes}
							/>
							<p className='testimonials__feedbackStatement'>
								“Amazing. Our team helped us build an app that delivered a new experience
								for hiring a physio. The launch was an instant success with 100k downloads
								in the first month.”
							</p>
						</div>
						<div className='testimonials__userWrapper'>
							<div className='testimonials__detailsWrapper'>
								<h3 className='testimonials__username'>Arthur Clarke</h3>
								<h3 className='testimonials__userposition'>Co-founder of MyPhysio</h3>
							</div>
							<BackgroundImage
								className='testimonials__avatarImage'
								src={avatar_arthur}
							/>
						</div>
					</li>
				</ul>
			</div>

			<BackgroundImage
				className='testimonials__backgroundImage--first'
				src={bg_pattern_home_4_about_3}
			/>

			<BackgroundImage
				className='testimonials__backgroundImage--second'
				src={bg_pattern_home_5}
			/>
		</section>
	);
}

export default Testimonials;
