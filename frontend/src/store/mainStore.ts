import { makeAutoObservable } from 'mobx';

class MainStore {
	pageIndex = 0;

	constructor() {
		makeAutoObservable(this);
	}

	setNewPageIndex = (newPageIndex: number) => {
		this.pageIndex = newPageIndex;
	};
}

const mainStore = new MainStore();
export default mainStore;
