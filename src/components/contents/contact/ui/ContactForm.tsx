import { useState, type ChangeEvent, type SubmitEvent } from 'react';

import FormInput from './FormInput.tsx';

function ContactForm() {
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
		<form
			className='contactForm'
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
				className='contactForm__button'
				type='submit'
			>
				submit
			</button>
		</form>
	);
}

export default ContactForm;
