var storeApp = angular.module('AngularStore', []);

storeApp.factory("DataService", function () {
    var myStore = new store();
    var myCart = new shoppingCart("shoppingCart");
    
    return {
        store: myStore,
        cart: myCart
    };
});