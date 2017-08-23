const app = angular.module('PetFinder', []);

app.controller('PetController', ['$http', function($http){
	const controller = this;

	this.getBreedList = function(){
		$http({
			method: 'POST',
			url: '/pets/getBreedList',
            data: {
                zip: this.zip,
								animal: this.animal,
								breed: this.breed,
								sex: this.sex
            }
		}).then(
		function(response){
			console.log(response);
			controller.pets = response.data;
		},
		function(error){
		});
	};

	this.findShelter = function(){
		$http({
			method: 'POST',
			url: '/pets/findShelter',
            data: {
                zippy: this.zippy,
            }
		}).then(
		function(response){
			console.log(response);
			controller.shelters = response.data;
		},
		function(error){
		});
	};
}]);
