import React, {ChangeEvent, useState} from 'react';
import styles from './CreateTestPage.module.scss';

interface Field {
	title: string;
	name: keyof KeyForInput;
}

interface KeyForInput {
	name: string;
	description: string;
	position: string;
	time: string;
	limit: string;
	attempts: string;
}

const CreateTestPage: React.FC = () => {
	const [inputData, setInputData] = useState<KeyForInput>(
		{
			name: '',
			description: '',
			position: '',
			time: '',
			limit: '',
			attempts: '',
		});

	const columnsFields: Field[] = [
		{ title: 'Название', name: 'name' },
		{ title: 'Описание', name: 'description'},
		{ title: 'Должность', name: 'position'},
		{ title: 'Время', name: 'time' },
		{ title: 'Порог', name: 'limit'},
		{ title: 'Попытки', name: 'attempts'},
	];

	const handleChangeInput = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInputData((prevInput) => ({
			...prevInput,
			[name]: value,
		}));

	};

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.createTestTitle}>Создать тест</h1>
			{columnsFields.splice(0, 3).map(({ title, name }) => {
				const key = `Modal-Add-${title}-${name}`;
				return (
					<div key={key} className={styles.box}>
						<div className={styles.container}>
							<div className={styles.title}>{title}</div>
							<div className={styles.inputBox}>
								<input
									className={styles.styleInput}
									id={name}
									value={inputData[name]}
									onChange={handleChangeInput(name)}
								/>
							</div>
						</div>
					</div>
				);
			})}
			<div  className={styles.boxRows}>
				{columnsFields.splice(0, columnsFields.length).map(({ title, name }) => {
					const key = `columnsFields-${title}-${name}`;
					return (
						<div key={key} className={styles.containerRows}>
							<div className={styles.title}>{title}</div>
							<div className={styles.inputBox}>
								<input
									className={styles.styleInput}
									id={name}
									value={inputData[name]}
									onChange={handleChangeInput(name)}
								/>
							</div>
						</div>
					);
				})}
			</div>
			<div className={styles.box}>
				<div className={styles.container}>
					<div className={styles.title}>Блок 1</div>
					<div className={styles.title}>Название</div>
					<div className={styles.inputBox}>
						<input
							className={styles.styleInput}
						/>
					</div>
				</div>
			</div>
			<div className={styles.box}>
				<div className={styles.container}>
					<div className={styles.title}>Учебный материал</div>
					<div className={styles.inputBox}>
						<input
							className={styles.styleInput}
						/>
					</div>
				</div>
			</div>
			<button className={styles.styleBtn}>Создать тест</button>
		</div>
	);
};

export default CreateTestPage;
