app.directive('shop',function(){
	return{
	    restrict:'E',
	    templateUrl:'template/shop.html',
	    replace:true
	}
});

app.directive('login',function(){
	return{
	     restrict:'E',
	     templateUrl:'template/register.html',
	     replace:true
	}
})