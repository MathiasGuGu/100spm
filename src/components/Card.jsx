import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Card = ({
	order,
	index,
	setIndex,
	text,
	first,
	last,
	questionNumber,
}) => {
	const [showCard, setShowCard] = useState(true);

	const [[page, direction], setPage] = useState([0, 0]);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
		setIndex((prev) => prev - newDirection);
	};

	if (order === index) {
		return (
			<AnimatePresence>
				<motion.div
					className={`z-20 shadow-md absolute border border-blue-700 font-semibold text-2xl w-[90%] h-full  text-white bg-blue-600 rounded-lg 
				flex items-center justify-center`}>
					<div className='absolute top-6 left-6 px-6 py-2 text-base rounded-full bg-blue-600 flex items-center justify-center'>
						{'Question: ' + questionNumber + '.'}
					</div>
					<button
						onClick={() => !first && paginate(1)}
						className='h-full -translate-x-5 w-[50vw] md:w-40  absolute left-0  rounded'></button>
					<div className='w-[90%] flex flex-col items-center justify-center'>
						<div className='text-base'>Hvem i rommet</div>
						<div className=''>{text}</div>
					</div>
					<button
						onClick={() => !last && paginate(-1)}
						className='h-full translate-x-5 w-[50vw] md:w-40  absolute right-0  rounded'></button>
				</motion.div>
			</AnimatePresence>
		);
	} else {
		return;
	}
};

export default Card;
