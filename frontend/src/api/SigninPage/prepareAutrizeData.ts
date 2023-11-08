import { AutorizeStateUserRoles as UserRoles } from '../../store/accoutState/interfaces';

export interface ServerAns {
	is_staff: boolean;
	group: {id: string, name: string};
	grouprole: 'groupadmin' | 'groupuser';
	token: string;
}

interface ValidateAns {
	isAuthorize: boolean;
	token: string;
	role: keyof UserRoles;
	group: {id: string, name: string};
}

const validateToken = (token: string): boolean => !!token.length;

export const prepareAutrizeData = (data: ServerAns): ValidateAns => {
	const { is_staff, group, grouprole, token } = data;
	
	const isAuthorize = validateToken(token);
	let role: keyof UserRoles;

	if(!is_staff){
		grouprole === 'groupadmin' 
			? role = 'groupadmin' 
			: role = 'spotadmin';
	} else {
		role = 'staff';
	}

	return { isAuthorize, token: isAuthorize ? token : '', role, group };
};
