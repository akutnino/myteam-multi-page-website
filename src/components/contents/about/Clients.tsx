import BackgroundImage from '../../common/BackgroundImage.tsx';

import logo_the_verge from '/src/assets/logo/logo-the-verge.png';
import logo_jakarta_post from '/src/assets/logo/logo-jakarta-post.png';
import logo_the_guardian from '/src/assets/logo/logo-the-guardian.png';
import logo_tech_radar from '/src/assets/logo/logo-tech-radar.png';
import logo_gadgets_now from '/src/assets/logo/logo-gadgets-now.png';
import bg_pattern_home_3 from '/src/assets/background/bg-pattern-home-3.svg';

function Clients() {
	return (
		<section className='clients'>
			<div className='clients__wrapper'>
				<h1 className='clients__header'>Some of our clients</h1>

				<div className='clients__logoWrapper'>
					<BackgroundImage
						className='clients__logoImage'
						src={logo_the_verge}
					/>
					<BackgroundImage
						className='clients__logoImage'
						src={logo_jakarta_post}
					/>
					<BackgroundImage
						className='clients__logoImage'
						src={logo_the_guardian}
					/>
					<BackgroundImage
						className='clients__logoImage'
						src={logo_tech_radar}
					/>
					<BackgroundImage
						className='clients__logoImage'
						src={logo_gadgets_now}
					/>
				</div>
			</div>

			<BackgroundImage
				className='clients__backgroundImage'
				src={bg_pattern_home_3}
			/>
		</section>
	);
}

export default Clients;
