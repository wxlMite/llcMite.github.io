//购物车控制器
app.controller('shop_sum',function($scope){
	$scope.flower={
         shopPrice:10,
         shopNum:1,
         shopFee:15
	}; 

	$scope.sum=function(){       
		return $scope.flower.shopPrice*$scope.flower.shopNum+$scope.flower.shopFee;
	};

	$scope.$watch('sum()',function(newval,oldval){
        
		if(newval>50){
			$scope.flower.shopFee=0;
		}else{
			$scope.flower.shopFee=15;
		}
		
	});
	
});

//注册控制器
app.controller('register',function($scope){
	
})
