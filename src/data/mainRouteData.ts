import { Dashboard, Transactions } from '../pages';

export const mainRoutes = [
	{
		id: '2',
		title: 'Balances',
		component: Dashboard,
		path: 'dashboard',
	},
	{
		id: '3',
		title: 'Transactions',
		component: Transactions,
		path: 'transactions',
	},
];
