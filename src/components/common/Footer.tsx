import { Link } from 'react-router';

import logo from '/src/assets/logo.svg';
import facebook_icon from '/src/assets/icon-facebook.svg';
import pinterest_icon from '/src/assets/icon-pinterest.svg';
import twitter_icon from '/src/assets/icon-twitter.svg';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<nav className='footer__navLinks'>
					<img
						className='footer__logoImage'
						src={logo}
						alt='myteam logo.svg'
						fetchPriority='high'
					/>

					<ul className='footer__navList'>
						<li className='footer__navItem'>
							<Link
								className='footer__navLink'
								to={'/'}
							>
								home
							</Link>
						</li>

						<li className='footer__navItem'>
							<Link
								className='footer__navLink'
								to={'/about'}
							>
								about
							</Link>
						</li>
					</ul>
				</nav>

				<div className='footer__address'>
					<p className='footer__addressContent'>
						987 Hillcrest Lane <br />
						Irvine, CA <br />
						California 92714 <br />
						Call Us : 949-833-7432
					</p>
				</div>

				<ul className='footer__mediaList'>
					<li className='footer__mediaItem'>
						<Link
							className='footer__iconLink'
							target='_blank'
							to={'https://www.facebook.com/'}
						>
							<img
								className='footer__iconImage'
								src={facebook_icon}
								alt='icon-facebook.svg'
								fetchPriority='high'
							/>
						</Link>
					</li>

					<li className='footer__mediaItem'>
						<Link
							className='footer__iconLink'
							target='_blank'
							to={'https://www.pinterest.com/'}
						>
							<img
								className='footer__iconImage'
								src={pinterest_icon}
								alt='myteam logo.svg'
								fetchPriority='high'
							/>
						</Link>
					</li>

					<li className='footer__mediaItem'>
						<Link
							className='footer__iconLink'
							target='_blank'
							to={'https://x.com/'}
						>
							<img
								className='footer__iconImage'
								src={twitter_icon}
								alt='icon-twitter.svg'
								fetchPriority='high'
							/>
						</Link>
					</li>
				</ul>

				<p className='footer__copyrightContent'>Copyright 2020. All Rights Reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
