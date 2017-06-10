var app = angular.module('my-app',[])
			.controller('MainController',['$http', function( $http){

				var ctrl = this;
				ctrl.resData = {}
				ctrl.getData = function(){
				$http.get('http://localhost:3000/get-movies',{params:{'query':ctrl.queryText}}).then(function(res){

					ctrl.resData = res.data;

				},function(err){console.error(err)})
			}
			}])