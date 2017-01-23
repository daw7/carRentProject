angular.module('App')
.service('OrderService', function () {
    var id;

    var addProduct = function (newObj) {
        id = newObj;
    };

    var getProducts = function () {
        return id;
    };

    return {
        addProduct: addProduct,
        getProducts: getProducts
    };

});