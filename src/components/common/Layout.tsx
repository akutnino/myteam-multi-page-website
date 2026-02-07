import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation, type Location } from 'react-router';

import OutletWrapper from './OutletWrapper.tsx';
import LoadingSpinner from './LoadingSpinner.tsx';
import Home from '../pages/Home.tsx';
import Footer from './Footer.tsx';
import CallToAction from './CallToAction.tsx';

function Layout() {
	const location: Location = useLocation();
	const isPathnameContact: boolean = location.pathname === 'contact';

	return (
		<ErrorBoundary
			key={location.key}
			fallback={<Home />}
		>
			<Suspense
				key={location.key}
				fallback={<LoadingSpinner />}
			>
				<OutletWrapper>
					<Outlet />
				</OutletWrapper>
				{!isPathnameContact && <CallToAction />}
				<Footer />
			</Suspense>
		</ErrorBoundary>
	);
}

export default Layout;
