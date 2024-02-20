import {
	BARCHART_BLACK,
	BARCHART_RED,
	EXCHANGE_BLACK,
	EXCHANGE_RED,
	PIE_CHART_BLACK,
	PIE_CHART_RED,
	TRANSACTION_BLACK,
	TRANSACTION_HORIZONTAL_BLACK,
	TRANSACTION_HORIZONTAL_RED,
	TRANSACTION_RED,
	WALLET_BLACK,
	WALLET_RED,
} from '../../assets';

export const MainPages = [
	{
		id: '1',
		title: 'Get Started',
		imageURL: PIE_CHART_BLACK,
		image_active: PIE_CHART_RED,
		alt: 'pie...',
		path: '/get-started',
	},
	{
		id: '2',
		title: 'Dashboard',
		imageURL: TRANSACTION_BLACK,
		image_active: TRANSACTION_RED,
		alt: 'wallet...',
		path: '/dashboard',
	},
	{
		id: '3',
		title: 'Accounts',
		imageURL: WALLET_BLACK,
		image_active: WALLET_RED,

		alt: 'Accounts...',
		path: '/accounts',
	},
	{
		id: '4',
		title: 'Transfer',
		imageURL: EXCHANGE_BLACK,
		image_active: EXCHANGE_RED,
		alt: 'barchart...',
		path: '/transfer',
	},
	{
		id: '5',
		title: 'Transactions',
		imageURL: TRANSACTION_HORIZONTAL_BLACK,
		image_active: TRANSACTION_HORIZONTAL_RED,
		alt: 'claim...',
		path: '/transactions',
	},
	{
		id: '6',
		title: 'Settings',
		imageURL: BARCHART_BLACK,
		image_active: BARCHART_RED,
		alt: 'settings...',
		path: '/settings',
	},
];
export interface SidebarDataTypes {
	id: string;
	title: string;
	imageURL?: string;
	image_active?: string;
	alt?: string;
	path: string;
}
