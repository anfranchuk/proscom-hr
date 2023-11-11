import React, {useEffect, useState} from 'react';
import styles from './Tests.module.scss';

interface CardData {
	id: number;
	attempts: string;
	description: string;
	imageSrc: string;
	title: string;
	status: string;
}

const defTest = {
	id: 0,
	attempts: 'Попыток: 0/0',
	description: 'Описание:',
	imageSrc: '',
	title: 'Тест',
	status: 'Не пройдено',
};

const data = [
	{
		id: 10,
		attempts: 'Попыток: 8/10',
		description: 'Описание: ' +
			'Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла ' +
			'Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла ' +
			'Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла ' +
			'Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла ' +
			'Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла ' +
			'Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла ' +
			'Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла ' +

			'бла',
		imageSrc: 'https://via.placeholder.com/284x272',
		title: 'Тест с Проськой',
		status: 'Не пройдено',
	},
	{
		id: 1,
		attempts: 'Попыток: 8/10',
		description: 'Описание: Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла бла',
		imageSrc: 'https://via.placeholder.com/284x272',
		title: 'Тест с Проськой',
		status: 'Не пройдено',
	},
	{
		id: 2,
		attempts: 'Попыток: 8/10',
		description: 'Описание: Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла бла',
		imageSrc: 'https://via.placeholder.com/284x272',
		title: 'Тест с Проськой',
		status: 'Не пройдено',
	},
	{
		id: 3,
		attempts: 'Попыток: 8/10',
		description: 'Описание: Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла бла',
		imageSrc: 'https://via.placeholder.com/284x272',
		title: 'Тест с Проськой',
		status: 'Не пройдено',
	},
	{
		id: 4,
		attempts: 'Попыток: 8/10',
		description: 'Описание: Бла бла Бла блаБла блаБла блаБла бла Бла бла Бла бла Бла бла Бла бла Бла бла Бла блаБла бла Бла бла Бла бла Бла бла Бла блаБла блаБла бла',
		imageSrc: 'https://via.placeholder.com/284x272',
		title: 'Тест с Проськой',
		status: 'Не пройдено',
	},
];

type TestItem = {
	id: number;
	question: string;
	options: string[];
};

const testData: TestItem[] = [
	{
		id: 1,
		question: 'What is the capital of France?',
		options: ['Paris', 'Berlin', 'London', 'Madrid']
	},
	{
		id: 2,
		question: 'Which language is widely used for web development?',
		options: ['JavaScript', 'Python', 'Java', 'C++']
	},
	// Add more test items here
];

const Tests: React.FC = () => {
	// const [testNumber, setTestNumber] = useState<number | null>(null);
	const [selectedTest, setSelectedTest] = useState<CardData>(defTest);
	const [startTest, setStartTest] = useState(false);

	const isOneTest = selectedTest.id !== 0;

	const [time, setTime] = useState<number>(60); // Время теста в секундах

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((prevTime) => prevTime - 1);
		}, 1000);

		// Остановка таймера, когда время истекло
		if (time === 0) {
			clearInterval(timer);
		}

		// Очистка таймера при размонтировании компонента
		return () => {
			clearInterval(timer);
		};
	}, [time]);

	// Функция для форматирования времени в формат "чч:мм:сс"
	const formatTime = (timeInSeconds: number): string => {
		const hours = Math.floor(timeInSeconds / 3600);
		const minutes = Math.floor((timeInSeconds % 3600) / 60);
		const seconds = timeInSeconds % 60;

		return `${hours.toString().padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	};

	const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

	const handleOptionChange = (questionId: number, option: string) => {
		setSelectedOptions((prevSelectedOptions) => ({
			...prevSelectedOptions,
			[questionId]: option,
		}));
	};

	const handleSubmit = () => {
		// Prepare the selected options for sending to the backend
		const selectedOptionsArray = Object.values(selectedOptions);
		setStartTest(false);
		setSelectedTest(defTest);
		// Send the data to the backend using an API call or any other method
		console.log(selectedOptionsArray);
	};
	
	const OneSetCards = () => (
		<div className={styles.cards}>
			{data.map((cardData: CardData, index) => (
				<div key={index} className={styles.card}>
					<img className={styles.image} src={cardData.imageSrc} alt={'TestImg'}/>

					<div className={styles.contentContainer}>
						<div className={styles.status}>{cardData.status}</div>

						<div className={styles.cardText}>
							<div className={styles.title}>{cardData.title}</div>

							<div>{cardData.attempts}</div>
							<div>{cardData.description}</div>
						</div>

						<div className={styles.bottomCard}>
							<div>Осталось времени: 4д 20ч</div>
							<div className={styles.startButton} onClick={() => setSelectedTest(cardData)}>Начать тест</div>
						</div>
					</div>
				</div>
			))}

			{data.length < 5 && (
				Array(5 - data.length)
					.fill(null)
					.map((_, index) => (
						<div key={`empty-${index}`} style={{height: '27vh'}}></div>
					))
			)}
		</div>
	);

	const OneTestDescription = () => (
		<div className={styles.bodyTest}>
			<div className={styles.status}>{selectedTest.status}</div>

			<div className={styles.cardTextImg}>
				<img className={styles.image} src={selectedTest.imageSrc} alt={'TestImg'}/>

				<div className={styles.cardText}>
					<div className={styles.title}>{selectedTest.title}</div>

					<div>{selectedTest.attempts}</div>
					<div>{selectedTest.description}</div>
				</div>
			</div>

			<div className={styles.bottomCard}>
				<div style={{marginLeft: 40}}>Осталось времени: 4д 20ч</div>
				<div className={styles.bottomBtns}>
					<div className={styles.startButton} style={{marginRight: 20}} onClick={() => setSelectedTest(defTest)}>Назад</div>
					<div className={styles.startButton} onClick={() => setStartTest(true)}>Приступить</div>
				</div>
			</div>
		</div>
	);

	const MainTest = () => (
		<div className={`${styles.bodyTest} ${styles.mainTest}`}>
			<div className={styles.status}>{formatTime(time)}</div>

			<div className={styles.cardText} style={{width: 'calc(100% - 20px)', marginLeft: 20 }}>
				<div className={styles.title}>{selectedTest.title}</div>

				{testData.map((item) => (
					<div key={item.id}>
						<div>{item.question}</div>
						{item.options.map((option, index) => (
							<label key={index}>
								<input
									type="radio"
									name={`question${item.id}`}
									value={option}
									checked={selectedOptions[item.id] === option}
									onChange={() => handleOptionChange(item.id, option)}
								/>
								{option}
							</label>
						))}
					</div>
				))}
			</div>

			<div className={styles.bottomCard}>
				<div></div>
				<div className={styles.startButton} onClick={handleSubmit}>Проверить</div>
			</div>
		</div>
	);

	return (isOneTest ? startTest ? <MainTest /> : <OneTestDescription /> : <OneSetCards />);
};

export default Tests;
