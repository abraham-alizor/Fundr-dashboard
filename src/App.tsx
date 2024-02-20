import { Navigate, Route, Routes } from 'react-router-dom';
import MainRoutes from './Routes';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Routes>
				{/* Redirect from / to /dashboard */}
				<Route path='/' element={<Navigate to='/dashboard' />} />
				{/* Define your other routes */}
				<Route path='/*' element={<MainRoutes />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
