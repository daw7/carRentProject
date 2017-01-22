
//angular.module('App', ['ngMaterial'])
//.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
//    var imagePath = 'img/list/60.jpeg';

//    $scope.cars = "";
//    $http.get("/Cars/getCarData")
//            .success(function (result) {
//                $scope.cars = result;
//            })
//            .error(function (result) {
//                console.log("Http error");
//            });
//}]);

//angular.module('App')
//.controller('Car', ['$scope', '$http', function ($scope, $http) {
//    $scope.msg = "";
//        $http.get("/Cars/getCarData")
//        .success(function (result) {
//            $scope.cars = result;
//        })
//        .error(function (result) {
//            console.log("Http error");
//        });

//}]);

//angular.module('App', ['ngMaterial', 'ngMessages'])
//          .controller('DemoCtrl', function ($scope) {
//              $scope.user = {
//                  title: 'Developer',
//                  email: 'ipsum@lorem.com',
//                  firstName: '',
//                  lastName: '',
//                  company: 'Google',
//                  address: '1600 Amphitheatre Pkwy',
//                  city: 'Mountain View',
//                  state: 'CA',
//                  biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
//                  postalCode: '94043'
//              };

//              $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
//              'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
//              'WY').split(' ').map(function (state) {
//                  return { abbrev: state };
//              });
//          })
//          .config(function ($mdThemingProvider) {

//               Configure a dark theme with primary foreground yellow

//              $mdThemingProvider.theme('docs-dark', 'default')
//                .primaryPalette('yellow')
//                .dark();

//          });