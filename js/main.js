var request = new XMLHttpRequest()

request.open('GET','https://api.github.com/users/HennoMoolmanDreyer/repos',true)

request.onload=function(){
    var data = JSON.parse(this.response);

    var statusHTML = '';
    var link='';
    $.each(data, function(i, status) {
      statusHTML += '<tr>';
      statusHTML += '<td>' + status.id + '</td>';
      statusHTML += '<td>' + status.name + '</td>';
      link=status.html_url;
      statusHTML += '<td><a href="'+link+'">'  + link+ '</a></td>';
      statusHTML += '<td>' + status.language + '</td>';
      statusHTML += '</tr>';
    })
    $('tbody').html(statusHTML);

}

request.send();

