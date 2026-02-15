import { Link } from 'react-router';

function ContactButton() {
	return (
		<Link
			className={`contactButton`}
			to={'/contact'}
		>
			contact us
		</Link>
	);
}

export default ContactButton;
