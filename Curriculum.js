$(document).ready(function() {

    $(".container").click(function () {
        $(this).toggleClass("rotated");
    });

    $('.card').on('click', function(e) {
        e.stopPropagation();
        if ($("#" + e.currentTarget.id).hasClass('card--flipped')) {
            $("#" + e.currentTarget.id).addClass('card--unflip');
            setTimeout(function() {
                $("#" + e.currentTarget.id).removeClass('card--flipped card--unflip');
            }, 500);
        } else {
            $("#" + e.currentTarget.id).addClass('card--flipped');
        }
    });

});

function DownloadCurriculumPDF(){
    var pdfPath = "Curriculum%20Will%202025.pdf";
    var win = window.open(pdfPath, "_blank");
    if (win) {
        setTimeout(() => {
            win.print();
        }, 1000);
    } else {
        alert("Por favor, permita pop-ups para imprimir o PDF.");
    }
}
  

