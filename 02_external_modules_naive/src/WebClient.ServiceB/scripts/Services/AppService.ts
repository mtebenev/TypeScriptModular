import Model1 from "../Models/Model1"
import Model2 from "../Models/Model2"

class AppService {

	private _model1: Model1;
	private _model2: Model2;

	constructor() {

		this._model1 = new Model1();
		this._model2 = new Model2();
	}

	public doStuff() {
		console.log("ServiceB.AppService doing stuff...");
	}
}

export = AppService;
