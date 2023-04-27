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
					className={`z-20 relative shadow-lg  bg-blue-100  font-semibold text-2xl w-[95%] h-full  text-white  rounded-lg 
				flex items-center justify-center`}></motion.div>
			</AnimatePresence>
		);
	} else {
		return;
	}
};

export default Card;
