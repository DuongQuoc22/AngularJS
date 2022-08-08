window.CategoryDetailController = function($scope, $http, $routeParams){
    var id = $routeParams.id;
    $scope.category = {};
    $apiURL = "http://localhost:3000/categories/"+id;
    $http.get($apiURL + "?_embed=products").then(
        function(response){
           if(response.statusText === "OK"){
            $scope.category = response.data;
           }
        },
        function(errors){
            console.log(errors);
        }
    )
    // load danh mục sản phẩm
    $scope.categories = [];

    apiURL1 = "http://localhost:3000/categories"

    $http.get(apiURL1+"?_embed=products").then(
        function(response){
            if(response.statusText == "OK"){
                $scope.categories = response.data
            }
        },
        function(errors){

        }
    )
}