$(document).ready(function() {
    /*getting the information from the JSON file*/
    $.getJSON('ErikLanza.json', function(data){
        /*caching*/
        var educationData = data.education,
        workExperienceData = data.work_experience,
        skillsData = data.skills,
        $educationh2 = $('#education h2'),
        $workExperienceh2 = $('#work-experience h2'),
        $skillsDiv = $('#skills div');
        /*looping through the education object and getting the values required*/
        $(educationData).each(function(index, value){
            $educationh2.after('<p>' + value.school + '<br/>' + value.degree + '<br/> Completion: ' + value.percentage_completed + '%</p>');
        });

        $(workExperienceData).each(function(index, value){
            $workExperienceh2.after('<span class="work">'  +  value.place  + ' | ' + value.country + ' | ' + value.timespan + '</span> <br/>' + value.task + '</p>');
        });

        $(skillsData).each(function(index, value){
            $skillsDiv.after('<div class="row"><div class="col-md-6 normal extra-margin">' + value.tool + '</div> <div class="col-md-6 rating"> ' +  getStarsString(value.rating)  + '</div></div>');
        });

        $('#languages h2').after('<p>' + data.languages[0] + ' | ' + data.languages[1] + '</p>');
        /* generating the star ratings*/
        function getStarsString (n){
            var number, remainingStars, starsNumber, rating;
            number = parseInt(n);
            remainder = 5 - number;
            starsNumber = '<i class="fa fa-star"></i>'.repeat(number);
            remainingStars = '<i class="fa fa-star-o"></i>'.repeat(remainder);
            rating = starsNumber + remainingStars;
            return rating;
        }

    });
});
