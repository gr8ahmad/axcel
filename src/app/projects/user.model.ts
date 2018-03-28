export class User {
	id: number;
	email: string;
	password: {
		pwd: string;
		confirmPwd: string;
	};
	gender: string;
	terms: boolean;
	constructor(value: Object = {}) {
		Object.assign(this, value);
	}
}