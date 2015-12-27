namespace ClientApp.ServiceA.Services {
	
	export class AppService {
		
		private _model1: Models.Model1;
		private _model2: Models.Model2;

		constructor() {

			this._model1 = new Models.Model1();
			this._model2 = new Models.Model2();
		}

		public doStuff() {
			console.log("ServiceA.AppService doing stuff...");
		}

	}
}