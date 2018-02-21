angular.module("PathfinderHelper", [])

	.controller("RoleMe", function ($scope, $http) {

		$scope.slamHit = 0
		$scope.biteHit = 0
		$scope.rakeHit = 0
		$scope.chainsawFirstHit = 0
		$scope.chainsawSecondHit = 0
		$scope.slamDamage = 0
		$scope.biteDamage = 0
		$scope.rakeDamage = 0
		$scope.chainsawFirstDamage = 0
		$scope.chainsawSecondDamage = 0

		$scope.roleSlam = function () {
			$scope.slamHit = Math.round(Math.random() * 19) + 14
			$scope.slamDamage = Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + 12
		}
		$scope.roleBite = function () {
			$scope.biteHit = Math.round(Math.random() * 19) + 14
			$scope.biteDamage = Math.round(Math.random() * 7) + 10
		}
		$scope.roleChainsaw = function () {
			$scope.chainsawFirstHit = Math.round(Math.random() * 19) + 14
			$scope.chainsawFirstDamage = Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + 15
			$scope.chainsawSecondHit = Math.round(Math.random() * 19) + 8
			$scope.chainsawSecondDamage = Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + 12
		}
		$scope.roleRake = function () {
			$scope.rakeHit = Math.round(Math.random() * 19) + 14
			$scope.rakeDamage = Math.round(Math.random() * 5) + 10
		}

	})

