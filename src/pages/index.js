import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import { useState } from 'react';
import Card from '@/components/Card';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [language, setLanguage] = useState('norsk');
	const [i, setIndex] = useState(0);
	return (
		<>
			<nav>
				<Navbar language={language} setLanguage={setLanguage}></Navbar>
			</nav>
			<main
				className={`flex items-center justify-center min-h-screen min-w-screen bg-gray-900 box-border ${inter.className}`}>
				<section className='relative h-[500px] w-screen flex items-center justify-center'>
					<Card
						first={true}
						index={i}
						setIndex={setIndex}
						text={'something'}></Card>
					<Card
						index={i + 1}
						setIndex={setIndex}
						text={'something asd'}></Card>
					<Card
						index={i + 2}
						setIndex={setIndex}
						text={'123123132'}></Card>
					<Card
						index={i + 3}
						setIndex={setIndex}
						text={'asfbbbbbb'}></Card>
					<Card
						index={i + 4}
						setIndex={setIndex}
						text={'3gadb33333'}></Card>
					<Card
						index={i + 5}
						setIndex={setIndex}
						text={'Else'}></Card>
					<Card
						index={i + 6}
						setIndex={setIndex}
						text={'Mathias'}></Card>
					<Card
						index={i + 7}
						setIndex={setIndex}
						text={'LOLOOLOLOLO'}></Card>
					<Card
						last={true}
						index={i + 8}
						setIndex={setIndex}
						text={'ASDADS2232332 lol'}></Card>
				</section>
			</main>
		</>
	);
}
