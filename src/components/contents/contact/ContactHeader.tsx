import BackgroundImage from '../../common/BackgroundImage.tsx';
import ContactForm from './elements/ContactForm.tsx';

import icon_person from '/src/assets/icon/icon-person.svg';
import icon_cog from '/src/assets/icon/icon-cog.svg';
import icon_chart from '/src/assets/icon/icon-chart.svg';
import bg_pattern_about_2_contact_1 from '/src/assets/background/bg-pattern-about-2-contact-1.svg';
import bg_pattern_contact_2 from '/src/assets/background/bg-pattern-contact-2.svg';

function ContactHeader() {
	return (
		<header className='contactHeader'>
			<div className='contactHeader__wrapper'>
				<section className='contactHeader__section'>
					<div className='contactHeader__headerWrapper'>
						<h1 className='contactHeader__header'>Contact</h1>
						<h3 className='contactHeader__headerDescription'>Ask us about</h3>
					</div>

					<ul className='contactHeader__list'>
						<li className='contactHeader__item'>
							<BackgroundImage
								className='contactHeader__iconImage'
								src={icon_person}
							/>
							<p className='contactHeader__itemDescription'>
								The quality of our talent network
							</p>
						</li>

						<li className='contactHeader__item'>
							<BackgroundImage
								className='contactHeader__iconImage'
								src={icon_cog}
							/>
							<p className='contactHeader__itemDescription'>
								Usage & implementation of our software
							</p>
						</li>

						<li className='contactHeader__item'>
							<BackgroundImage
								className='contactHeader__iconImage'
								src={icon_chart}
							/>
							<p className='contactHeader__itemDescription'>
								How we help drive innovation
							</p>
						</li>
					</ul>
				</section>

				<section className='contactHeader__section'>
					<ContactForm />
				</section>
			</div>

			<BackgroundImage
				className='contactHeader__backgroundImage--first'
				src={bg_pattern_about_2_contact_1}
			/>

			<BackgroundImage
				className='contactHeader__backgroundImage--second'
				src={bg_pattern_contact_2}
			/>
		</header>
	);
}

export default ContactHeader;
