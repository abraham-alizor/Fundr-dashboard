/* eslint-disable jsx-a11y/alt-text */

import { chartData } from '../../data/chartData';

import MainChart from '../../components/UI/mainChart';
import { Fade, Zoom } from 'react-reveal';
import { useState } from 'react';
import useCopyToClipboard from '../../hooks/CopyHook';
import DropDown from '../../components/button/DropDown';

function Dashboard() {
	const [isCopied, copyToClipboard] = useCopyToClipboard();
	const [data, setData] = useState<any>('Last 30 days');
	const handleCopy = () => {
		if (typeof copyToClipboard === 'function') {
			copyToClipboard('8000000000');
		}
	};

	return (
		<div className='w-full lg:px-8  pb-20 lg:pb-8 flex flex-col'>
			<div className='flex flex-col mt-8 max-md:mt-10 max-md:max-w-full'>
				<div className='flex flex-col ml-9 max-w-full text-base font-semibold leading-6 whitespace-nowrap text-zinc-800 w-[161px] max-md:ml-2.5'>
					<div className='self-center'>Online Payments</div>
					<div className='shrink-0 mt-5 h-0.5 bg-blue-500' />
				</div>
				<div className='z-10 shrink-0 h-0.5 bg-gray-100 max-md:max-w-full' />
				<div className='flex flex-col lg:px-11 mt-12 max-md:px-5 max-md:mt-10 max-md:max-w-full'>
					<Fade left>
						<div className='flex flex-col lg:px-7 py-5 max-w-full bg-white rounded-md border border-solid border-zinc-200 w-[325px] max-md:px-5'>
							<div className='text-xs font-medium tracking-normal leading-6 text-stone-400'>
								ACCOUNT DETAILS
							</div>
							<div className='text-xs font-medium tracking-normal leading-6 text-black'>
								STERLING BANK
							</div>
							<div className='flex gap-5 justify-between w-full whitespace-nowrap'>
								<div className='flex-auto text-xl font-bold tracking-wide leading-6 text-black'>
									8000000000
								</div>
								<button
									className={`flex gap-2 justify-between px-2 py-1.5 text-xs leading-5 text-purple-500 rounded-lg bg-purple-500 bg-opacity-20 transition-all ease-out delay-500 duration-500 ${
										isCopied ? 'scale-105 opacity-5' : ''
									}`}
									onClick={handleCopy}
								>
									<img
										loading='lazy'
										src='https://cdn.builder.io/api/v1/image/assets/TEMP/90e2bc388f9c1ab32166ac08f98431b15b3c2d472a7814e8c6653f7ca057182a?apiKey=bb278f95022541509fa4b766a9320e21&'
										className='self-start w-4 aspect-square'
										alt='Copy icon'
									/>
									<div>{isCopied ? 'Copied' : 'Copy'}</div>
								</button>
							</div>
						</div>
					</Fade>
					<div className='flex flex-col lg:px-8 py-6 mt-10 rounded-xl border border-solid bg-neutral-50 border-[color:var(--gray-200,#E4E4E7)] max-md:px-5 max-md:max-w-full'>
						<div className='flex gap-5 justify-between pr-14 w-full text-sm max-md:flex-wrap max-md:pr-5 max-md:max-w-full'>
							<div className='flex gap-5 justify-between font-semibold text-zinc-500'>
								<div className='grow my-auto whitespace-nowrap'>Showing data for</div>

								<DropDown {...{ state: data, setState: setData }} />
							</div>
							<div className='flex gap-5 items-center text-black whitespace-nowrap leading-[138%]'>
								<div
									className={`grow justify-center self-stretch  my-auto ${
										data === 'Today' ? 'px-5 py-3 rounded-md  bg-cyan-400 bg-opacity-10' : ''
									} `}
								>
									Today
								</div>
								<div
									className={`grow justify-center self-stretch  my-auto ${
										data === 'Last 7 days' ? 'px-5 py-3 rounded-md  bg-cyan-400 bg-opacity-10' : ''
									} `}
								>
									Last 7 days
								</div>
								<div
									className={`grow justify-center self-stretch  my-auto ${
										data === 'Last 30 days' ? 'px-5 py-3 rounded-md  bg-cyan-400 bg-opacity-10' : ''
									} `}
								>
									Last 30 days
								</div>
							</div>
						</div>
						<Zoom>
							<div className='pt-6 pb-11 mt-6 bg-white rounded-md border border-solid border-zinc-200 lg:px-5 max-md:max-w-full'>
								<div className='flex flex-col px-7  pb-11 mt-8  max-md:px-5 max-md:max-w-full'>
									<div className='flex gap-3 self-start text-sm whitespace-nowrap'>
										<div className='font-bold leading-9 text-neutral-700'>Revenue</div>
										<div className='grow my-auto leading-5 text-black'>
											<span className='font-light text-green-400'>+0.00%</span>
											<span className='font-light'> vs {data}</span>
										</div>
									</div>
									<div className='flex gap-3 self-start whitespace-nowrap'>
										<div className='grow text-3xl font-bold text-neutral-700'>₦0.00</div>
										<div className='grow my-auto text-sm leading-5 text-black'>in total value</div>
									</div>
								</div>
								{data === 'Last 30 days' ? (
									<MainChart data={chartData['Last 30 days']} />
								) : data === 'Last 7 days' ? (
									<MainChart data={chartData['Last 7 days']} />
								) : (
									<></>
								)}
							</div>
						</Zoom>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
