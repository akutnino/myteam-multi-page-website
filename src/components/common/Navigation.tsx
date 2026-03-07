import { Link } from 'react-router';

import ContactButton from './ContactButton.tsx';
import MobileDrawer from './MobileDrawer.tsx';
import BackgroundImage from './BackgroundImage.tsx';

import logo from '/src/assets/logo/logo.svg';

function Navigation() {
	return (
		<nav className='navigation'>
			<BackgroundImage
				className='navigation__logoImage'
				src={logo}
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

			<ContactButton
				className='navigation__contactButton'
				hoverStyles={{
					backgroundColor: '--color-Neutral-0',
					color: '--color-Teal-950',
				}}
			>
				contact us
			</ContactButton>

			<MobileDrawer />
		</nav>
	);
}

export default Navigation;
