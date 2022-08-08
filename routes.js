app.config(function($routeProvider){
    $routeProvider
    .when("/about",{
        templateUrl: "./pages/about.html"
    })
    .when("/home",{
        templateUrl: "./pages/trangchu.html"
    })
    .when("/login",{
      templateUrl: "./pages/login.html",
      controller: LoginController
    })
    .when("/product",{
      templateUrl: "./pages/product-list.html",
      controller: ProductController
    })
    .when("/register",{
      templateUrl: "./pages/register.html",
      controller: RegisterController
    })
    .when("/products/detail/:id",{
      templateUrl: "./pages/product-item.html",
      controller: ProductDetailController
    })
    .when("/categories/detail/:id",{
      templateUrl: "./pages/category-detail.html",
      controller: CategoryDetailController
    })
    .when("/lien-he",{
      templateUrl: "./pages/lien-he.html"
    })
    .when("/cart",{
      templateUrl: "./pages/cart.html"
    })
    .when("/admin/products",{
      templateUrl: "./pages/product.html",
      controller: ProductController
    })
    .when("/admin/categories",{
      templateUrl: "./pages/category.html",
      controller: CategoryController
    })
    .when("/admin/categories/create",{
      templateUrl: "./pages/category-create.html",
      controller: CategoryCreateController
    })
    .when("/admin/products/create",{
      templateUrl: "./pages/product-create.html",
      controller: ProductCreateController
    })
    .when("/categories/:id",{
      templateUrl: "./pages/category-detail.html",
      //controller: CategoryDetailController
    })
    .when("/admin/categories/edit/:id",{
      templateUrl: "./pages/category-create.html",
      controller: CategoryCreateController
    })
    .when("/admin/products/edit/:id",{
      templateUrl: "./pages/product-create.html",
      controller: ProductCreateController
    })
    .when("/admin/categories/delete/:id",{
      templateUrl: "./pages/category.html",
      controller: CategoryDeleteController
    })
    .when("/admin/products/delete/:id",{
      templateUrl: "./pages/product.html",
      controller: ProductDeleteController
    })
    .otherwise({
        templateUrl: "./pages/404.html"
    })
})