
$(document).ready(function () {
    // Personal();
    Scolar();
});

function limpiar() {
    $('#nombre').text("");
    $('#descripcion').text("");
    $('#telefono').text("");
    $('#ubicacion').text("");
    $('#telefono').append('<img src="img/phone-blue.png" alt="" width="20" '+
    'height="20" style="margin-top: 3px; float: left; margin-right: 7px; border-radius: 50%; display: block;">');
    $('#ubicacion').append('<img src="img/pin-blue.png" alt="" width="20" '+
        'height="20" style="margin-top: 3px; float: left; margin-right: 7px; border-radius: 50%; display: block;">');
    $('#imagen').attr('src', "");
    $("#sociales").text("");
}

function Scolar() {
 limpiar(); 
    var nombre = "Partida contreras Luis Emilio";
    var detaller = "Estudiante de ING. Sistemas Computacionales 5to semestre";
    var telefono = 3121243644;
    var location = "colima,col,mexico";
    var face = "";
    var twi = "";
    var what = "";
    var insta = "";
    var you = "";
    var asa = "";
    // var github = "LuisDeLaValie";
    var github ="";
    var gitlab = "";
    var img = "https://siitec2.colima.tecnm.mx/fotosuser/18460120.jpg"

    console.log("holas");
    $('#nombre').text(nombre);
    $('#descripcion').text(detaller);
    $('#telefono').append(telefono);
    $('#ubicacion').append(location);
    $('#imagen').attr('src', img);
    if (face != "") {
        $("#sociales").append('<a href="https://facebook.com/' + face + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/facebook.png" alt=""></a>');

    }
    if (twi != "") {
        $("#sociales").append('<a href="https://twitter.com/' + twi + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/twitter.png" alt=""></a>');
    }
    if (what != "") {
        $("#sociales").append('<a href="https://wa.me/' + face + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/whatsapp.png" alt=""></a>');

    }
    if (insta !="") {
        $("#sociales").append(
            '<a href="https://instagram.com/' + insta + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/instagram.png" alt=""></a>');
    }
    if (you !="") {
        $("#sociales").append(
            '<a href="https://youtube.com/' + you + 'user/" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/youtube.png" alt=""></a>');
    }
    if (asa !="") {
        $("#sociales").append(
            '<a href="https://linkedin.com/in/' + asa + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/linkedin.png" alt=""></a>');
    }
    if (github !="") {
        $("#sociales").append(
            '<a href="https://github.com/' + github + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/github.png" alt=""></a>');
    }
    if (gitlab !="") {
        $("#sociales").append(
            '<a href="https://gitlab.com/' + gitlab + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/gitlab.png" alt=""></a>');
    }
}

function Personal() {
    limpiar();
    var nombre = "Partida contreras Luis Emilio";
    var detaller = "estudiantes del tec de colima";
    var telefono = 3121243644;
    var location = "colima,col,mexico";
    var face = "emilio.partida.984";
    var twi = "EmilioPartidaC";
    var what = "";
    var insta = "";
    var you = "";
    var asa = "";
    var github = "LuisDeLaValie";
    var gitlab = "";
    var img = "https://scontent.fgdl5-3.fna.fbcdn.net/v/t1.0-1/p200x200/117601657_2696455863934276_8800794191856537080_n.jpg?_nc_cat=106&_nc_sid=7206a8&_nc_ohc=SsShehzDdC4AX9eFIJQ&_nc_ht=scontent.fgdl5-3.fna&tp=6&oh=3a8790f1dc3bab36e93052e711f8b095&oe=5F9122AA"

    console.log("holas");
    $('#nombre').text(nombre);
    $('#descripcion').text(detaller);
    $('#telefono').append(telefono);
    $('#ubicacion').append(location);
    $('#imagen').attr('src', img);
    if (face != "") {
        $("#sociales").append('<a href="https://facebook.com/' + face + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/facebook.png" alt=""></a>');

    }
    if (twi != "") {
        $("#sociales").append('<a href="https://twitter.com/' + twi + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/twitter.png" alt=""></a>');
    }
    if (what != "") {
        $("#sociales").append('<a href="https://wa.me/' + face + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/whatsapp.png" alt=""></a>');

    }
    if (insta !="") {
        $("#sociales").append(
            '<a href="https://instagram.com/' + insta + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/instagram.png" alt=""></a>');
    }
    if (you !="") {
        $("#sociales").append(
            '<a href="https://youtube.com/' + you + 'user/" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/youtube.png" alt=""></a>');
    }
    if (asa !="") {
        $("#sociales").append(
            '<a href="https://linkedin.com/in/' + asa + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/linkedin.png" alt=""></a>');
    }
    if (github !="") {
        $("#sociales").append(
            '<a href="https://github.com/' + github + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/github.png" alt=""></a>');
    }
    if (gitlab !="") {
        $("#sociales").append(
            '<a href="https://gitlab.com/' + gitlab + '" target="_blank" rel="noopener noreferrer nofollow"' +
            'style="margin-right: 8px; display: inline-block;">' +
            '<img src="img/gitlab.png" alt=""></a>');
    }
}
