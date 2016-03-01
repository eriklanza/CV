$(document).ready(function() {
    $.getJSON('ErikLanza.json', function(data){

        var educationData = data.education,
        workExperienceData = data.work_experience,
        skillsData = data.skills,
        $educationh2 = $('#education h2'),
        $workExperienceh2 = $('#work-experience h2'),
        $skillsh2 = $('#skills h2');

        $(educationData).each(function(index, value){
            $educationh2.after('<p>' + value.school + '<br/>' + value.degree + '<br/> Completion: ' + value.percentage_completed + '%</p>');
        });

        $(workExperienceData).each(function(index, value){
            $workExperienceh2.after('<span class="headings">' + value.timespan+'    '  +  value.place  + '   ' + value.country + '</span> <br/>' + value.task + '</p>');
        });

        $(skillsData).each(function(index, value){
            $skillsh2.after('<p class="normal">' + value.tool +' <span class="rating">   ' + value.rating + '</span></p>');
        });

        $('#languages h2').after('<p>' + data.languages[0] + ' | ' + data.languages[1] + '</p>');

    });
});
