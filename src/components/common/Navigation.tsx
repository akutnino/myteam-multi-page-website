import { Link } from 'react-router';
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

			<Link
				className='navigation__contact'
				to={'/contact'}
			>
				contact us
			</Link>
		</nav>
	);
}

export default Navigation;
