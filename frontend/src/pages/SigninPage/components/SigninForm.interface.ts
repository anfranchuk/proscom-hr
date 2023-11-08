export interface FormValues {
	email: string;
	password: string;
}

export const initialValues: FormValues = {
	email: '',
	password: '',
};

export interface FormErrors {
    password?: string;
}