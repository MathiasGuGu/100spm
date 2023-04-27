import Navbar from '@/components/navbar/Navbar';
import Link from 'next/link';
import React from 'react';

const index = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className='w-screen h-screen flex flex-col gap-12 items-center justify-center'>
				<h2 className=' border-b text-3xl font-semibold text-gray-500'>
					Velg en Kategori
				</h2>
				<div className=' w-full flex flex-wrap gap-6 justify-center'>
					<Link href='sporsmal/rolig'>
						<div className='h-24 shadow w-64 rounded-md text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 flex items-center justify-center'>
							<p className=' text-xl font-semibold '>Rolig</p>
						</div>
					</Link>
					<Link
						className=' pointer-events-none opacity-60 '
						href='sporsmal/pa-grensa'>
						<div className='h-24 shadow w-64 rounded-md text-gray-200 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 flex flex-col items-center justify-center'>
							<p className=' text-xl font-semibold '>På Grensa</p>
							<p>Coming Soon</p>
						</div>
					</Link>
					<Link
						className=' pointer-events-none opacity-60 '
						href='sporsmal/over-grensa'>
						<div className='h-24 shadow w-64 rounded-md text-gray-200 flex-col bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 flex items-center justify-center'>
							<p className=' text-xl font-semibold '>
								Over Grensa
							</p>
							<p>Coming Soon</p>
						</div>
					</Link>
				</div>
				<div className='border-b'>
					<h2 className='text-3xl font-semibold text-gray-400'>
						Lagret spørsmål
					</h2>
					<p className='text-gray-400'>Coming soon</p>
				</div>
			</div>
		</>
	);
};

export default index;
