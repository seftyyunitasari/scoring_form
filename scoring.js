$(document).ready(function() {

  function score_indicate() {
    let subject_points = [
      Number($('#nationalLanguage').val()),
      Number($('#english').val()),
      Number($('#math').val()),
      Number($('#science').val()),
      Number($('#social').val()),
    ];
    let sum = 0;
    for (i = 0; i < subject_points.length; i++) {
      sum = sum + subject_points[i];
    };
    let avg = sum / subject_points.length
    $('#sum').text(sum);
    $('#average').text(avg);
    return subject_points;
  };

  function getAchievement() {
    let average = Number($('#average').text());
    if (average >= 80) {
      return "A";
    } else if (average >= 60) {
      return "B";
    } else if (average >= 40) {
      return "C";
    } else {
      return "D";
    };
  };

  function failPass() {
    let subject_points = score_indicate();
    let judge = "Pass";
    for (let i = 0; i < subject_points.length; i++) {
      if (subject_points[0] < 60) {
        judge = "Fail";
        break;
      }
    }
    return judge;
    };

  $('#nationalLanguage, #english, #math, #science, #social').change(function () {
    score_indicate();
  });

  $('#btnEval').click(function() {
    $('#eval').text(getAchievement());
  });

  $('#btnJudge').click(function() {
    $('#judge').text(failPass());
  });

  $('#btnDeclare').click(function() {
    $('#declare').text('Your grade is ' + getAchievement() + '. ' + 'You ' + failPass() + '!');
  });

});
