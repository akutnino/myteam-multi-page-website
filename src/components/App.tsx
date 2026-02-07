import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from './common/Layout.tsx';

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Layout />}
				>
					<Route
						index={true}
						element={<Home />}
					/>
					<Route
						path='about'
						element={<About />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
					<Route
						path='*'
						element={<Home />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
