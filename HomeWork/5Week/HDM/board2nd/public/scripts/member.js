
function bindLogin(){
	$('#loginForm').submit(function(event){
		event.preventDefault();
		var result = loginFormEmptyCheck(this);
		if ( result ){
			var URL = this.action;
			var param = {id:this.id.value, password:this.password.value};
			$.post(URL, param, function(data){
				$('#aSide').html(data);				
			});
		}
	});
}

function bindFindAccount(){
	$('#findId').click(function(event){
		event.preventDefault();
		var URL = $(this).attr('href');
		$.get(URL, function(data){
			$('#content').html(data);
			$('#findIdForm').submit(function(event){
				event.preventDefault();
				var postURL = this.action;
				var param = {socialNumber : this.socialNumber.value};
				$.post(postURL, param, function(data){
					$('#content').html(data);
				});
			});
		});
		
	});
	
	$('#findPassword').click(function(event){
		event.preventDefault();
		var URL = $(this).attr('href');
		$.get(URL, function(data){
			$('#content').html(data);
			$('#findPasswordForm').submit(function(event){
				event.preventDefault();
				var postURL = this.action;
				var param = {id : this.id.value, socialNumber : this.socialNumber.value};
				$.post(postURL, param, function(data){
					$('#content').html(data);
				});
			});
		});
		
	});
}

var joinErrorCount = 0;

function bindJoin(){
	$('#join').click(function(event){
		event.preventDefault();
		var URL = $(this).attr('href');
		$.get(URL, function(data){
			$('#content').html(data);
			appendIdDuplicateCheckBtn();
			bindJoinValidator();
			$('#joinForm').submit(function(event){
				event.preventDefault();
				if ( !(joinErrorCount > 0) && joinFormEmptyCheck() ){
					var postURL = this.action;
					var param = {	id : this.id.value, 
									password : this.password.value,
									confirmPassword : this.confirmPassword.value,
									socialNumber : this.socialNumber.value,
									name : this.name.value,
									telNumber : this.telNumber.value,
									emailId : this.emailId.value,
									emailDomainSelect : this.emailDomainSelect.value
								};
					$.post(postURL, param, function(data){
						$('#content').html(data);
					});
				}
			});
		});
	});
}

function bindUpdateMember(){
	$('#updateMember').click(function(event){
		event.preventDefault();
		var updateFormURL = $(this).attr('href');
		$('#content').load(updateFormURL);
	});
}

function bindUpdateMemberLink(){
	$('#updateMemberLink').click(function(event){
		event.preventDefault();
		var updateFormURL = $(this).attr('href');
		$('#content').load(updateFormURL);
	});
}

