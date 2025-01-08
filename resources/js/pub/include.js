var include = {
  meta: function () {
    document.write('<meta charset="UTF-8">');
    document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  },
  scripts: function () {
    document.write('<script src="../../resources/js/libs/jquery- v1.11.1.min.js"></script>');
    document.write('<script src="../../resources/js/libs/jquery-ui.min.js"></script>');
    document.write('<script src="../../resources/js/libs/swiper.min.js"></script>');
    document.write('<script src="../../resources/js/libs/monthpicker.js"></script>');
    document.write('<script src="../../resources/js/libs/daterangepicker.min.js"></script>');
    document.write('<script src="../../resources/js/libs/jquery.uploader.min.js"></script>');//241024 추가
    document.write('<script src="../../resources/js/pub/common.js"></script>');
  },
  style: function () {
    document.write('<!-- 240926 파비콘 추가 -->')
    document.write('<link rel="apple-touch-icon" href="/favicon.png">');
    document.write('<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">');
    document.write('<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">');
    document.write('<link rel="icon" type="image/png" sizes="180x180" href="/favicon.png">');
    document.write('<link rel="icon" type="image/png" href="/favicon.png">');
    document.write('<link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico">');
    document.write('<link rel="stylesheet" href="../../resources/css/jquery-ui.min.css"></link>');
    document.write('<link rel="stylesheet" href="../../resources/css/swiper-bundle.min.css"></link>');
    document.write('<link rel="stylesheet" href="../../resources/css/style.css"></link>');
  },
  mainAppBarTypeApp: function () {
    document.write(`
      <div class="appbar">
        <div class="inner">
          <a href="#" class="logo"><img src="../../resources/images/logo.svg" alt="아모스프로페셔널 메인"></a>
          <div class="btn_toggle txt_in_toggle">
            <input type="checkbox"/>
            <!-- 240905 문구수정 -->
            <label>
              <span>PRO</span>
              <span>TV</span>
            </label>
          </div>
          <div class="appbar_util">
            <button class="ico_search ico_24"><div class="hide">검색</div></button>
            <button class="ico_cart ico_24"><div class="hide">장바구니</div><span class="badge_round bg_primary">8</span></button>
            <button class="ico_bell ico_24"><div class="hide">앱알림</div><span class="badge_round bg_primary">8</span></button>
          </div>
        </div>
      </div><!-- //.appbar -->
    `)
  },
  mainAppBar: function () {
    document.write(`
      <div class="appbar">
        <div class="inner">
          <a href="#" class="logo"><img src="../../resources/images/logo.svg" alt="아모스프로페셔널 메인"></a>
          <div class="btn_toggle txt_in_toggle">
            <input type="checkbox"/>
            <!-- 240905 문구수정 -->
            <label>
              <span>PRO</span>
              <span>TV</span>
            </label>
          </div>
          <div class="appbar_util">
            <button class="ico_search ico_24"><div class="hide">검색</div></button>
            <button class="ico_cart ico_24"><div class="hide">장바구니</div><span class="badge_round bg_primary">8</span></button>
          </div>
        </div>
      </div><!-- //.appbar -->
    `)
  },
  mainCategoryAppBar: function () {
    document.write(`
      <div class="appbar">
        <div class="inner">
          <button class="appbar_back ico_btn_back ico_24"><span class="hide">뒤로가기</span></button>
          <div class="btn_toggle txt_in_toggle">
            <input type="checkbox"/>
            <!-- 240905 문구수정 -->
            <label>
              <span>PRO</span>
              <span>TV</span>
            </label>
          </div>
          <div class="appbar_util">
            <button class="ico_search ico_24"><div class="hide">검색</div></button>
          </div>
        </div>
      </div><!-- //.appbar -->
    `)
  },
  mainTabMenu: function () {
    document.write(`
    <div class="tab_center_wrap appbar_tabmenu">
      <div class="tab_menu tab_center line">
        <ul>
        <li class="current tab_list"><button>상품구매</button></li>
        <li class="tab_list"><button>거래원장</button></li>
        <li class="tab_list"><button>정기교육</button></li>
        <li class="tab_list"><button>이벤트</button></li>
        <li class="tab_list"><button>고객센터</button></li>
        </ul>
      </div>
    </div><!-- //.tab_center_wrap -->
    `)
  },
  tvMainTabMenu: function () {//241113 TV메인 탭메뉴 추가
    document.write(`
    <div class="tab_center_wrap appbar_tabmenu">
      <div class="tab_menu tab_center line">
        <ul>
          <li class="current tab_list"><button>01 REPAIR / 01 PRO STYLE</button></li>
          <li class="tab_list"><button>BRAND</button></li>
          <li class="tab_list"><button>01 COLOR</button></li>
          <li class="tab_list"><button>01 PERM</button></li>
          <li class="tab_list"><button>01 PRO BASIC / 99 PRO TECHNIC</button></li>
          <li class="tab_list"><button>02 SCALP</button></li>
          <li class="tab_list"><button>03 COLOR / 04 WAVE / 05 HAIR</button></li>
          <li class="tab_list"><button>SALON LIVE-ON</button></li>
          <li class="tab_list"><button>BASIC CLASS</button></li>
          <li class="tab_list"><button>SERVICE CLASS</button></li>
          <li class="tab_list"><button>SA</button></li>
        </ul>
      </div>
    </div><!-- //.tab_center_wrap -->
    `)
  },
  subAppBarType1: function(){
    document.write(`
      <div class="appbar is_line">
        <div class="inner">
          <button class="appbar_back ico_btn_back ico_24"><span class="hide">뒤로가기</span></button>
          <h2 class="appbar_tit">서브 페이지(Type1) 제목</h2>
          <div class="appbar_util">
            <button class="ico_search ico_24"><span class="hide">검색</span></button>
            <button class="ico_cart ico_24"><span class="hide">장바구니</span><span class="badge_round bg_primary">20</span></button>
          </div>
        </div>
      </div>
    `);
  },
  subAppBarType2: function(){
    document.write(`
    <div class="appbar is_line">
    <div class="inner">
    <button class="appbar_back ico_btn_back ico_24"><span class="hide">뒤로가기</span></button>
    <h2 class="appbar_tit">서브 페이지(Type2) 제목</h2>
    </div>
    </div>
    `);
  },
  //240909 서브앱바type3삭제 
  //240909 팝업앱바type삭제 
  tabBar: function () {
    document.write(`
      <div class="btm_bar is_nav">
        <div class="inner">
          <ul class="btm_bar_nav"><!-- li.active -->
            <li class="active"><i class="ico_cate ico_24"></i><span class="nav_tit">카테고리</span></li>
            <li><i class="ico_point ico_24"></i><span class="nav_tit">포인트몰</span></li>
            <li><i class="ico_home ico_24"></i><span class="nav_tit">홈</span></li>
            <li><i class="ico_wish ico_24"></i><span class="nav_tit">찜한상품</span></li>
            <!-- 240826 찜한 상품 있는경우 -->
            <!-- <li><i class="ico_wish_is ico_24"><span class="badge_round bg_red">7</span></i><span class="nav_tit">찜한상품</span></li> -->
            <li><i class="ico_user ico_24"></i><span class="nav_tit">마이페이지</span></li>
          </ul>
        </div>
      </div><!-- //.btm_bar -->
    `);
  },
  footer: function () {
    document.write(`
      <!-- 240923 푸터 감싸는 div추가 -->
      <div class="footer_wrap">
        <footer>
          <div class="inner">
            <ul class="accord_list">
              <li class="accord_head">
                <div class="accord_tit">
                  <div class="logo">
                    <img src="../../resources/images/simbol_2.svg" alt="아모레프로페셔널"><!-- 240920 이미지 수정 -->
                  </div>
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
              <li><a href="#">입점상담</a></li><!-- 240903 입점상담 추가 -->
            </ul>
            <p class="f_copyright">Copyright &copy; <span>아모스프로페셔널.</span> All rights reserved.</p>
          </div>
        </footer>
      </div>
    `);
  },
  floatingSide: function () {
    document.write(`
    <ul class="floating_side">
      <li>
        <span class="floating_tit">브랜드 소개</span>
        <button class="btn_floating"><i class="ico_24 ico_float_brand"></i></button>
      </li>
      <li>
        <span class="floating_tit">입점 상담</span>
        <button class="btn_floating"><i class="ico_24 ico_float_store"></i></button>
      </li>
      <li>
        <span class="floating_tit">1:1 문의</span>
        <button class="btn_floating"><i class="ico_24 ico_float_question"></i></button>
      </li>
      <li class="anchor_close">
        <button class="btn_floating btn_primary"><i class="ico_24 ico_float_close"></i></button>
      </li>
      <li class="item scrolltop">
        <button class="btn_floating btn_border"><i class="ico_24 ico_float_top"></i></button>
      </li>
      <li class="item anchor">
        <button class="btn_floating btn_primary"><i class="ico_24 ico_plus_24"></i></button>
      </li>
    </ul><!-- //.floating_side -->
    `);
  },
  floatingSideLogin: function () {
    document.write(`
    <ul class="floating_side_left">
      <li>
        <button class="btn_floating btn_circle"><i class="ico_16 ico_login"></i>로그인</button>
      </li>
      <li>
        <button class="btn_floating btn_circle"><i class="ico_16 ico_join"></i>회원가입</button>
      </li>
    </ul><!-- //.floating_side_left -->
    `);
  },
}