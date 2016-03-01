$(document).ready(function() {
    $.getJSON('ErikLanza.json', function(data){
        $(data.education).each(function(index, value){
            console.log(value.school);
        });
        console.log(data.education);
    });
});
