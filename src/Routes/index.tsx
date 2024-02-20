import React from 'react';
import { DashboardLayout } from '../layouts/dashboard';
import { Route, Routes } from 'react-router-dom';
import { mainRoutes } from '../data/mainRouteData';
import NotFound from '../pages/NotFound';

function MainRoutes() {
	return (
		<div>
			<DashboardLayout>
				<Routes>
					{mainRoutes.map((item, index) => (
						<Route key={index} path={item.path} element={<item.component />} />
					))}
					<Route
						path='*'
						element={<NotFound />} //this is a way to redirect
					/>
				</Routes>
			</DashboardLayout>
		</div>
	);
}

export default MainRoutes;
