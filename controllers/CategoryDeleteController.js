window.CategoryDeleteController = function($scope, $http, $routeParams, $location){
    var id = $routeParams.id;
    apiURL = "http://localhost:3000/categories"

    $http.delete(apiURL+"/"+id).then(
        function(response){
            if(response.statusText === "OK"){
                $location.path("admin/categories");
                
            }
        },
        function(errors){

        }
    )
}