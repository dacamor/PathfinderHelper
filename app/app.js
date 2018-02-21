angular.module("PathfinderHelper", [])

	.controller("RollMe", function ($scope, $http) {

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
		$scope.slamTotal = 0
		$scope.biteTotal = 0
		$scope.rakeTotal = 0
		$scope.chainsawTotal = 0

		$scope.rollSlam = function () {
			$scope.slamHit = Math.round(Math.random() * 19) + 14
			$scope.slamDamage = Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + 12
		}
		$scope.rollBite = function () {
			$scope.biteHit = Math.round(Math.random() * 19) + 14
			$scope.biteDamage = Math.round(Math.random() * 7) + 10
		}
		$scope.rollChainsaw = function () {
			$scope.chainsawFirstHit = Math.round(Math.random() * 19) + 14
			$scope.chainsawFirstDamage = Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + 15
			$scope.chainsawSecondHit = Math.round(Math.random() * 19) + 8
			$scope.chainsawSecondDamage = Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + Math.round(Math.random() * 5) + 12
		}
		$scope.rollRake = function () {
			$scope.rakeHit = Math.round(Math.random() * 19) + 14
			$scope.rakeDamage = Math.round(Math.random() * 5) + 10
		}

		$scope.AddSlamTotal = function () {
			$scope.slamTotal += $scope.slamDamage
		}
		$scope.ClearSlamTotal = function () {
			$scope.slamTotal = 0
		}

		$scope.AddBiteTotal = function () {
			$scope.biteTotal += $scope.biteDamage
		}
		$scope.ClearBiteTotal = function () {
			$scope.biteTotal = 0
		}

		$scope.AddRakeTotal = function () {
			$scope.rakeTotal += $scope.rakeDamage
		}
		$scope.ClearRakeTotal = function () {
			$scope.rakeTotal = 0
		}

		$scope.AddChainsawFTotal = function () {
			$scope.chainsawTotal += $scope.chainsawFirstDamage
		}
		$scope.AddChainsawSTotal = function () {
			$scope.chainsawTotal += $scope.chainsawSecondDamage
		}
		$scope.ClearChainsawTotal = function () {
			$scope.chainsawTotal = 0
		}

	})

