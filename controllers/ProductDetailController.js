window.ProductDetailController = function($scope, $http, $routeParams, $location){
    
    var id = $routeParams.id;
    // khai báo đối tượng product
    $scope.product = {};
    // khai báo mảng product để load ra sản phẩm liên quan
    $scope.products = [];
    $apiURL = "http://localhost:3000/products";
   
    $http.get($apiURL +"/"+id+ "?_expand=category").then(
        function(response){
           if(response.statusText === "OK"){
            $scope.products = response.data;
           
            //lấy ra id của danh mục của sp
            var id1 = response.data.categoryId
            
            $apiURL1 = "http://localhost:3000/categories/"+id1;
            $http.get($apiURL1 + "?_embed=products").then(
            function(response){
                if(response.statusText === "OK"){
                $scope.category = response.data;
            }
            },
        function(errors){
            console.log(errors);
        }
        )
           }
        },
        function(errors){
            console.log(errors);
        }
    );
}