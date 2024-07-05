var include = {
  meta: function () {
    document.write('<meta charset="UTF-8">');
    document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  },
  scripts: function () {
    document.write('<script src="../resources/js/libs/jquery- v1.11.1.min.js"></script>');
    document.write('<script src="../resources/js/libs/jquery-ui.min.js"></script>');
    document.write('<script src="../resources/js/libs/jquery.slimscroll.min.js"></script>');
    document.write('<script src="../resources/js/pub/common.js"></script>');
  },
  style: function () {
    document.write('<link rel="stylesheet" href="../resources/css/style.css"></link>');
  },
  header: function () {
    document.write(`
    <header class="header">
      <div class="inner">
        <div class="logo"><img src="../resources/images/logo.svg" alt="아모레퍼시픽"></div>
        <nav class="gnb">
          <ul class="gnb_dep1">
            <li><a href="#">외부인력 투입철수 프로세스</a>
              <ul class="gnb_dep2">
                <li class="on"><a href="#">프로젝트 등록 관리</a></li>
                <li><a href="#">IT 서비스센터 업무처리</a></li>
              </ul>
            </li>
            <li>
              <a href="#">보안문의</a>
              <ul class="gnb_dep2">
                <li><a href="#">2뎁스 메뉴</a></li>
                <li><a href="#">2뎁스 메뉴</a></li>
              </ul>
            </li>
            <li>
              <a href="#">정책 예외 신청</a>
              <ul class="gnb_dep2">
                <li><a href="#">2뎁스 메뉴</a></li>
                <li><a href="#">2뎁스 메뉴</a></li>
              </ul>
            </li>
            <li>
              <a href="#">방화벽 신청서</a>
              <ul class="gnb_dep2">
                <li><a href="#">2뎁스 메뉴</a></li>
                <li><a href="#">2뎁스 메뉴</a></li>
              </ul>
            </li>
            <li>
              <a href="#">공정 PC 보안</a>
              <ul class="gnb_dep2">
                <li><a href="#">2뎁스 메뉴</a></li>
                <li><a href="#">2뎁스 메뉴</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Privacy Center</a>
              <ul class="gnb_dep2">
                <li><a href="#">2뎁스 메뉴</a></li>
                <li><a href="#">2뎁스 메뉴</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div><!-- //.inner -->
    </header>
    `)
  },
  lnb: function(){
    document.write(`
    <aside class="lnb">
        <div class="inner">
          <ul class="lnb_list depth_1">
            <li class="on">
              <a href="#" class="ico_personnel_line">외부인력 투입철수 프로세스</a>
              <ul class="lnb_list depth_2">
                <li><a href="#">depth_2</a></li>
                <li class="on"><a href="#">depth_2</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="ico_security_line">보안문의</a>
              <ul class="lnb_list depth_2">
                <li><a href="#">사원 정보 조회</a></li>
                <li><a href="#">사원 초대</a></li>
                <li><a href="#">근로계약서 관리</a></li>
                <li><a href="#">기타계약서 관리</a></li>
                <li><a href="#">사원정보 변경 이력</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="ico_policy_line">정책 예외 신청</a>
              <ul class="lnb_list depth_2">
                <li><a href="#">depth_2</a></li>
                <li><a href="#">depth_2</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="ico_protection_line">방화벽 신청서</a>
              <ul class="lnb_list depth_2">
                <li><a href="#">depth_2</a></li>
                <li><a href="#">depth_2</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="ico_fair_security_line">공정 PC 보안</a>
              <ul class="lnb_list depth_2">
                <li><a href="#">depth_2</a></li>
                <li><a href="#">depth_2</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="ico_privacy_line">Privacy Center</a>
              <ul class="lnb_list depth_2">
                <li><a href="#">depth_2</a></li>
                <li><a href="#">depth_2</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- //.inner -->
        <ul class="lnb_bottom">
          <li><i class="ico_user"></i>아모레님 안녕하세요</li>
          <li><i class="ico_logout"></i><a href="">로그아웃</a></li>
          <li>
            <div class="lnb_btn_toggle btn_toggle">
              <input type="checkbox">
              <label></label>
            </div>
          </li>
        </ul>
      </aside>
    `)
  }
}