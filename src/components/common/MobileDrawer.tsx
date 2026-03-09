import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

import BackgroundImage from './BackgroundImage.tsx';
import ContactButton from './ContactButton.tsx';

import icon_hamburger from '/src/assets/icon/icon-hamburger.svg';
import icon_close from '/src/assets/icon/icon-close.svg';
import bg_pattern_about_1_mobile_nav_1 from '/src/assets/background/bg-pattern-about-1-mobile-nav-1.svg';

function MobileDrawer() {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const handleOpenDialog = () => {
		if (!dialogRef.current) return;
		if (!dialogRef.current.hasAttribute('open')) dialogRef.current.showModal();
	};

	const handleCloseDialog = () => {
		if (!dialogRef.current) return;
		if (dialogRef.current.hasAttribute('open')) dialogRef.current.close();
	};

	useEffect(() => {
		const dialogElement: HTMLDialogElement | null = dialogRef.current;

		if (dialogElement === null) return;

		const mediaQuery = window.matchMedia('(min-width: 800px)');

		const handleMediaChange = (event: MediaQueryListEvent) => {
			if (event.matches || dialogElement.hasAttribute('open')) dialogElement.close();
		};

		mediaQuery.addEventListener('change', handleMediaChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaChange);
		};
	});

	return (
		<>
			<button
				className={`mobileDrawer__openButton`}
				type='button'
				title='button'
				onClick={handleOpenDialog}
			>
				<BackgroundImage
					className='mobileDrawer__buttonImage'
					src={icon_hamburger}
				/>
			</button>

			<dialog
				className={`mobileDrawer__dialog`}
				ref={dialogRef}
			>
				<div className='mobileDrawer__dialogWrapper'>
					<button
						className={`mobileDrawer__closeButton`}
						type='button'
						title='button'
						onClick={handleCloseDialog}
					>
						<BackgroundImage
							className='mobileDrawer__buttonImage'
							src={icon_close}
						/>
					</button>

					<ul className='mobileDrawer__navlist'>
						<li className='mobileDrawer__navItem'>
							<Link
								className='mobileDrawer__navLink'
								to={'/'}
							>
								home
							</Link>
						</li>

						<li className='mobileDrawer__navItem'>
							<Link
								className='mobileDrawer__navLink'
								to={'/about'}
							>
								about
							</Link>
						</li>
					</ul>

					<ContactButton
						className='mobileDrawer__contactButton'
						hoverStyles={{
							backgroundColor: '--color-Neutral-0',
							color: '--color-Teal-950',
						}}
					>
						contact us
					</ContactButton>
				</div>

				<BackgroundImage
					className='mobileDrawer__backgroundImage'
					src={bg_pattern_about_1_mobile_nav_1}
				/>
			</dialog>
		</>
	);
}

export default MobileDrawer;
