window.CategoryCreateController = function($scope, $http,$location,$routeParams){
    $scope.categoryName = "";
    var id = $routeParams.id;
    apiURL = "http://localhost:3000/categories";
    if(id){
        // nếu có id thì là edit, mới call api lấy chi tiết
        $http.get(apiURL+"/"+id).then(
            function(response){
                if(response.status ===200){
                    $scope.categoryName = response.data.name
                }
            },
            function(errors){
    
            }
        )
    }
    $scope.onSubmit = function(){
        if(id){
            $http.put(apiURL+"/"+id,{
                name: $scope.categoryName
            }).then(
                function(response){
                    $location.path("admin/categories");
                },
                function(errors){
                    
                }
            )
        }
        else{
            $http.post(apiURL,{
                name: $scope.categoryName
            }).then(function(response){
                if(response.statusText === "Created"){
                    $location.path("admin/categories");
                }else{
                    $location.path("categories/create")
                }
            },
            function(errors){
                
            });
        }
    };
}