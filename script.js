// Define the AngularJS module named "myApp"
var app = angular.module("myApp", []);

// Define the controller named "MainController"
app.controller("MainController", function ($scope, $http) {
  // Initialize variables to store thumbnail data and full-size image
  $scope.thumbnails = [];
  $scope.fullSizeImage = null;

  // Function to fetch thumbnails from the Picsum Photos API
  $http.get("https://picsum.photos/v2/list?limit=20")
    .then(function (response) {
      // Process the received thumbnail data
      response.data.forEach(function (item) {
        item.thumbnail_url = `https://picsum.photos/id/${item.id}/50/50`;
      });
      // Assign the processed thumbnail data to $scope.thumbnails
      $scope.thumbnails = response.data;
    })
    .catch(function (error) {
      // Handle errors if fetching thumbnails fails
      console.error("Error fetching thumbnails:", error);
    });

  // Function to display full-size image when a thumbnail is clicked
  $scope.showFullSize = function (image) {
    $scope.fullSizeImage = {
      id: image.id,
      url: `https://picsum.photos/id/${image.id}/350/350`,
    };
  };
});
