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
    document.write('<script src="../../resources/js/pub/common.js"></script>');
  },
  style: function () {
    document.write('<link rel="stylesheet" href="../../resources/css/jquery-ui.min.css"></link>');
    document.write('<link rel="stylesheet" href="../../resources/css/swiper-bundle.min.css"></link>');
    document.write('<link rel="stylesheet" href="../../resources/css/style.css"></link>');
  },
  appBar: function () {
    document.write(`
      <div class="appbar">
        <div class="inner">
          <a href="#" class="logo"><img src="../../resources/images/logo.svg" alt="아모스프로페셔널 메인"></a>
          <div class="btn_toggle txt_in_toggle">
            <input type="checkbox"/>
            <label>
              <span>뉴플랫폼</span>
              <span>AMOS TV</span>
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
  mainTabMenu: function () {
    document.write(`
      <div class="tab_menu line_tab is_scroll">
        <ul>
          <li class="current tab_list" data-tab="tab4-1"><button>홈</button></li>
          <li class="tab_list" data-tab="tab4-2"><button>상품구매</button></li>
          <li class="tab_list" data-tab="tab4-3"><button>거래원장</button></li>
          <li class="tab_list" data-tab="tab4-4"><button>정기교육</button></li>
          <li class="tab_list" data-tab="tab4-5"><button>아모스TV</button></li>
          <li class="tab_list" data-tab="tab4-5"><button>이벤트</button></li>
        </ul>
        <div class="tab_bar" style="width: 84px; left: 20px;"></div>
      </div><!-- //.tab_menu -->
    `)
  },
  tabBar: function () {
    document.write(`
      <div class="btm_bar is_nav">
        <div class="inner">
          <ul class="btm_bar_nav"><!-- li.active -->
            <li class="active"><i class="ico_cate ico_24"></i><span class="nav_tit">카테고리</span></li>
            <li><i class="ico_point ico_24"></i><span class="nav_tit">포인트몰</span></li>
            <li><i class="ico_home ico_24"></i><span class="nav_tit">홈</span></li>
            <li><i class="ico_wish ico_24"></i><span class="nav_tit">찜한상품</span></li>
            <li><i class="ico_user ico_24"></i><span class="nav_tit">마이페이지</span></li>
          </ul>
        </div>
      </div><!-- //.btm_bar -->
    `);
  },
  footer: function () {
    document.write(`
      <footer>
        <div class="inner">
          <ul class="accord_list">
            <li class="accord_head">
              <div class="accord_tit">
                <div class="logo"><img src="../../resources/images/logo.svg" alt="아모레프로페셔널"></div>
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
  floatingSide: function () {
    document.write(`
      <ul class="floating_side">
        <li>
          <button class="btn_floating btn_border"><i class="ico_24 ico_float_top"></i></button>
        </li>
        <li>
          <button class="btn_floating btn_primary"><i class="ico_24 ico_plus_white"></i></button>
        </li>
      </ul>
    `);
  },
}