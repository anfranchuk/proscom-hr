import React, {useEffect, useRef, useState} from 'react';
import styles from './AccountPage.module.scss';

const AccountPage: React.FC = () => {
	const divBottomRef = useRef<HTMLDivElement>(null);
	const divTopRef = useRef<HTMLDivElement>(null);

	const [widthBottom, setWidthBottom] = useState(300);
	const [heightBottom, setHeightBottom] = useState(100);
	const [widthTop, setWidthTop] = useState(300);
	const [heightTop, setHeightTop] = useState(100);

	useEffect(() => {
		if (divBottomRef.current) {
			const newWidth = divBottomRef.current.offsetWidth;
			const newHeight = divBottomRef.current.offsetHeight;

			console.log(newWidth, newHeight);
			setWidthBottom(newWidth);
			setHeightBottom(newHeight);
		}

		if (divTopRef.current) {
			const newWidth = divTopRef.current.offsetWidth;
			const newHeight = divTopRef.current.offsetHeight;

			console.log(newWidth, newHeight);
			setWidthTop(newWidth);
			setHeightTop(newHeight);
		}
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.gridContainer}>
				<div className={styles.item} style={{display: 'flex'}}>
					<img width={200} src={'https://cdn.shopify.com/s/files/1/0015/4497/8530/products/ORING-235-N70BlackTipMotorTop.jpg?v=1610576860'}/>

					<div>
						<div className={styles.titles}>Райан Ховард</div>
						<p>Стажер</p>
						<p>Табельный номер: </p>
					</div>
				</div>

				<div className={styles.item}  ref={divTopRef}>
					<div className={styles.titles}>Достижения (30)</div>

					<div className={styles.gridItemWithScroll} style={{width: widthTop, height: `calc(${heightTop} - 280px)`}}>
						<div className={styles.scrItem}>
							<div style={{background: 'green', marginRight: 20, width: 250, height: 15}}></div>
							<div style={{background: 'green', marginRight: 20, width: 150, height: 15}}></div>
							<div style={{background: 'green', marginRight: 20, width: 150, height: 15}}></div>
							<div style={{background: 'green', marginRight: 20, width: 150, height: 15}}></div>
						</div>
					</div>
				</div>

				<div className={styles.smallGrid} >
					<div className={styles.item} style={{display: 'flex'}}>
						<img width={200} src={'https://cdn.shopify.com/s/files/1/0015/4497/8530/products/ORING-235-N70BlackTipMotorTop.jpg?v=1610576860'}/>

						<div>
							Сегодня ты Проська младший
							<p>Твой баланс:</p>
							<p>-100 PROSCOINS</p>
						</div>
					</div>

					<div className={styles.item} ref={divBottomRef}>
						<div className={styles.titles}>Коллеги</div>

						<div className={styles.gridItemWithScroll} style={{width: widthBottom, height: `calc(${heightBottom} - 280px)`}}>
							<div className={styles.scrItem}>
								<div style={{background: 'green', marginRight: 20, width: 250, height: 15}}></div>
								<div style={{background: 'green', marginRight: 20, width: 150, height: 15}}></div>
								<div style={{background: 'green', marginRight: 20, width: 150, height: 15}}></div>
								<div style={{background: 'green', marginRight: 20, width: 150, height: 15}}></div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.item} style={{background: 'blue'}}>
					<div className={styles.titles}>История</div>

				</div>
			</div>
		</div>
	);
};

export default AccountPage;
