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
  floatingSide: function () {
    document.write(`
    
    `);
  },
  footer: function () {
    document.write(`
      <footer>
        <div class="inner">
          <ul class="accord_list">
            <li class="accord_head">
              <div class="accord_tit">
                <div class="logo"><img src="../resources/images/logo.svg" alt="아모레프로페셔널"></div>
              </div>
              <div class="accord_cont">
                <div class="f_cs">
                  <p>CUSTOMER CENTER</p>
                  <p class="tel">080-023-0707</p>
                  <ul>
                    <li><span>평일</span> 09:00 ~ 18:00</li>
                    <li><span>점심</span> 12:00 ~ 13:00</li>
                    <li><span>휴무</span> 주말 및 공휴일</li>
                  </ul>
                </div>
                <div class="f_company">
                  ㈜ 아모스프로페셔널 / 대표 : 권오창<br>
                  04386 서울특별시 용산구 한강대로 100 아모레퍼시픽<br>
                  사업자 등록번호 : 135-81-11122
                </div>                  
              </div>
            </li>
          </ul>
          <ul class="f_info">
            <li><a href="#">회사 소개</a></li>
            <li><a href="#">서비스 이용약관</a></li>
            <li><a href="#">개인정보 처리방침</a></li>
          </ul>
          <p class="f_copyright">Copyright &copy; <span>아모스프로페셔널.</span> All rights reserved.</p>
        </div>
      </footer>
    `);
  },
}