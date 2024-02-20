/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { Zoom } from 'react-reveal';
// import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'ID' },
	{ field: 'Amount', headerName: 'AMOUNT' },
	{ field: 'lastName', headerName: 'TRANSACTION ID', width: 150 },
	{
		field: 'transaction',
		headerName: 'TRANSACTION TYPE',

		width: 200,
	},
	{
		field: 'date',
		headerName: 'DATE',
		width: 150,
	},
	{
		field: 'time',
		headerName: 'TIME',
	},
	{
		field: 'status',
		headerName: 'STATUS',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,

		valueGetter: (params: any) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
];

const rows: any[] = [
	{
		id: 1,
		Amount: '₦43,644',
		lastName: 'TR_8401857902',
		transaction: 'Transfer',
		date: 'Feb 12, 2022',
		time: '10:30AM',
		status: (
			<div className='flex gap-1 justify-between px-3 py-1 whitespace-nowrap bg-green-50 border border-solid border-[color:var(--Side-colors-Green,#5DC090)] rounded-[100px] text-lime-950'>
				<div className='my-auto w-2 h-2 bg-green-300 rounded-full' />
				<div className='grow'>Processed</div>
			</div>
		),
	},
	{
		id: 2,
		Amount: '₦43,644',
		lastName: 'TR_8401857902',
		transaction: 'Transfer',
		date: 'Feb 12, 2022',
		time: '10:30AM',
		status: (
			<div className='flex gap-1 justify-between px-3 py-1 whitespace-nowrap bg-green-50 border border-solid border-[color:var(--Side-colors-Green,#5DC090)] rounded-[100px] text-lime-950'>
				<div className='my-auto w-2 h-2 bg-green-300 rounded-full' />
				<div className='grow'>Processed</div>
			</div>
		),
	},
	{
		id: 3,
		Amount: '₦43,644',
		lastName: 'TR_8401857902',
		transaction: 'Transfer',
		date: 'Feb 12, 2022',
		time: '10:30AM',
		status: (
			<div className='flex gap-1 justify-between px-7 py-1 text-red-900 whitespace-nowrap bg-rose-50 border border-solid border-[color:var(--Side-colors-red,#F14156)] rounded-[100px] max-md:px-5'>
				<div className='my-auto w-2 h-2 bg-rose-500 rounded-full' />
				<div className='grow'>Failed</div>
			</div>
		),
	},
	{
		id: 4,
		Amount: '₦43,644',
		lastName: 'TR_8401857902',
		transaction: 'Transfer',
		date: 'Feb 12, 2022',
		time: '10:30AM',
		status: (
			<div className='flex gap-1 justify-between px-3 py-1 whitespace-nowrap bg-green-50 border border-solid border-[color:var(--Side-colors-Green,#5DC090)] rounded-[100px] text-lime-950'>
				<div className='my-auto w-2 h-2 bg-green-300 rounded-full' />
				<div className='grow'>Processed</div>
			</div>
		),
	},
	{
		id: 5,
		Amount: '₦43,644',
		lastName: 'TR_8401857902',
		transaction: 'Transfer',
		date: 'Feb 12, 2022',
		time: '10:30AM',
		status: (
			<div className='flex gap-1 justify-between px-7 py-1 text-red-900 whitespace-nowrap bg-rose-50 border border-solid border-[color:var(--Side-colors-red,#F14156)] rounded-[100px] max-md:px-5'>
				<div className='my-auto w-2 h-2 bg-rose-500 rounded-full' />
				<div className='grow'>Failed</div>
			</div>
		),
	},
	{
		id: 6,
		Amount: '₦43,644',
		lastName: 'TR_8401857902',
		transaction: 'Transfer',
		date: 'Feb 12, 2022',
		time: '10:30AM',
		status: (
			<div className='flex gap-1 justify-between px-7 py-1 text-red-900 whitespace-nowrap bg-rose-50 border border-solid border-[color:var(--Side-colors-red,#F14156)] rounded-[100px] max-md:px-5'>
				<div className='my-auto w-2 h-2 bg-rose-500 rounded-full' />
				<div className='grow'>Failed</div>
			</div>
		),
	},
];

function Transactions() {
	const [page, setPage] = useState(0);
	const rowsPerPage = 5; // Change this value as per your requirement

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};
	return (
		<div className='w-full px-4 lg:px-0 lg:pl-8 lg:pr-20  pt-4 pb-20 lg:pb-8'>
			<div className='flex flex-col mt-9 max-md:max-w-full'>
				<div className='flex gap-5 justify-between self-center w-full font-medium whitespace-nowrap  max-md:flex-wrap'>
					<div className='flex gap-1.5 px-5 my-auto text-base leading-6 text-zinc-800'>
						<div className='grow'>All Accounts</div>
						<img
							alt=''
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/3274cef3a335e38accf099a186681e3911264f5cfd6ccdb61dfcdf0b76f74d9c?apiKey=bb278f95022541509fa4b766a9320e21&'
							className='my-auto aspect-square w-[18px]'
						/>
					</div>
					<div className='flex lg:hidden  gap-2 justify-between px-4 py-2.5 text-sm leading-5 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] text-slate-700'>
						<img
							alt=''
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/4460f594a206f4aa7ae7d4d26b6d7db09bc76a41b0bcd48ef05669281c86c1c1?apiKey=bb278f95022541509fa4b766a9320e21&'
							className='w-5 aspect-square'
						/>
						<div>Export</div>
					</div>
					<div className='flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full'>
						<div className='flex gap-1 lg:gap-3 justify-between px-5 text-zinc-500 w-full'>
							<div className='grow self-start mt-4  text-sm '>Select Date Range:</div>
							<div className='flex  gap-1 lg:gap-3 justify-between items-center pl-4 pr-8 py-2.5 text-sm leading-5 bg-white rounded-lg border border-solid border-[color:var(--Border-bd-dark,#DADAE7)]'>
								<img
									alt=''
									loading='lazy'
									src='https://cdn.builder.io/api/v1/image/assets/TEMP/6a2c7627fea77c1405e128a4dbaaf8118b7161d7c08dfbf34a191620532abbf0?apiKey=bb278f95022541509fa4b766a9320e21&'
									className='self-start w-5 aspect-square'
								/>
								<div className='grow lg:text-base text-xs'>June 6, 2023 - Jun 15, 2023</div>
							</div>
						</div>
						<div className='hidden lg:flex gap-2 justify-between pl-4 pr-8 py-2.5 text-sm leading-5 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] text-slate-700'>
							<img
								alt=''
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/4460f594a206f4aa7ae7d4d26b6d7db09bc76a41b0bcd48ef05669281c86c1c1?apiKey=bb278f95022541509fa4b766a9320e21&'
								className='w-5 aspect-square'
							/>
							<div>Export</div>
						</div>
					</div>
				</div>

				<Zoom>
					<div className='overflow-x-auto hidden lg:block border  border-gray-200 rounded-lg mt-5'>
						<table className='min-w-full divide-y divide-gray-200 '>
							<thead className='bg-gray-50 h-16'>
								<tr>
									{/* Render checkbox in the first column of the table head */}
									<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										<input type='checkbox' className='form-checkbox' />
									</th>

									{columns.map((column) => (
										<th
											key={column.field}
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											{column.headerName}
										</th>
									))}
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200 '>
								{rows
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, rowIndex) => (
										<tr key={rowIndex} className={rowIndex % 2 === 0 ? ' bg-white ' : 'bg-white'}>
											{/* Render checkbox in the first column of each table row */}
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
												<input type='checkbox' className='form-checkbox' />
											</td>

											{columns.map((column, colIndex) => (
												<td
													key={`${rowIndex}-${colIndex}`}
													className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'
												>
													{row[column.field]}
												</td>
											))}
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</Zoom>
				<Zoom>
					<div className=' lg:hidden'>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, rowIndex) => (
								<div className='mb-4 border border-[#BEBEBE33] rounded flex gap-5 justify-between flex-wrap py-4 pr-14 pl-6 bg-white  max-md:flex-wrap max-md:px-5 max-md:max-w-full'>
									<div className='border-b border-[#BEBEBE33] flex justify-between items-center w-full'>
										<p className='grow self-start  text-black '>AMOUNT : </p>
										<p className='text-right'>{row.Amount}</p>
									</div>
									<div className='border-b border-[#BEBEBE33] flex justify-between items-center w-full'>
										<p className='grow self-start  text-black '>TRANSACTION TYPE : </p>
										<p className='text-right'>{row.transaction}</p>
									</div>
									<div className='border-b border-[#BEBEBE33] flex justify-between items-center w-full'>
										<p className='grow self-start  text-black '>DATE : </p>
										<p className='text-right'>{row?.date}</p>
									</div>
									<div className='border-b border-[#BEBEBE33] flex justify-between items-center w-full'>
										<p className='grow self-start  text-black '>time : </p>
										<p className='text-right'>{row?.time}</p>
									</div>
									<div className=' flex justify-between items-center w-full'>
										<div className='grow self-start  text-black '>STATUS : </div>
										{row?.status}
									</div>
								</div>
							))}
					</div>
				</Zoom>

				<div className='flex gap-5 justify-between self-center mt-3 w-full max-w-[1053px] max-md:flex-wrap max-md:max-w-full'>
					{/* Show number of results */}
					<div className='flex-auto my-auto text-slate-500 text-sm'>
						Showing {Math.min((page + 1) * rowsPerPage, rows.length)} of {rows.length} results
					</div>

					<div className='flex gap-2 text-center whitespace-nowrap text-slate-600'>
						<button onClick={() => handleChangePage(null, page - 1)} disabled={page === 0}>
							<img
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/4a89813b313caef866b316d5943f6760d234b7e20e9b9becd54879ffd7ef2bc6?apiKey=bb278f95022541509fa4b766a9320e21&'
								className='w-8 aspect-square'
							/>
						</button>
						{Array.from(Array(Math.ceil(rows.length / rowsPerPage)).keys()).map((pageNumber) => (
							<button
								className={`justify-center items-center px-3.5 h-8 ${
									page === pageNumber
										? 'text-blue-600 border-[color:var(--Main-blue,#1F62FF)]'
										: 'border-[color:var(--Border-bd-dark,#DADAE7)]'
								}  bg-white rounded border border-solid aspect-square `}
								key={pageNumber}
								onClick={() => setPage(pageNumber)}
								disabled={page === pageNumber}
							>
								{pageNumber + 1}
							</button>
						))}

						<button
							onClick={() => handleChangePage(null, page + 1)}
							disabled={page === Math.ceil(rows.length / rowsPerPage) - 1}
						>
							<img
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/5865f0336c20abccc3587c9ba3d59bd337ea221a3d15684a7ea27b73d438917e?apiKey=bb278f95022541509fa4b766a9320e21&'
								className='w-8 aspect-square'
							/>
						</button>
					</div>

					{/* Pagination buttons */}
				</div>
			</div>
		</div>
	);
}

export default Transactions;
