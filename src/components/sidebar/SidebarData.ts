import {
	ANNOUNCEMENT_BLACK,
	ANNOUNCEMENT_RED,
	BARCHART_BLACK,
	BARCHART_RED,
	CART_BLACK,
	CART_RED,
	EXCHANGE_BLACK,
	EXCHANGE_RED,
	PAYMENT_LINK_BLACK,
	PAYMENT_LINK_RED,
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

export const acceptPayments = [
	{
		id: '1',
		title: 'Checkout',
		imageURL: CART_BLACK,
		image_active: CART_RED,
		alt: 'checkout...',
		path: '/checkout',
	},
	{
		id: '2',
		title: 'Payment links',
		imageURL: PAYMENT_LINK_BLACK,
		image_active: PAYMENT_LINK_RED,
		alt: 'payment...',
		path: '/payment-links',
	},
];
export const sendPayments = [
	{
		id: '1',
		title: 'Wire',
		imageURL: TRANSACTION_HORIZONTAL_BLACK,
		image_active: TRANSACTION_HORIZONTAL_RED,
		alt: 'wire..',
		path: '/wire',
	},
];
