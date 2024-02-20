/* eslint-disable jsx-a11y/alt-text */
import { AiOutlineMenu } from 'react-icons/ai';
import { BELL, CHEVRON_DOWN, USER_ICON } from '../../assets';
import Typography from '../Typography';
import { Link } from 'react-router-dom';

interface header {
	onMenu?: any;
	handleShowFilter?: any;
}

function Header(props: header) {
	return (
		<div>
			<div className='h-16 lg:h-12 flex justify-between bg-[#E6EAEE]/40 border-b  border-b-[#EDEDED] items-center flex-row w-full px-4 lg:px-8 lg:py-8'>
				<div className=''>
					<AiOutlineMenu onClick={props.onMenu} className='h-10 text-4xl lg:hidden' />
				</div>
				<div className='flex items-center lg:hidden mx-auto '>
					<Link to='/' className=''>
						<img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/a48df62c9fd6b771bf3e02dd6d2e4b479b68ea88102eb44fd259823b27b2bbb9?apiKey=bb278f95022541509fa4b766a9320e21&'
							className='flex-1 shrink-0 mt-5 w-full aspect-[4.17] lg:hidden'
						/>
					</Link>
				</div>
				<div className='flex  lg:flex-none shrink-0  items-center h-full justify-end lg:justify-start '>
					<Link
						to='/'
						className={`transition ease-in-out delay-150 py-2 px-3 w-16 flex justify-between items-center  hover:-translate-y-1 hover:scale-110  duration-300 text-xs `}
					>
						<img src={BELL} alt='user' className='w-6 h-6' />
					</Link>
					<Link
						to='/'
						className={`transition ease-in-out delay-150 py-2 px-3 w-16 flex justify-between items-center  hover:-translate-y-1 hover:scale-110  duration-300 text-xs `}
					>
						{/* <img src={USER_ICON} alt='user' className='w-7 h-7' /> */}
						<p className='p-4 rounded-full bg-[#0CBC8B] text-white'>GA</p>
						<img src={CHEVRON_DOWN} alt='user' className='w-4 h-4' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
