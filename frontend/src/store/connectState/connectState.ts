import { makeAutoObservable } from 'mobx';

class ConnectState {
	userLink = '';
	postUserLink = '';

	postAutrizeLink = '';
	postLogoutLink = '';

	getPlacesLink = '';
	getDevicesLink = '';
	postPlaceLink = '';
	
	postUserAction = '';

	getUsersActionsLink = '';

	getEventsLink = '';
	
	wsLink = '';
	wsLinkNotifications = '';
	
	getCameraInfo = '';
	getPlaceInfo = '';

	getGroupLink = '';

	linkPolygons = '';

	allUserAccess = '';
	postUserAccess = '';
	deleteUserAccess = '';
	changeUserAccess = '';
	changeUserLink = '';
	deleteUser = '';

	getNotificationsLink = '';
	readNotificationLink = '';
	readAllNotificationsLink = '';

	userCameras = '';
	getAllUsersLink = '';
	getTechUsersLink = '';
	constructor() {
		makeAutoObservable(this);
	}

	setUserLink = (link: string) => {
		this.userLink = link;
	};

	setReadNotification = (link: string) => {
		this.readNotificationLink = link;
	};

	setGetAllUsersLink = (link: string) => {
		this.getAllUsersLink = link;
	};

	setUserCameras = (link: string) => {
		this.userCameras = link;
	};

	setGetCameraInfo = (link: string) => {
		this.getCameraInfo = link;
	};

	setGetPlaceInfo = (link: string) => {
		this.getPlaceInfo = link;
	};

	setPostAutorizeLink = (link: string) => {
		this.postAutrizeLink = link;
	};
	setPostLogoutLink = (link: string) => {
		this.postLogoutLink = link;
	};

	setPostUserAccess = (link: string) => {
		this.postUserAccess = link;
	};
	setDeleteUserAccess = (link: string) => {
		this.deleteUserAccess = link;
	};

	setChangeUserAccess = (link: string) => {
		this.changeUserAccess = link;
	};
	setGetAllUserAccess = (link: string) => {
		this.allUserAccess = link;
	};
	setChangeUser = (link: string) => {
		this.changeUserLink = link;
	};

	setDeleteUser = (link: string) => {
		this.deleteUser = link;
	};

	setGetPlacesLink = (link: string) => {
		this.getPlacesLink = link;
	};
	setPostUserLink = (link: string) => {
		this.postUserLink = link;
	};

	setGetUsersActionsLink = (link: string) => {
		this.getUsersActionsLink = link;
	};

	setPostUserAction = (link: string) => {
		this.postUserAction = link;
	};

	setPostPlace = (link: string) => {
		this.postPlaceLink = link;
	};

	setGetDevicesLink = (link: string) => {
		this.getDevicesLink = link;
	};

	setGetEventsLink = (link: string) => {
		this.getEventsLink = link;
	};

	setGetGroup = (link: string) => {
		this.getGroupLink = link;
	};

	setWSLink = (ws: string) => {
		this.wsLink = ws;
	};

	setWSLinkNotifications =( ws: string) => {
		this.wsLinkNotifications = ws;
	};

	setLinkPolygons = (link: string) => {
		this.linkPolygons = link;
	};

	setNotificationsLink = (link: string) => {
		this.getNotificationsLink = link;
	};

	setReadAllNotificationsLink = (link: string) => {
		this.readAllNotificationsLink = link;
	};

	setGetTechUsers = (link: string) => {
		this.getTechUsersLink = link;
	};

}

const connectState = new ConnectState();
export default connectState;
