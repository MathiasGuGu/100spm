import React, { useState } from 'react';

const Card = ({ index, setIndex, text, first, last }) => {
	const decreaseIndex = () => {
		setIndex((prev) => prev - 1);
	};
	const increaseIndex = () => {
		setIndex((prev) => prev + 1);
	};
	switch (index) {
		case 3:
			return (
				<div className='absolute -translate-x-8 scale-90 font-semibold text-2xl w-[90%] h-full border text-white bg-blue-800 border-gray-700 rounded flex items-center justify-center'></div>
			);
		case 4:
			return (
				<div className=' z-20 shadow absolute font-semibold text-2xl w-[90%] h-full  text-white bg-blue-700 rounded flex items-center justify-center'>
					<button
						onClick={() => !first && increaseIndex()}
						className='h-full -translate-x-5 w-[50vw] md:w-40  absolute left-0  rounded'></button>
					{text}
					<button
						onClick={() => !last && decreaseIndex()}
						className='h-full translate-x-5 w-[50vw] md:w-40  absolute right-0  rounded'></button>
				</div>
			);
		case 5:
			return (
				<div className='absolute translate-x-8 scale-90 font-semibold text-2xl w-[90%] h-full border text-white bg-blue-900 border-gray-700 rounded flex items-center justify-center'></div>
			);
		default:
			return (
				<div className='hidden absolute translate-x-8 scale-90 font-semibold text-2xl w-[90%] h-full border text-white bg-blue-500 border-gray-700 rounded  items-center justify-center'>
					Er alltid på mobilen?
				</div>
			);
	}
};

export default Card;
