angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	$http.get('/v1/fotos')
	.success(function(retorno) {
		console.log(retorno);
		$scope.fotos = retorno; // não precisa fazer retorno.data
	})
	.error(function(erro) {
		console.log(erro);
	});
	$scope.remover = function(foto){//Remover a Foto
		$http.delete('v1/fotos/' + foto._id)
		.success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso !';

		})
		.erro(function(erro){
			console.log(erro);
			$scope.mensagem ='Não foi possivel Remover a foto' + foto.tiulo;
		})
	};

});