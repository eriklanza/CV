$(document).ready(function() {
    $.getJSON('ErikLanza.json', function(data){

        var eduData=data.education, workData = data.work_experience, skillsData=data.skills;
        var $educationh2 = $('#education h2'), $work_experienceh2 = $('#work_experience h2'), $skillsh2 = $('#skills h2') ;

        $(eduData).each(function(index, value){
            $educationh2.after('<p>' + value.school + '<br/>' + value.degree + '<br/> Completion: ' + value.percentage_completed + '%</p>');
        });

        $(workData).each(function(index, value){
            $work_experienceh2.after('<span class="headings">' + value.timespan+'    '  +  value.place  + '   ' + value.country + '</span> <br/>' + value.task + '</p>');
        });

        $(skillsData).each(function(index, value){
            $skillsh2.after('<p>' + value.tool +' <span class="headings">   ' + value.rating + '</span></p>');
        });

        $('#languages h2').after('<p>' + data.languages + '</p>');

    });
});
