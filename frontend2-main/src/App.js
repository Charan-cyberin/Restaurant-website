import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './pages/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Products from './pages/Products.jsx';

import Error from './pages/Error.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='products' element={<Products />} />
						<Route path='posts' element={<Posts />} />
						<Route path='*' element={<Error />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
