$(document).ready(function() {
    $.getJSON('ErikLanza.json', function(data){

        $(data.education).each(function(index, value){
            $('#education h2').after('<p>' + value.school +'<br>' + value.degree +'<br> Completion: '+value.percentage_completed+ '%</p>');
        });

        $(data.work_experience).each(function(index, value){
            $('#work_experience h2').after('<p class="headings">' + value.timespan+'    ' + value.place +'   '+ value.country+'</p> <p>'+value.task+ '</p>');
        });

        $(data.skills).each(function(index, value){
            $('#skills h2').after('<p>' + value.tool+' <span class="headings">   ' + value.rating + '</span></p>');
        });

        $('#languages h2').after('<p>' + data.languages+'</p>');



    });
});
