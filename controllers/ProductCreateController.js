window.ProductCreateController = function($scope, $http, $routeParams, $location ,$window){
    $scope.productName = "";
    $scope.productSize = "";
    $scope.productColor = "";
    $scope.productBrand = "";
    $scope.productPrice = "";
    $scope.productAmount = "";
    $scope.productImg = "";
    $scope.categoryId = "";
    
    //upload img
    $scope.onChangeImage = function($event){
        var file = $event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(){
            $scope.productImg = reader.result;
        }
    }
    //end
    var id = $routeParams.id;
    apiURL = "http://localhost:3000/products";
    $scope.categories = [];

    apiURL1 = "http://localhost:3000/categories"

    // load danh mục 
    $http.get(apiURL1+"?_embed=products").then(
        function(response){
            if(response.statusText == "OK"){
                $scope.categories = response.data
            }
        },
        function(errors){

        }
    )
    if(id){
        // nếu có id thì là edit, mới call api lấy chi tiết
        $http.get(apiURL+"/"+id).then(
            function(response){
                if(response.status ===200){
                    $scope.productName = response.data.name
                    $scope.productColor = response.data.color
                    $scope.productSize = response.data.size
                    $scope.productBrand = response.data.brand
                    $scope.productPrice = response.data.price
                    $scope.productAmount = response.data.amount
                    $scope.productImg = response.data.imgUrl
                    $scope.categoryId = response.data.categoryId
                }
            },
            function(errors){
    
            }
        )
    }

    $scope.onSubmit1 = function(){
        
        if(id){
            $http.put(apiURL+"/"+id,{
                name: $scope.productName,
                color: $scope.productColor,
                size: $scope.productSize,
                brand: $scope.productBrand,
                price: $scope.productPrice,
                amount: $scope.productAmount,
                imgUrl: $scope.productImg,
                categoryId: +$scope.categoryId
            }).then(
                function(response){
                    
                    $location.path("admin/products");
                },
                function(errors){
                    
                }
            )
        }
        else{
            $http.post(apiURL,{
                name: $scope.productName,
                color: $scope.productColor,
                size: $scope.productSize,
                brand: $scope.productBrand,
                price: $scope.productPrice,
                amount: $scope.productAmount,
                // img: $scope.productImg,
                imgUrl: $scope.productImg,
                categoryId: +$scope.categoryId
            }).then(function(response){
                if(response.statusText === "Created"){
                    //console.log(response);
                    
                    $location.path("admin/products");
                }else{
                    $location.path("categories/create")
                }
            },
            function(errors){
                
            });
        }
    };
    
}

