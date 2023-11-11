import React, {useState} from 'react';
import styles from './TestPage.module.scss';
import Tests from './components/Tests';
import CheckIcon from '@mui/icons-material/Check';

const jobs = [
	{
		name: 'Тесты',
		value: 'tests',
	},
	{
		name: 'Опросы',
		value: 'questions',
	},
	{
		name: 'Создать тест',
		value: 'createTest',
	},
];

const myPlan = [
	{
		name: 'Опрос 1',
		resolve: true,
	},
	{
		name: 'Тест 2',
		resolve: false,
	},
	{
		name: 'Тест 1',
		resolve: true,
	},
];

const TestPage: React.FC = () => {
	const [jobValue, setJobValue] = useState('tests');

	const jobType = {
		tests: <Tests/>,
		questions: <div></div>,
		createTest: <div></div>,
	};

	return (
		<div className={styles.main}>
			<div className={styles.containerMenu}>
				<div className={styles.menuJob}>
					{jobs.map(({ name, value }) => {
						const isActive = value === jobValue;
						const bgColor = isActive ? 'rgba(153, 201, 239, 0.50)' : '#FFFFFF';

						return (
							<div
								key={value}
								style={{background: bgColor}}
								className={styles.buttonMenu}
								onClick={() => setJobValue(value)}
							>
								{name}
							</div>
						);
					})}
				</div>

				<div className={styles.menuPlan}>
					<div className={styles.buttonMenu}>
						Мой план
					</div>
					{myPlan.map(({ name, resolve }, index) => (
						<div key={`${name}-${index}`} className={styles.buttonMenu}>
							{name}
							{resolve && <CheckIcon sx={{ marginRigth: 10, color: '#00FFA3' }} />}
						</div>
					))}
				</div>
			</div>

			<div className={styles.cards}>
				{jobType[jobValue as keyof typeof jobType]}
			</div>
		</div>
	);
};

export default TestPage;
