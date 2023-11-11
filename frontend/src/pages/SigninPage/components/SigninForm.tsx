import React from 'react';
import { Formik, Form } from 'formik';
import { FormValues, initialValues } from './SigninForm.interface';
// import connectState from '../../../store/connectState/connectState';
import autorizeState from '../../../store/accoutState/autorizeState';
// import { ServerAns, prepareAutrizeData } from '../../../api/SigninPage/prepareAutrizeData';
// import { apiPostAuthorize } from '../../../api/SigninPage/apiSignin';
import styles from './SinginForm.module.scss';
import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';

const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
	'& .MuiInputLabel-root': {
		right: 0,
		top: 10,
		shrink: true,
		color: '#000000',
	},
	'& .MuiInputLabel-shrink': {
		display: 'none',
	},
	'& .MuiOutlinedInput-root.Mui-focused': {
		'& legend ': {
			display: 'none',
		},
	},
	'& .MuiInputBase-root': {
		height: '100%',

		color: '#000000',

		fontSize: '24px',
		fontFamily: 'Inter',
		fontWeight: 400,
	},

	'& input:-webkit-autofill': {
		fontSize: '24px !important',
	},

	'& .MuiInput-underline:after': {
		border: 'none',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			border: 'none',
		},
		'&:hover fieldset': {
			border: 'none',
		},
		'&.Mui-focused fieldset': {
			border: 'none',
		},
	},
}));

const SigninForm: React.FC = () => {
	// const [error, setError] = useState(false);

	const handleSubmit = (values: FormValues) => {
		// const { postAutrizeLink } = connectState;
		const { setIsAutorize } = autorizeState;
		console.log(values);
		setIsAutorize(true);//delete

		
		// apiPostAuthorize(postAutrizeLink, values, {}).then(({ data, error }) => {
		// 	const { isError } = error;
		//
		// 	if (isError) return;
		//
		// 	// const { isAuthorize, token, role } = prepareAutrizeData(data as ServerAns);
		//
		//
		// 	setIsAutorize(data as boolean);
		// 	// setToken(token);
		// 	// setUserRole(role);
		// });
	};

	return (
		<div className={styles.card}>
			<h1>Вход</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({ values, handleChange, handleBlur }) => (
					<Form className={styles.formikCard}>
						<div className={styles.textFieldCard}>
							<StyledTextField
								className={styles.textfieldStyle}
								type="text"
								name="email"
								margin="normal"
								placeholder="Почта"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{/*{errors.email && touched.email && <div>{errors.email}</div>}*/}

							<StyledTextField
								className={styles.textfieldStyle}
								type="password"
								name="password"
								margin="normal"
								placeholder="Пароль"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{/*{errors.password && touched.password && <div>{errors.password}</div>}*/}
							{/*{error && <div className={styles.error}>Неверный логин или пароль</div>}*/}
						</div>
						<button className={styles.btnSubmit} type="submit">
							Войти
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SigninForm;
