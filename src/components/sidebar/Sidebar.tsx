/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import { acceptPayments, MainPages, sendPayments, SidebarDataTypes } from './SidebarData';
import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import Typography from '../Typography';
import { CHEVRON_LEFT, LOGO, QUESTION } from '../../assets';
import Button from '../button';
import { useMediaQuery } from '../../hooks';

interface sidebarProps {
	open: boolean;
	onClose: () => void;
}

export const Sidebar = (props: sidebarProps) => {
	const location = useLocation();

	return (
		<Transition
			className={`flex-none h-full w-60 fixed lg:static z-30 bg-[#E6EAEE] lg:bg-[#E6EAEE]/40`}
			as={'div'}
			show={props.open}
			enter='transition-all ease-in duration-1000'
			enterFrom='transform -translate-x-full'
			enterTo='transform -translate-x-0'
			leave='transition-all ease-out duration-1000'
			leaveFrom='transform -translate-x-0'
			leaveTo='transform -translate-x-full'
		>
			<div className='h-full bg-deep-surface  relative'>
				<div className='h-[10vh] w-20 ml-10'>
					<Link to='/'>
						<img
							alt=''
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/a48df62c9fd6b771bf3e02dd6d2e4b479b68ea88102eb44fd259823b27b2bbb9?apiKey=bb278f95022541509fa4b766a9320e21&'
							className='flex-1 shrink-0 mt-5 w-full aspect-[4.17]'
						/>
					</Link>
				</div>

				<div className='flex flex-col justify-between h-[90vh] pb-10 pl-5'>
					<div className=''>
						<ul>
							<Tabs
								{...{
									data: MainPages,
									className: 'hover:font-medium',
									onClose: props.onClose,
									active: (item: SidebarDataTypes) => location.pathname === item.path,
								}}
							/>
						</ul>
					</div>

					{/* <Button
							icons={CHEVRON_LEFT}
							iconClassName='h-[0.9rem] w-3'
							title='Hide panel'
							bgColor={'bg-transparent'}
							onClick={() => {}}
							hoverColor={''}
							textColor={'text-black'}
							className={'border border-black'}
						/> */}
				</div>
			</div>
		</Transition>
	);
};

interface tabsProps {
	data: SidebarDataTypes[];
	active: any;
	className?: string;
	containerClassName?: string;
	onClose: () => void;
}

const Tabs = ({ data, active, className, containerClassName, onClose }: tabsProps) => {
	const isMobileView = useMediaQuery('(max-width: 640px)');
	const isTabletView = useMediaQuery('(max-width: 840px)');

	return (
		<>
			{data.map((item) => (
				<li
					onClick={isMobileView || isTabletView ? onClose : () => {}}
					key={item.id}
					className={`${containerClassName}`}
				>
					<Link to={item.path} className='hover:text-black'>
						<div
							className={` flex  w-full items-center py-2 px-5 ${className} ${
								active(item) ? 'border-r-8 border-tertiary text-white bg-[#3976E8] font-medium' : ''
							}`}
						>
							{/* <div></div> */}
							<img
								src={active(item) ? item.image_active : item.imageURL}
								className='h-5  mr-4'
								alt={item.alt}
							/>
							<Typography variant='label'>{item.title}</Typography>
						</div>
					</Link>
				</li>
			))}
		</>
	);
};
