import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import {
	AuthData,
	AutorizeStateUserRoles as UserRoles,
} from './interfaces';

const getIsAuthorize = (): boolean => {
	const authData = localStorage.getItem('isAuthorize');

	if (authData !== null) {
		const parsedAuthData: AuthData = JSON.parse(authData);
		return parsedAuthData.isAuthorize;
	}
	return false;
};

class AutorizeState {
	isAuthorize = false;
	token = '';
	userRole: keyof UserRoles = 'spotoperator';

	constructor() {
		makeAutoObservable(this);

		makePersistable(this, {
			name: 'AuthStore',
			properties: ['isAuthorize', 'token', 'userRole'],
			storage: window.localStorage,
		});

		this.isAuthorize = getIsAuthorize();
	}

	setIsAutorize = (isAuthorize = false) => {
		this.isAuthorize = isAuthorize;
	};
}

const autorizeState = new AutorizeState();
export default autorizeState;
