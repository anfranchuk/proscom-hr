export interface AuthData {
	isAuthorize: boolean;
}

interface UserRoles {
	staff: string;
	groupadmin: string;
	camerauser: string;
	spotadmin: string;
	spotoperator: string;
}

interface KeysUserRoles {
	staff: string;
	spotadmin: string;
	spotoperator: string;
}

export interface UserRolesGroup {
	groupadmin: string;
	groupuser: string;
}

export interface UserRolesGroupCreate extends UserRolesGroup{
	camerauser: string;
}

export interface User {
	id: number;
	email: string;
	first_name: string;
	group_name?: string;
	grouprole: keyof UserRolesGroupCreate;
	image: string | undefined;
	is_staff: boolean;
	last_name: string;
	phone: string;
}

export interface UserData {
	id: number;
	email: string;
	firstName: string;
	grouprole: keyof UserRolesGroupCreate;
	image: string | undefined;
	groupName?: string;
	isStaff: boolean;
	lastName: string;
	phone: string;
	role: keyof UserRoles;
	ruRole: string;
}

export interface UserDataFix {
	id: number;
	email: string;
	firstName: string;
	grouprole: keyof UserRolesGroupCreate;
	image: string | undefined;
	groupName?: string;
	lastName: string;
	phone: string;
	role: keyof KeysUserRoles;
	ruRole: string;
	ruGroupRole: string;
}

export type {
	UserRoles as AutorizeStateUserRoles,
};

