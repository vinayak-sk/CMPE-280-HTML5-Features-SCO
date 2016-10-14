    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

  var score = "";
  	$( "#goTab2" ).click(function(e) {
  		var a = $('input[name="answer1"]:checked').val();
  		score = score.concat(a);
  		e.preventDefault();
    	$('#mytabs a[href="#question2"]').tab('show');
	});
	$( "#goTab3" ).click(function(e) {
		var b = $('input[name="answer2"]:checked').val();
  		score = score.concat(b);
  		e.preventDefault();
    	$('#mytabs a[href="#question3"]').tab('show');
	});
	$( "#goTab4" ).click(function(e) {
		var c = $('input[name="answer31"]:checked').val();
  		score = score.concat(c);
  		var d = $('input[name="answer32"]:checked').val();
  		score = score.concat(d);
  		e.preventDefault();
    	$('#mytabs a[href="#question4"]').tab('show');
	});

  $( "#clear1" ).click(function(e) {
    $('input[name=answer1]').attr('checked',false);
  });
  $( "#clear2" ).click(function(e) {
    $('input[name=answer2]').attr('checked',false);
  });
  $( "#clear3" ).click(function(e) {
    $('input[name=answer31]').attr('checked',false);
    $('input[name=answer32]').attr('checked',false);
  });
  $( "#clear4" ).click(function(e) {
    $('input[name=answer4]').attr('checked',false);
  });

	function goToSurvey() {
		var e = $('input[name="answer4"]:checked').val();
  		score = score.concat(e);
        url = 'SurveyPage.html?points=' + encodeURIComponent(score);
    	document.location.href = url;
	}

	$( "#mark1" ).click(function(e) {
  		$("#markOption1").css('visibility','visible');
	});
	$( "#mark2" ).click(function(e) {
  		$("#markOption2").css('visibility','visible');
	});