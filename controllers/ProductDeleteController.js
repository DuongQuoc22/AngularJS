window.ProductDeleteController = function($scope, $http, $routeParams, $location){
    var id = $routeParams.id;
    apiURL = "http://localhost:3000/products"
    $http.delete(apiURL+"/"+id).then(
        function(response){
            if(response.statusText == "OK"){

                $location.path("admin/products");
                alert("Đã Xóa")
                return;
            }
        },
        function(errors){

        }
    )
}