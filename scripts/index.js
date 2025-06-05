const currentYear = new Date().getFullYear();
$('.current-year').text(currentYear);
//8 июня 1995 года — дата первого выпуска PHP.
const firstPHPReleaseDate = new Date("1995-06-08");

const floorDivisionMultiple = 1_000_000_000;

setInterval(updateYearsFromFirstPHPReleaseDate, 20);
function updateYearsFromFirstPHPReleaseDate() {
    var now = new Date();
    var counter = (now - firstPHPReleaseDate) / (1000 * 60 * 60 * 24 * 365.24);

    $('.year-timer').text(Math.floor(counter * floorDivisionMultiple)/ floorDivisionMultiple);
}