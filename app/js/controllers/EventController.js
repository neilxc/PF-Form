'use strict';

eventsApp.controller('EventController',
    function($scope){
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google HQ',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: 'img/angularlogo.png',
            sessions:[
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives',
                    upVoteCount: 0
                },
                {
                    name: 'Scope for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'In this session we will take a look at scopes and scopey things',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hrs',
                    level: 'Advanced',
                    abstract: 'Controllers are the beginning of everything and lets get to them',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

    }


);
