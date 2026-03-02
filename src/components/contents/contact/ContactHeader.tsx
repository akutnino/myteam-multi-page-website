import BackgroundImage from '../../common/BackgroundImage.tsx';
import Navigation from '../../common/Navigation.tsx';
import ContactForm from './elements/ContactForm.tsx';

import icon_person from '/src/assets/icon-person.svg';
import icon_cog from '/src/assets/icon-cog.svg';
import icon_chart from '/src/assets/icon-chart.svg';
import bg_pattern_about_2_contact_1 from '/src/assets/bg-pattern-about-2-contact-1.svg';
import bg_pattern_contact_2 from '/src/assets/bg-pattern-contact-2.svg';

function ContactHeader() {
	return (
		<header className='contactHeader'>
			<Navigation />

			<div className='contactHeader__div'>
				<section className='contactHeader__section'>
					<div className='contactHeader__div--box'>
						<h1 className='contactHeader__h1'>Contact</h1>
						<h3 className='contactHeader__h3'>Ask us about</h3>
					</div>

					<ul className='contactHeader__ul'>
						<li className='contactHeader__li'>
							<BackgroundImage
								className='contactHeader__img'
								src={icon_person}
							/>
							<p className='contactHeader__p'>The quality of our talent network</p>
						</li>

						<li className='contactHeader__li'>
							<BackgroundImage
								className='contactHeader__img'
								src={icon_cog}
							/>
							<p className='contactHeader__p'>Usage & implementation of our software</p>
						</li>

						<li className='contactHeader__li'>
							<BackgroundImage
								className='contactHeader__img'
								src={icon_chart}
							/>
							<p className='contactHeader__p'>How we help drive innovation</p>
						</li>
					</ul>
				</section>

				<section className='contactHeader__section'>
					<ContactForm />
				</section>
			</div>

			<BackgroundImage
				className='contactHeader__img-first'
				src={bg_pattern_about_2_contact_1}
			/>

			<BackgroundImage
				className='contactHeader__img-second'
				src={bg_pattern_contact_2}
			/>
		</header>
	);
}

export default ContactHeader;
