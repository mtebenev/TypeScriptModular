/// <reference path="../../WebApp/wwwroot/app/servicea.d.ts"/>
/// <reference path="../../WebApp/wwwroot/app/serviceb.d.ts"/>

namespace ClientApp {
	
	export class Application {

		private _serviceA: ServiceA.Services.AppService;
		private _serviceB: ServiceB.Services.AppService;

		constructor() {

			this._serviceA = new ServiceA.Services.AppService();
			this._serviceB = new ServiceB.Services.AppService();
		}

		public start() {
			
			this._serviceA.doStuff();
			this._serviceB.doStuff();
		}
		
	}
}