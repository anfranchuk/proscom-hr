import styles from './SigninPage.module.scss';
import SigninForm from './components/SigninForm';

const SigninPage: React.FC = () => {
	return (
		<div className={styles.main}>
			<SigninForm />
		</div>
	);
};

export default SigninPage;
