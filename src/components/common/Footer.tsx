import { Link } from 'react-router';

import logo from '/src/assets/logo.svg';
import facebook_icon from '/src/assets/icon-facebook.svg';
import pinterest_icon from '/src/assets/icon-pinterest.svg';
import twitter_icon from '/src/assets/icon-twitter.svg';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__div'>
				<div className='footer__div--info'>
					<nav className='footer__nav--links'>
						<img
							className='footer__logo'
							src={logo}
							alt='myteam logo.svg'
							fetchPriority='high'
						/>

						<ul className='footer__list'>
							<li className='footer__item'>
								<Link
									className='footer__link'
									to={'/'}
								>
									home
								</Link>
							</li>

							<li className='footer__item'>
								<Link
									className='footer__link'
									to={'/about'}
								>
									about
								</Link>
							</li>
						</ul>
					</nav>

					<div className='footer__div--address'>
						<p className='footer__paragraph--address'>
							987 Hillcrest Lane <br />
							Irvine, CA <br />
							California 92714 <br />
							Call Us : 949-833-7432
						</p>
					</div>
				</div>

				<div className='footer__div--copyright'>
					<ul className='footer__list--media'>
						<li className='footer__item--icon'>
							<Link
								className='footer__link--icon'
								target='_blank'
								to={'https://www.facebook.com/'}
							>
								<img
									className='footer__icon'
									src={facebook_icon}
									alt='icon-facebook.svg'
									fetchPriority='high'
								/>
							</Link>
						</li>

						<li className='footer__item--icon'>
							<Link
								className='footer__link--icon'
								target='_blank'
								to={'https://www.pinterest.com/'}
							>
								<img
									className='footer__icon'
									src={pinterest_icon}
									alt='myteam logo.svg'
									fetchPriority='high'
								/>
							</Link>
						</li>

						<li className='footer__item--icon'>
							<Link
								className='footer__link--icon'
								target='_blank'
								to={'https://x.com/'}
							>
								<img
									className='footer__icon'
									src={twitter_icon}
									alt='icon-twitter.svg'
									fetchPriority='high'
								/>
							</Link>
						</li>
					</ul>

					<p className='footer__paragraph--copyright'>
						Copyright 2020. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
