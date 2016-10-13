  let app = angular.module('mailpost', ['ui.router']);

  app.config(function($stateProvider) {
    
    $stateProvider.state('boxtypes', {
      url: 'boxtypes',
      template: `<boxtypes />`,
    });
    
    $stateProvider.state('box', {
      parent: 'boxtypes',
      url: '/:boxId',
      template: `<div class="mail_list_block"><mails box-id="boxId"/></div>`,
      controller: function($stateParams, $scope) {
        $scope.boxId = $stateParams.boxId;
      }
    });
    
  });
    
  app.component('boxtypes', {
    template: `<ul>
        <li><h3 ui-sref="box({boxId:1})">Inbox</h3></li>
        <li><h3 ui-sref="box({boxId:2})">Outbox</h3></li>
        <li><h3 ui-sref="box({boxId:3})">Drafts</h3></li>
        <li><h3 ui-sref="box({boxId:4})">Spam</h3></li>
        <li><h3 ui-sref="box({boxId:5})">Trash</h3></li>
      </ul>
      <ui-view></ui-view>`
  })
  .component('mails', {
    bindings: {
      boxId: '<',
    },
    template: `<div ng-repeat="mail in $ctrl.list" mail="mail">
        <div class="one_mail">
          <label class="shorttext_label" for="mail_checking_{{mail.id}}">
            <div class="mail_short">
              <input id='mail_checking_{{mail.id}}' class='checking' type="checkbox" ng-model="show">
              <label for='mail_checking_{{mail.id}}' class="mail_shorttext"><span class="sender_span">{{mail.sender}}</span>/<span class="subject_span">{{mail.subject}}</span></label>
              <div class="mail_date">{{mail.date}}</div>
            </div>
          </label>
          <div ng-if="show" class="mail_full">
            <div class="mail_head"><span>From:</span>{{mail.sender}}</div>
            <div class="mail_head"><span>Subject:</span>{{mail.subject}}</div>
            <div class="mail_body">{{mail.text}}</div>
            <div class="mail_body">{{mail.toggle}}</div>
          </div>
        </div>
      </div>`,
    controller: function() {
      this.list = [{
        'id': 1,
        'shorttext': 'test',
        'date': '20:37:24 04/10/2016',
        'sender': 'John',
        'subject': 'First subject',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }, {
        'id': 2,
        'shorttext': 'test2',
        'date': '04:23:47 03/10/2016',
        'sender': 'Sam',
        'subject': 'Second subject',
        'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        'id': 3,
        'shorttext': 'test3',
        'date': '09:37:40 02/10/2016',
        'sender': 'Alan',
        'subject': 'Third subject',
        'text': 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }, {
        'id': 4,
        'shorttext': 'test4',
        'date': '09:37:40 02/10/2016',
        'sender': 'Danny',
        'subject': 'Fourth subject',
        'text': 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }];
    }
  });
  
  

