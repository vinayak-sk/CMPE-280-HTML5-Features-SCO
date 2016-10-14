      var score = "";
      window.onload = function () {
        var url = document.location.href,
            params = url.split('?')[1].split('&'),
            data = {}, tmp;
        for (var i = 0, l = params.length; i < l; i++) {
             tmp = params[i].split('=');
             data[tmp[0]] = tmp[1];
        }

        score = data.points;
        tmp = score.split('');

        for (var i = 0, l = score.length; i < l; i++) {
             data[i] = tmp[i];
        }

        var quantQuestionsAnswered = 2;
        var quantQuestionsCorrect = parseInt(data[0]) + parseInt(data[1]) ;
        $("#quantScore").html(quantQuestionsCorrect);
        $("#quantScore1").html(quantQuestionsCorrect * 50);

        var readingQuestionsAnswered = 2;
        var readingQuestionsCorrect = parseInt(data[2])  + parseInt(data[3]) ;
        $("#readingScore").html(readingQuestionsCorrect);
        $("#readingScore1").html(readingQuestionsCorrect * 50);

        var avQuestionsAnswered = 1;
        var avQuestionsCorrect = parseInt(data[4]) ;
        $("#avScore").html(avQuestionsCorrect);
        $("#avScore1").html(avQuestionsCorrect * 50);
      }