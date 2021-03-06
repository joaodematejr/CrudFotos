angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider) {

	
	$locationProvider.html5Mode(true);//Habilitar HTML5
	
	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',//Troca de Paginas
		controller: 'FotosController'
	});
	
	$routeProvider.when('/fotos/new', {//Troca de Paginas
		templateUrl: 'partials/fotos.html',
		controller: 'FotoController'
	});

		$routeProvider.when('/fotos/edit/:fotoId', {//Troca de Paginas
			templateUrl: 'partials/fotos.html',
			controller: 'FotoController'
		});

	$routeProvider.otherwise({ redirectTo: '/fotos' });//Redirecionar Para Index 

});