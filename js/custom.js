$(document).ready(function() {
    $.getJSON('ErikLanza.json', function(data){

        var educationData = data.education,
        workExperienceData = data.work_experience,
        skillsData = data.skills,
        $educationh2 = $('#education h2'),
        $workExperienceh2 = $('#work-experience h2'),
        $skillsDiv = $('#skills div');

        $(educationData).each(function(index, value){
            $educationh2.after('<p>' + value.school + '<br/>' + value.degree + '<br/> Completion: ' + value.percentage_completed + '%</p>');
        });

        $(workExperienceData).each(function(index, value){
            $workExperienceh2.after('<span>'  +  value.place  + ' | ' + value.country + ' | ' + value.timespan + '</span> <br/>' + value.task + '</p>');
        });

        $(skillsData).each(function(index, value){
            $skillsDiv.after('<div class="row"><div class="col-md-6 normal">' + value.tool +'</div> <div class="col-md-6 rating"> ' + stars(value.rating) + '</div></div>');
        });

        $('#languages h2').after('<p>' + data.languages[0] + ' | ' + data.languages[1] + '</p>');

        function stars (num){
            var number = parseInt(num);
            var starNumber = '<i class="fa fa-star-o"></i>' .repeat(number);
            return starNumber;
        }

    });
});
