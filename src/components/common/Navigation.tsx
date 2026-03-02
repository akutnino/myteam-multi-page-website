import { Link } from 'react-router';

import ContactButton from './ContactButton.tsx';

import logo from '/src/assets/logo.svg';

function Navigation() {
	return (
		<nav className='navigation'>
			<div className='navigation__wrapper'>
				<img
					className='navigation__logoImage'
					src={logo}
					alt='myteam logo.svg'
					fetchPriority='high'
				/>

				<ul className='navigation__navlist'>
					<li className='navigation__navItem'>
						<Link
							className='navigation__navLink'
							to={'/'}
						>
							home
						</Link>
					</li>

					<li className='navigation__navItem'>
						<Link
							className='navigation__navLink'
							to={'/about'}
						>
							about
						</Link>
					</li>
				</ul>
			</div>

			<ContactButton
				className='navigation__contactButton'
				hoverStyles={{
					backgroundColor: '--color-Neutral-0',
					color: '--color-Teal-950',
				}}
			>
				contact us
			</ContactButton>
		</nav>
	);
}

export default Navigation;
