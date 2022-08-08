window.RegisterController = function($scope, $http, $location){
    $scope.name = "";
    $scope.email="";
    $scope.password="";

    apiUrl = "http://localhost:3000/register";

    $scope.register = function(){
        $http.post(apiUrl,{
            name: $scope.name,
            email: $scope.email,
            password: $scope.password
        }).then(
            function(response){
                if(response.status == 201){
                    $location.path("login");
                }
            },
            function(errors){
                console.log(errors);
            }
        )
    }
}