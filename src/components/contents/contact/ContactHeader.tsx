import { useState, type ChangeEvent, type SubmitEvent } from 'react';

import BackgroundImage from '../../common/BackgroundImage.tsx';
import Navigation from '../../common/Navigation.tsx';
import FormInput from './ui/FormInput.tsx';

import icon_person from '/src/assets/icon-person.svg';
import icon_cog from '/src/assets/icon-cog.svg';
import icon_chart from '/src/assets/icon-chart.svg';

function ContactHeader() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [company, setCompany] = useState<string>('');
	const [title, setTitle] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleCompanyInput = (event: ChangeEvent<HTMLInputElement>) => {
		setCompany(event.target.value);
	};

	const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const handleMessageInput = (event: ChangeEvent<HTMLInputElement>) => {
		setMessage(event.target.value);
	};

	const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log({
			clientName: name,
			clientEmail: email,
			companyName: company,
			subjectTitle: title,
			messageBody: message,
		});

		setName('');
		setEmail('');
		setCompany('');
		setTitle('');
		setMessage('');
	};

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
							<p>The quality of our talent network</p>
						</li>

						<li className='contactHeader__li'>
							<BackgroundImage
								className='contactHeader__img'
								src={icon_cog}
							/>
							<p>Usage & implementation of our software</p>
						</li>

						<li className='contactHeader__li'>
							<BackgroundImage
								className='contactHeader__img'
								src={icon_chart}
							/>
							<p>How we help drive innovation</p>
						</li>
					</ul>
				</section>

				<section className='contactHeader__section--form'>
					<form
						className='contactHeader__form'
						onSubmit={handleSubmit}
					>
						<FormInput
							id='name'
							placeholder='Name'
							onChange={handleNameInput}
							value={name}
						/>
						<FormInput
							type='email'
							id='email'
							placeholder='Email Address'
							onChange={handleEmailInput}
							value={email}
						/>
						<FormInput
							id='company'
							placeholder='Company Name'
							onChange={handleCompanyInput}
							value={company}
						/>
						<FormInput
							id='title'
							placeholder='Title'
							onChange={handleTitleInput}
							value={title}
						/>
						<FormInput
							id='message'
							placeholder='Message'
							onChange={handleMessageInput}
							value={message}
						/>
						<button
							className='contactHeader__button--submit'
							type='submit'
						>
							submit
						</button>
					</form>
				</section>
			</div>
		</header>
	);
}

export default ContactHeader;
