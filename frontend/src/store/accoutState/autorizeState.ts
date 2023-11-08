import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import {
	AuthData,
	AutorizeStateUserRoles as UserRoles,
	UserDataFix,
} from './interfaces';
// import { PersonInfoPostData as PostData } from '../../components/Account/ContentModal/ContentForManager/PersonInfo/PersonInfo.interface';
// import { AccessPlace, AccountPlace } from '../placeState/interfaces';
// import { TechUser, UserAccess } from '../../../api/AccountPage/prepareAccountData.interface';
// import connectState from '../connectState/connectState';


const getIsAuthorize = (): boolean => {
	const authData = localStorage.getItem('isAuthorize');

	if (authData !== null) {
		const parsedAuthData: AuthData = JSON.parse(authData);
		return parsedAuthData.isAuthorize;
	}
	return false;
};

class AutorizeState {
	demoUser = {
		email: 'testLogIn@testLogIn.com',
		password: 'testPassword',
	};

	// emptyData: PostData = {
	// 	id: -1,
	// 	email: '',
	// 	password : '',
	// 	phone: '',
	// 	first_name: '',
	// 	last_name:  '',
	// 	grouprole: '',
	// 	group: ''
	// };
	//
	// postData: PostData = this.emptyData;

	authData = localStorage.getItem('AuthStore');

	user: UserDataFix = {
		id: 0,

		firstName: '',
		lastName: '',
		email: '',
		grouprole: 'groupuser',
		phone: '',
		image: '',
		role: 'spotoperator',
		ruRole: 'оператор',
		ruGroupRole: ''
	};

	
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

	setToken = (token: string) => {
		this.token = token;
	};

	setUserRole = (role: keyof UserRoles) => {
		this.userRole = role;
	};

	checkAuth = (errorText: number | null) => {
		const isAuthError = errorText === 401;
		this.isAuthorize = !isAuthError;
	};
}

const autorizeState = new AutorizeState();
export default autorizeState;
