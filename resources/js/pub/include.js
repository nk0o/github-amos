var include = {
  meta: function () {
    document.write('<meta charset="UTF-8">');
    document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  },
  scripts: function () {
    document.write('<script src="../resources/js/libs/jquery- v1.11.1.min.js"></script>');
    document.write('<script src="../resources/js/libs/jquery-ui.min.js"></script>');
    document.write('<script src="../resources/js/libs/swiper.min.js"></script>');
    document.write('<script src="../resources/js/pub/common.js"></script>');
  },
  style: function () {
    document.write('<link rel="stylesheet" href="../resources/css/jquery-ui.min.css"></link>');
    document.write('<link rel="stylesheet" href="../resources/css/swiper-bundle.min.css"></link>');
    document.write('<link rel="stylesheet" href="../resources/css/style.css"></link>');
  },
  header: function () {
    document.write(``)
  },
}