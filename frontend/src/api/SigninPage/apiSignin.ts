// import { checkNegativeServerAns } from '../../helpers/functions/helpFunctions';
import { ServerData, apiCatchError, getServerData } from '../api';

type ApiPostAuthorize = <T> (url: string, parameters: object, returnType: T ) => Promise<ServerData<T>>;
export const apiPostAuthorize: ApiPostAuthorize = async (url = '', parameters = {}, returnType) => {
	const serverData = getServerData(returnType);

	const options: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(parameters),
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;
		serverData.ans = { ...ans, status, statusText };

		// if (checkNegativeServerAns(status)) {
		// 	throw new Error(`Ошибка запроса ${status}: ${statusText}`);
		// }

		serverData.data = await answer.json();
		
	} catch (error) {
		serverData.error = apiCatchError(error as Error);
	}

	return serverData;
};
