import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import { useState } from 'react';
import Card from '@/components/Card';

const inter = Inter({ subsets: ['latin'] });

const questions = [
	{ text: 'Er alltid på mobilen?', first: true },
	{ text: 'Har mest viljestyrke?' },
	{ text: 'Er best på å styrte?' },
	{ text: 'Er dårligst sjåfør?' },
	{ text: 'Er mest vill?' },
	{ text: 'Spanderer alltid på fylla?' },
	{ text: 'Er kåtest?' },
	{ text: 'Er flinkest på skolen?' },
	{ text: 'Tar seg mest på puppene?' },
	{ text: 'Trodde lengst på julenissen?' },
	{ text: '10 Spørsmål, SKÅL!', milestone: true },
	{ text: 'Mest ubesluttsom?' },
	{ text: 'Har høyest toleranse?' },
	{ text: 'Er mest rettferdig?' },
	{ text: 'Lager de sjukeste lydene i senga?' },
	{ text: 'Gir mest til veldedighet?' },
	{ text: 'Er mest overlegen?' },
	{ text: 'Kommer til å lykkes best i livet?' },
	{ text: 'Er en adrenalin junkie?' },
	{ text: 'Googler seg selv oftest?' },
	{ text: 'Er lykkeligst?' },
	{ text: 'SKÅL!', milestone: true, last: true },
];

export default function Home() {
	const [language, setLanguage] = useState('norsk');
	const [i, setIndex] = useState(0);
	return (
		<>
			<nav>
				<Navbar language={language} setLanguage={setLanguage}></Navbar>
			</nav>
			<main
				className={` overflow-y-hidden flex items-center justify-center min-h-screen min-w-screen bg-gray-900 box-border ${inter.className}`}>
				<section className='relative h-[500px] w-screen flex items-center justify-center'>
					{questions.map((question, index) => {
						return (
							<Card
								first={question.first && true}
								last={question.last && true}
								index={i + index}
								questionNumber={index + 1}
								setIndex={setIndex}
								text={question.text}></Card>
						);
					})}
				</section>
			</main>
		</>
	);
}
