import ServiceA = require("../ServiceA/Services/AppService");
import ServiceB = require("../ServiceB/Services/AppService");

class ClientApp {

	private _serviceA: ServiceA;
	private _serviceB: ServiceB;

	constructor() {

		this._serviceA = new ServiceA();
		this._serviceB = new ServiceB();
	}

	public doStuff() {

		this._serviceA.doStuff();
		this._serviceB.doStuff();
	}
}

export = ClientApp;