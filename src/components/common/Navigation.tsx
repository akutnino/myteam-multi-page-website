import { Link } from 'react-router';

import ContactButton from './ContactButton.tsx';

import logo from '/src/assets/logo.svg';

function Navigation() {
	return (
		<nav className='navigation'>
			<div className='navigation__div'>
				<img
					className='navigation__logo'
					src={logo}
					alt='myteam logo.svg'
					fetchPriority='high'
				/>

				<ul className='navigation__list'>
					<li className='navigation__item'>
						<Link
							className='navigation__link'
							to={'/'}
						>
							home
						</Link>
					</li>

					<li className='navigation__item'>
						<Link
							className='navigation__link'
							to={'/about'}
						>
							about
						</Link>
					</li>
				</ul>
			</div>

			<ContactButton
				className='navigation__contact'
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
