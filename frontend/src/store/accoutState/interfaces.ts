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

export type {
	UserRoles as AutorizeStateUserRoles,
};

