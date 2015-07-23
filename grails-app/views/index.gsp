<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Welcome to Grails</title>
	</head>
	<body>
		<div ng-app="myPawnshopApp">
			<div id="multi-select" ng-controller="forTestCtrl">
				<div id="multi-select-item-content" class="">
					<span ng-repeat="item in selectedList" id="content-{{item.id}}">
						{{item.value}}
						<span class="glyphicon glyphicon-remove" ng-click="removeSelected(item)"></span>
					</span>
				</div>
				<div id="multi-select-drop"></div>
				<select name="multi-select" ng-model="selectedItem" ng-change="addToSelect(selectedItem)" ng-options="item.value for item in item_list">
				</select>
			</div>
		</div>
	</body>
</html>
