// import { checkNegativeServerAns } from '../helpers/functions/helpFunctions';
import autorizeState from '../store/accoutState/autorizeState';

interface ServerAns {
	status: number | null;
	statusText: string;
}

interface ServerError {
	isError: boolean;
	name: string;
	isAborted: boolean;
	errorText: string;
}

export interface ServerData<T> {
	ans: ServerAns;
	error: ServerError;
	data?: T;
}

type ApiCatchError = (error: Error) => ServerError;
export const apiCatchError: ApiCatchError = (error) => {
	const { name, message: errorText } = error as Error;
	const isAborted = name === 'AbortError';

	return { isError: true, name, errorText, isAborted };
};

export const getServerData = <T>(data: T): ServerData<T> => ({
	ans: { status: null, statusText: '' },
	error: { isError: false, name: '', isAborted: false, errorText: '' },
	data,
});

type ApiGet = <T>(url: string, returnType: T, controller?: AbortController) => Promise<ServerData<T>>;
export const apiGet: ApiGet = async (url, returnType, controller = new AbortController()) => {
	const { token } = autorizeState;

	const serverData = getServerData(returnType);

	const options: RequestInit = {
		method: 'GET',
		mode: 'cors',
		signal: controller.signal,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${token}`,
		},
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;

		serverData.ans = { ...ans, status, statusText };

		serverData.data = await answer.json();
	} catch (error) {
		serverData.error = apiCatchError(error as Error);
	}

	return serverData;
};

type ApiPost = <T>(url: string, parameters: object, returnType?: T) => Promise<ServerData<T | undefined>>;
export const apiPost: ApiPost = async (url = '', parameters = {}, returnType) => {
	const { token } = autorizeState;

	const serverData = getServerData(returnType);
	const options: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Token ${token}`,
		},
		body: JSON.stringify(parameters),
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;
		serverData.ans = { ...ans, status, statusText };

		serverData.data = await answer.json();
	} catch (error) {
		serverData.error = apiCatchError(error as Error);
	}

	return serverData;
};

type ApiPostUser = <T>(url: string, parameters: FormData, returnType?: T) => Promise<ServerData<T | undefined>>;
export const apiPostUser: ApiPostUser = async (url = '', parameters = new FormData(), returnType) => {
	const { token } = autorizeState;

	const serverData = getServerData(returnType);
	const options: RequestInit = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `Token ${token}`,
		},
		body: parameters,
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;
		serverData.ans = { ...ans, status, statusText };

		serverData.data = await answer.json();
	} catch (error) {
		serverData.error = apiCatchError(error as Error);
	}

	return serverData;
};

type ApiPatch = <T>(url: string, parameters: object, returnType?: T) => Promise<ServerData<T | undefined>>;
export const apiPatch: ApiPatch = async (url = '', parameters = {}, returnType) => {
	const { token } = autorizeState;

	const serverData = getServerData(returnType);

	const options: RequestInit = {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Token ${token}`,
		},
		body: JSON.stringify(parameters),
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;
		serverData.ans = { ...ans, status, statusText };

		serverData.data = await answer.json();
	} catch (error) {
		serverData.error = apiCatchError(error as Error);
	}

	return serverData;
};

type ApiPatchUser = <T>(url: string, parameters: FormData, returnType?: T) => Promise<ServerData<T | undefined>>;
export const apiPatchUser: ApiPatchUser = async (url = '', parameters = new FormData(), returnType) => {
	const { token } = autorizeState;

	const serverData = getServerData(returnType);

	const options: RequestInit = {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Token ${token}`,
		},
		body: JSON.stringify(parameters),
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;
		serverData.ans = { ...ans, status, statusText };

		serverData.data = await answer.json();
	} catch (error) {
		serverData.error = apiCatchError(error as Error);
	}

	return serverData;
};


type ApiPut = <T>(url: string, parameters: object, returnType?: T) => Promise<ServerData<T | undefined>>;
export const apiPut: ApiPut = async (url = '', parameters = {}, returnType) => {
	const { token } = autorizeState;

	const serverData = getServerData(returnType);

	const options: RequestInit = {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Token ${token}`,
		},
		body: JSON.stringify(parameters),
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;
		serverData.ans = { ...ans, status, statusText };

		serverData.data = await answer.json();
	} catch (error) {
		serverData.error = apiCatchError(error as Error);
	}

	return serverData;
};

type ApiDelete = <T>(url: string, parameters: object, returnType?: T) => Promise<ServerData<T | undefined>>;
export const apiDelete: ApiDelete = async (url = '', parameters = {}, returnType) => {
	const { token } = autorizeState;

	const serverData = getServerData(returnType);

	const options: RequestInit = {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Token ${token}`,
		},
		body: JSON.stringify(parameters),
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;
		serverData.ans = { ...ans, status, statusText };

		serverData.data = await answer.json();
	} catch (error) {
		serverData.error = apiCatchError(error as Error);
	}

	return serverData;
};
