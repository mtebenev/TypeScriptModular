import AppServiceA from "webclient.servicea/Services/AppServiceA"
import AppServiceB from "webclient.serviceb/Services/AppServiceB"

export default class ClientApp {


	private _serviceA: AppServiceA;
	private _serviceB: AppServiceB;

	constructor() {

		this._serviceA = new AppServiceA();
		this._serviceB = new AppServiceB();
	}

	public doStuff() {

		this._serviceA.doStuff();
		this._serviceB.doStuff();
	}
}
