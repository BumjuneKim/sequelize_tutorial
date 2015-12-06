ngModule.controller('pubCtrl', ['$scope', 'pubService', 'alertService',
  function($scope, pubService, alertService) {
    var Data = $scope.data = {}
      , Func = $scope.func = {};

    $scope.init = function() {
      pubService.getPublishers().then(function(response) {
        console.log(response.data);
        Data.publisherList = response.data;
      });
    };

    $scope.init();

    function addNewPublisher() {
      if (!Data.newPubName)
        return alertService.addMessage({type: 'danger', content: '출판사 이름을 꼭 입력해주세요'});

      if (!window.confirm('새 출판사를 등록하시겠습니까?')) return;

      pubService.addNewPublisher({name: Data.newPubName}).then(function(response) {
        Data.publisherList.push(response.data);
      });
    }

    function updateName(p) {
      if (!p.newName)
        return alertService.addMessage({type: 'danger', content: '출판사 이름을 꼭 입력해주세요'});

      if (!window.confirm('출판사 이름을 변경하시겠습니까?')) return;

      pubService.updatePublisher({pub_id: p.pub_id, name: p.newName}).then(function(response) {
        p.name = response.data.name;
        p.editable = false;
      });
    }

    function deletePublisher(p) {
      if (!window.confirm(p.name + ' 출판사를 삭제하시겠습니까?')) return;

      pubService.deletePublisher({pub_id: p.pub_id}).then(function() {
        Data.publisherList = _.reject(Data.publisherList, function(p2) {
          return p2.pub_id === p.pub_id;
        });
      });
    }

    Func.addNewPublisher = addNewPublisher;
    Func.updateName = updateName;
    Func.deletePublisher = deletePublisher;
  }]);