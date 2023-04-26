import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity;
};
const variants = {
	enter: (direction) => {
		return {
			x: direction > 0 ? 1000 : -1000,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
		};
	},
};
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
	const [decrease, setDecrease] = useState(false);
	const [increase, setIncrease] = useState(false);

	const [[page, direction], setPage] = useState([0, 0]);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
		setShowCard(false);
		setIndex((prev) => prev + newDirection);

		setTimeout(() => {
			setShowCard(true);
		}, 300);
	};

	if (order === index) {
		return (
			<AnimatePresence>
				{showCard && (
					<motion.div
						key={order}
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.1 },
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								paginate(-1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(1);
							}
						}}
						className={`z-20 shadow-md absolute border border-blue-700 font-semibold text-2xl w-[90%] h-full  text-white bg-blue-600 rounded-lg 
				flex items-center justify-center`}>
						<div className='absolute top-6 left-6 px-6 py-2 text-base rounded-full bg-blue-600 flex items-center justify-center'>
							{'Question: ' + questionNumber + '.'}
						</div>
						<button
							onClick={() => !first && paginate(-1)}
							className='h-full -translate-x-5 w-[50vw] md:w-40  absolute left-0  rounded'></button>
						<div className='w-[90%] flex flex-col items-center justify-center'>
							<div className='text-base'>Hvem i rommet</div>
							<div className=''>{text}</div>
						</div>
						<button
							onClick={() => !last && paginate(1)}
							className='h-full translate-x-5 w-[50vw] md:w-40  absolute right-0  rounded'></button>
					</motion.div>
				)}
			</AnimatePresence>
		);
	} else {
		return;
	}
};

export default Card;
