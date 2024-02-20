import {
	Analytics,
	Balances,
	Checkout,
	Dashboard,
	Exchange,
	Marketing,
	PaymentLinks,
	Transactions,
	Wire,
} from '../pages';

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
