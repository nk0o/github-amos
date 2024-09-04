//모바일체크
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
$(document).ready(function() {
  checkIsMobile();
  let timer = null;
    $(window).resize(function() {
      clearTimeout(timer);
      timer = setTimeout(checkIsMobile, 100);
    });
});
function checkIsMobile(){
  if ($(window).width() < 1024) {
    return  isMobile = true;
  }else{
    return  isMobile = false;
  }
}
$(document).ready(function () {
  tabSlider();
  LineTabMenuInit();
  toggleBtnDisabled();

  initCountString();
  progressBarUI();
  paginationUI();
  accordionUI();
  selectBoxUI();
  addInputClearBtn();
  modalUI();
  bottomSheetUI();
  floatingSideUI();
  catecoryUI();
  prdSlider();
  tvSlider();
  headerScroll();
  prdImgFix();
  tabContPos();
  putInCart();
  tabMoveAnchor();
  monthPicker();
  showPicker();
  showEtc();
  tooltipUI();
  orderChangeHistoryUI();
  allView();
  // if ($(".line_tab")) { LineTabMenuInit() }
  // if ($(".btn_toggle").find("input[disabled='true']")) { toggleBtnDisabled() }
  // if ($('.file_uploader')) { fileUploader() }
  // if ($('.input_writing_group textarea')) { initCountString() }
  // if ($('.progress_bar')) { progressBarUI() }
  // if ($('.pagination').length > 0) { paginationUI() }
  // if ($('.accord_head').length > 0) { accordionUI() }
  // if ($('.select_box').length > 0) { selectBoxUI() }
  // if ($('.input_text').length > 0) { addInputClearBtn() }
  // if ($('.modal_container').length > 0) { modalUI() }
  // if ($('[data-btmsheet]').length > 0) { bottomSheetUI() }
  // if ($('.floating_side').length > 0) { floatingSideUI() }
  // if ($('.cate_nav').length > 0) { catecoryUI() }
  // if ($('.prd_list_wrap.swiper').length > 0) { prdSlider() }
  // if ($('header').length > 0) { headerScroll() }
  // if ($('.page_detail .prd_top_info').length > 0) { prdImgFix() }
  // if ($('.page_detail .tab_menu').length > 0) { tabContPos() }
  // if ($('.prd_cart_btn').length > 0) { putInCart() }
  // if ($('.clickTab').length > 0) {  tabMoveAnchor() }
  // if ($('.open_month').length > 0) {  monthPicker() }
  // if ($('.show_picker').length > 0) {  showPicker() }
  // if ($('.show_etcinput').length > 0) {  showEtc() }
  // if ($('.tooltip_box').length > 0) {  tooltipUI() }
  // if ($('.history_toggle').length > 0) {  orderChangeHistoryUI() }
  // if ($('.accord_list .amount_box').length > 0) {  allView() }

  /****** Window Resize ******/
  $(window).resize(function () {
    LineTabMenuInit();
  });

  /****** Tab Menu ******/
  $(document).on('click touchend', '.tab_menu .tab_list', function(){ tabMenu(this) });

  function tabMenu(el) {
    var tab= $(el).parents('.tab_menu');

    var activeTab = $(el).attr('data-tab');
    $(el).siblings('li').removeClass('current');
    $(el).addClass('current');
    $('#' + activeTab).siblings('.tab_cont_item').removeClass("current");
    $('#' + activeTab).addClass("current");

    if (tab.hasClass("line_tab")) {
      //클릭시 라인이동
      var tab = $(el).parents('.tab_menu');
      var tabBar = $(el).parents('.tab_menu').find('.tab_bar');
      if (tab.hasClass("line_tab")) {
        var liWidth = tab.find(".current").outerWidth();
        var marginLeft = parseInt(tab.find(".current").css("margin-left"));
        var left = tab.find(".current").position().left + marginLeft;
        var leftss = $(tab).scrollLeft();
        tabBar.css({
          "width": liWidth,
          "left": left + leftss
        });
      }
    }
    
    // 가운데 정렬
    if (tab.hasClass('tab_center')) {
      moveCenterTab(el)
    }

    //브랜드 아코디언 앵커이동
    if (tab.hasClass("thumb_tab")) {
      let idx = $(el).index();
      let tabH= $('.sticky_tab').outerHeight();
      if($('.cate_brand.accord_list').length > 0) {
        let accorHead = $('.cate_brand.accord_list').find('.accord_head'),
            accorHeadTitH = $('.cate_brand.accord_list').find('.accord_tit').outerHeight(),
            tabsAreaH = $('.tabs_area').outerHeight();
        $("html, body").animate({
          scrollTop : accorHeadTitH *idx + tabsAreaH + 1*idx - tabH + 1
        },500)
        accorHead.removeClass('on');
        accorHead.eq(idx).addClass('on');
        accorHead.find(".accord_cont").stop().slideUp();
        accorHead.eq(idx).find(".accord_cont").stop().slideDown();
      }
    }
  }
  //Line Tab 초기화
  function LineTabMenuInit() {
    var tabM = $('.tab_menu');
    var lineTab = $('.line_tab');

    if (tabM.hasClass("line_tab")) {
      tabM.each(function () {
        if ($(this).find('.tab_bar').length < 1) {
          $(this).append("<div class='tab_bar'></div>");
        };
      });
    }

    lineTab.each(function () {
      $(this).find('.tab_bar').css({
        "width": $(this).find(".current").outerWidth(),
        "left": $(this).find(".current").position().left + parseInt($(this).find(".current").css("margin-left"))
      });
    })
  };
  //

  /****** Toggle Button ******/
  $(document).on('click touchend', '.btn_toggle', function(){
    if ($(this).next('.btn_toggle_txt')) { toggelBtnText(this) }
  })
  //Toggle Button Change Text
  function toggelBtnText(el) {
    var toggleON = $(el).find('input[type=checkbox]').is(":checked");
    var toggleText = $(el).next('.btn_toggle_txt');
    var toggleTextValue = $(el).next('.btn_toggle_txt').text();
    if (toggleON) {
      if (toggleTextValue == 'OFF') {
        toggleText.text('ON');
      } else if (toggleTextValue == 'Unchecked toggle') {
        toggleText.text('Checked toggle');
      }
    } else {
      if (toggleTextValue == 'ON') {
        toggleText.text('OFF');
      } else if (toggleTextValue == 'Checked toggle') {
        toggleText.text('Unchecked toggle');
      }
    }
  }
  //Toggle Button Disabled
  function toggleBtnDisabled() {
    $('.btn_toggle').each(function (index, item) {
      var toggleDis = $(item).find('input[type=checkbox]').is(":disabled");
      if (toggleDis) {
        $(item).addClass('disabled');
      } else {
        $(item).removeClass('disabled');
      }
    });
  }

  /****** File Uploader ******/
/*   function fileUploader() {
    $('.file_uploader').each(function (index, item) {
      $(item).find('.file_name .input_delete').on('click', function () {
        $(this).parents('.file_name').remove();
      });
      $(item).find('.input_file').on('change', function () {
        var fileCheck = $(this).val();
        if (fileCheck == '') {
          alert("파일을 첨부해 주세요");
        } else {
          var $div = $('<div class="file_name"><input type="text" readonly><i class="input_delete" onclick="removeFilename(this)"></i></div>');
          $(item).append($div);
          var fileName = $(this).val();
          //경로가 있는경우
          //$div.find('input').val(fileName);
          //경로가 없어야 하는 경우
          fileName = fileName.split("\\");
          $div.find('input').val(fileName[fileName.length - 1]);
        }
      });
    });
  }; */

  // 상품 담기
  if ($('.prd_list_wrap.ir').length > 0 ) {
    $(document).on('click touchend', '.prd_box .prd', function(e){
      e.preventDefault();
      let imgSrc = $(this).find('img').attr('src');
      let $parent = $(this).parent();
      if ($parent.hasClass('checked')) {
        $parent.removeClass('checked');
        $parent.find('.ani_cart').remove();
      } else {
        $parent.addClass('checked');
        $parent.append(
          '<div class="ani_cart"><div class="ir_cart"><img scr="" alt=""></div></div>'
        );
        $parent.find('.ani_cart img').attr('src', imgSrc);
        $parent.find('.ani_cart').addClass('active');
        setTimeout(function() {
          $parent.find('.ani_cart').removeClass('active');
        }, 1000);
      }
      let count = $('.prd_list_wrap').find('.prd_box.checked').length;
      $('.prd_cart_btn .count').text('(' + count + ')');
    });
    // putCart();
  }
  
  // 장바구니 버튼
  // function putCart() {
  //   $('.prd_cart_btn .btn_bottom').on('click',function() {
  //     let cartTxt = $(this).siblings('.cart_txt');
  //     if(cartTxt.hasClass('active')) {
  //       cartTxt.removeClass('active')
  //     } else {
  //       cartTxt.addClass('active');
  //       setTimeout(function() {
  //         cartTxt.removeClass('active');
  //       }, 2000);
  //     }
  //   })
  // }

  //상품 리스트 타입 선택
  if ($('.type_list .view_type').length > 0) {
    $('.view_type button').on('click',function() {
      if($(this).hasClass('btn_view_list')) { //리스트 상태
        $('.btn_view_list').removeClass('active');
        $('.btn_view_list').siblings('.btn_view_thumb').addClass('active');
        $('.prd_list_sm').addClass('xs');
      } else if ($(this).hasClass('btn_view_thumb')) { //썸네일 상태
        $('.btn_view_thumb').removeClass('active');
        $('.btn_view_thumb').siblings('.btn_view_list').addClass('active');
        $('.prd_list_sm').removeClass('xs');
      }
    })
  }

  //checkbox 선택 2개 제한
  if ($('.check_len2').length > 0) {
    $('.check_len2').each(function() {
      $(this).find('input[type="checkbox"]').on('change', function() {
        let parent = $(this).closest('.check_len2');
        let count = parent.find('input[type="checkbox"]:checked').length;
        if (count > 2) {
          $(this).prop('checked', false);
        }
      });
    });
  }
}) //ready


/****** Select Box ******/
function selectBoxUI(){
  $(document).on('click', '.select_box_value', function(e){
    if(isMobile && $(this)[0].hasAttribute('data-btmsheet')) {
      return false;
    }
    const t = $(this);
    if ($(this).parents('.select_box').hasClass('on')) {
      dropDownClose(t);
    } else {
      if ($(this).parents('.select_box').hasClass('disabled')) {
        return false;
      }
      $('.select_box').removeClass('on');
      selectBoxDown(t);
    }

    if(t.parents().hasClass('select_box_defalut')){
      t.change(function(){
        t.css('color', '#222222')
      });
    }
  });

  $('.select_box_list li').click(function (e) {
    selectBoxDownAction(this);
    SelectBoxChange(this);
  });

  function selectBoxDown(t) {
    const $selectBox = t.parents('.select_box');
    if (!t.hasClass('disabled')) {
      if ($selectBox.hasClass('on')) {
        $selectBox.removeClass('on')
      } else {
        $selectBox.addClass('on');
        $selectBox.siblings('.select_box').removeClass('on');
      }
      $('body').on('click', function (e) {
        if ($(e.target).closest('.select_box').length === 0 && $('.select_box').hasClass('on')) {
          dropDownClose()
        }
      });
    };
  };

  function selectBoxDownAction(el) {
    $(el).parents('.select_box_list').find('li').removeClass('selected');
    if (!$(el).parent('li').hasClass('disabled')) {
      $(el).addClass('selected');
    }
    $(el).parents('.select_box').removeClass('on')
  };
  
  function dropDownClose() {
    $('.select_box').removeClass('on');
  };

  //Change Select Box Value
  function SelectBoxChange(selectItem) {
    if ($(selectItem).find('ul').length <= 0) {
      var $cloneEle = $(selectItem).parents('.select_box').find('.select_box_value').children('span').children();
      var selectText = $(selectItem).text();
      clearInput(selectItem);
      $(selectItem).parents('.select_box').find('.select_box_value').children('span').text(selectText);
      $(selectItem).parents('.select_box').find('.select_box_value').children('span').append($cloneEle);
      $(selectItem).parents('.select_box').find('.select_box_value').children('span').css('color', '#222222');
    }
  };

  function clearInput(obj) {
    $(obj).parents('.select_box').find('.select_box_value').children('span').text("");
  };

}

/****** TextArea String Length Count ******/
//textarea 기존 값이 있는 경우 Count String
function initCountString() {
  $(".input_writing_group").find('textarea').on('keyup', function () { CountString(this) });
  $('.input_writing_group').each(function (idx, item) {
    var st = $(item).find('textarea').val();
    var current = $(item).find('.txt_count').find('.current');
    if(st == ""){
      current.addClass('zero')
    }else{
      current.html(st.length).removeClass('zero')
    }
  });
}

//Count String
function CountString(el) {
  var regex = /[^0-9]/g; //숫자추출 정규식
  var total = $(el).next('.txt_count').find('.total').html().replace(regex, "");

  if($(el).val().length == 0){
    $(el).next('.txt_count').find('.current').addClass('zero')
  }else{
    $(el).next('.txt_count').find('.current').removeClass('zero')
  }

  $(el).next('.txt_count').find('.current').html($(el).val().length);
  if ($(el).val().length > total) {
    alert(total + '자 이내로 작성해주세요')
    $(el).val($(el).val().substring(0, total));
    $(el).next('.txt_count').find('.current').html(total);
  };
}

/****** Progress bar ******/
function progressBarUI() {
  $(".progress_bar").each(function (i, block) {
    var regex = /[^0-9]/g; //숫자추출 정규식
    var progressR = $(block).html().replace(regex, "");//끝 값   
    var width = 0; //시작값
    var id = setInterval(frame, 15);//너비, 숫자표시 증가속도
    function frame() {
      if (progressR >= 100) {
        progressR = 100;
        $(block).css('width', 100 + '%'); //너비       
      }
      if (width >= progressR) {
        clearInterval(id);
        cnt = 0;
      } else {
        width++;
        $(block).css('width', width + '%'); //너비
        $(block).find('.progress_ratio').html(width + '%');  //숫자 표시
      }
    }
  });
}

/****** Pagination ******/
function paginationUI() {
  $('.pagination').each(function (index, item) {
    $(item).find('a').on('click', function () {
      if (!$(this).hasClass('arr')) {
        $(this).siblings().removeClass('active')
        $(this).addClass('active');
      }
    });
  });
}

/****** Accordion ******/
function accordionUI() {
  $(".accord_head .accord_tit").click(function (event) { 
    let noFoldAccordion = $(this).parents().hasClass('no_fold');
    if(!noFoldAccordion){
      accordionAction(this, event);
    }
    event.preventDefault(); 
  });
  function accordionAction(el, event) {
    if($(el).parents(".accord_list").hasClass("cate_brand")){
      let idx = $(el).parents('.accord_head').index();
      let tablist = $('.tabs_area .thumb_list').find('.tab_list');
      tablist.removeClass('current')
      tablist.eq(idx).addClass('current')
      moveCenterTab(tablist.eq(idx))
    }
    if($(el).parents('.accord_head').hasClass("no_open")){
      return false;
    }
    if($(el).parents(".accord_list").hasClass("is_plus")){
      if($(event.target).hasClass("ico_plus_20")){
        onOff(el);
      }
    }else{
      onOff(el);
    } 

    function onOff(item){
      if ($(item).parents('.accord_head').hasClass("on")) {
        $(item).parents('.accord_head').removeClass("on");
        $(item).parents('.accord_head').find(".accord_cont").stop().slideUp();
      } else {
        $(item).parents('.accord_list').find('.accord_head').removeClass("on");
        $(item).parents('.accord_list').find(".accord_cont").stop().slideUp();
        $(item).parents('.accord_head').addClass("on");
        $(item).parents('.accord_head').find(".accord_cont").stop().slideDown();
      }
    }
  }
}

//File Uploader - Remove Choosed File
function removeFilename(t) {
  $(t).parents('.file_name').remove();
};

//DataTable Select All row
function dataTableSelect(dtable) {
  var dtable = dtable;
  $(".dataTable  .checkall").prop("checked", false);
  $(".checkall").click(function () {
    if ($(this).prop("checked")) {
      dtable.rows().select();
    } else {
      dtable.rows().deselect();
    }
  });
};


function addInputClearBtn(){
  $(document).on('change', '.input_text[type="file"]', function(){
    addB(this)
    $(this).css('color', '#222')
  })
  $(document).on('keyup', '.input_text', function(){
    addB(this);
  });

  $(document).on('focusout', '.search_bar input', function(){
    $(this).parents('label').find('button').removeClass('ico_close_circle').addClass('ico_search');
  });
  
  function addB(el){
    if($(el).parents('label').find('button').length > 0){
      return false;
    }
    if($(el).parents('.search_bar') && $(el).parents('label').find('button').length){
      $(el).parents('label').find('button').removeClass('ico_search').addClass('ico_close_circle');
    }
    if(!$(el).parents('label').find('.ico_close_circle').length){
      $(el).parent('label').append(`<button class="ico_close_circle"></button>`)
    }
  }
}
/****** Modal ******/
function modalUI(){
  $(document).on('click touchend', '.btn_modal_open', function(e){ e.preventDefault(); openModal(e.target) }); //open modal

  $(document).on('click touchend', '.btn_modal_close, .modal_overlay', function(e){
    e.preventDefault();
    closeModal(e.target);
  });
  let timer = null;
  $(window).on('resize', function(){//resize modal
    clearTimeout(timer);
    timer = setTimeout(modalPosition, 50);
  })
  function openModal(el){
    const modalName = $(el).attr('id');
    let thisModal = $(".modal_container[data-modal='" + modalName + "']")
    let documentH = $(document).height();
    thisModal.removeAttr("aria-hidden").addClass('open');
    $("body").addClass("no_scroll");
    modalPosition(thisModal)
    $(el).find('.modal_overlay').css('height' , documentH)
  }
  function closeModal(el){
    $(el).parents(".modal_container").attr("aria-hidden","true").removeClass('open');
    $("body").removeClass("no_scroll");
  }
  function modalPosition(el){
    let windowH = $(window).height();
    let modal;
    el == true ?  modal = $(el) :  modal = $(".modal_container.open");
    const modalH = modal.find('.modal_content').height();
    const overlay = modal.find('.modal_overlay');
    const content = modal.find('.modal_content');
    
    if( modalH >= windowH - 100 ){
      overlay.css('height', modalH + 100);
      content.css({'position':'fixed','top':'50px'});
      modal.scrollTop(0);
    }else if( modalH < windowH ){
      modal.find('.modal_overlay').css('height', windowH);
      content.css({'position':'relative','top':'auto'});
    }
  }
}

function bottomSheetUI(){
  $(document).on('click touchend', '[data-btmsheet]', function(){
    if($(this).hasClass('select_box_value') && !isMobile){
      //셀렉트는 모바일일때만 열림
      return false;
    }
    $("#"+ $(this).data('btmsheet')).addClass('show');
    $("body").addClass("no_scroll");
  });
  $(document).on('click touchend', '.btm_sheet_close, .btm_sheet_back', function(e){
    $(this).parents('.btm_sheet').removeClass('show')
    $("body").removeClass("no_scroll");
    e.preventDefault();
  });
}
/* Floating UI */
function floatingSideUI(){
  //expand
  $(document).on('focusin', '.floating_side .anchor', function(){
    $(this).parents('.floating_side').addClass('focus')
  })
  $(document).on('focusout', '.floating_side .anchor', function(){
    $(this).parents('.floating_side').removeClass('focus')
  });  
  $(document).on('click', '.floating_side .anchor', function(){
    $(this).parents('.floating_side').addClass('is_expanded');
    $("body").addClass("no_scroll");
  })
  $(document).on('click', '.floating_side .anchor_close', function(){
    $(this).parents('.floating_side').removeClass('is_expanded');
    $("body").removeClass("no_scroll");
  })
  //scrollTop
  $(document).on('click', '.floating_side .scrolltop', function(){
    $('html, body').animate({scrollTop: '0'}, 500,'swing');
  });
  //scroll
  $(".floating_side").stop().hide();
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if(st > 0){
      $(".floating_side").stop().fadeIn(150);
    }else{
      $(".floating_side").stop().fadeOut(150);
    }
  })
}

// 찜하기
function like(event) {
  const target = $(event),
        parent = target.parents();
  if (target.hasClass("active")) {
    target.removeClass("active");
    target.parent().find('.ani_liked').remove();
  } else {
    target.addClass("active");
    if ($('.prd_list_wrap.ir').length > 0 || parent.hasClass('btm_bar type2')) {
      target.parent().append(
        '<div class="ani_liked"><div class="ir_like"></div></div>'
      );
      target.parent().find('.ani_liked').addClass('active');
      setTimeout(function() {
        target.parent().find('.ani_liked').remove();
      }, 1000);
    }
  }
}

/* 카테고리 페이지 */
function catecoryUI(){
  $(document).on('click touchend', '.cate_nav li', function(){
    let elName = $(this).find('.cate_tit').attr('href');
    let elPos = $(elName).offset();

    scrollTo(0, elPos.top);
    if(!$(this).hasClass("active")){
      cateNavActive(this)
    }
  })
  cateScroll()
}

function cateNavActive(el){
  $(".cate_nav li").removeClass("active");
  $(el).addClass("active");
}

function cateScroll(){
  $('.cate_list').scroll(function () {
    var list = $(this).children();
    var top = $(this).offset().top;
    var $toc;
    list.each(function () {
      let itemTop = $(this).position().top;
      if(itemTop < top + 20){
        $toc = $(this).attr("id");
        var $findNav = $("a[href='#" + $toc + "']").parent('li');
        cateNavActive($findNav)
      }
    })
  })
}

/* 제품 리스트 Swiper */
function prdSlider(){  
  $(".prd_list_wrap.swiper").each(function (i, v) {
    let sliderName = 'slider' + i;
    $(v).attr('id', sliderName);
    let sliderId = '#' + sliderName;
  
    // Swiper 컨테이너 내에 .colorchip 클래스 있는지 확인
    let swiperContainer = $(sliderId);
    //let hasColorchip = swiperContainer && swiperContainer.hasClass('colorchip');
    //let slidesPerViewValue = hasColorchip ? 4.235 : 2.26;
    //let spaceBetweenwValue = hasColorchip ? 5 : 8;
    
    // spaceBetweenValue2 부모에 .is_noBack 클래스가 있는지 확인
    let hasIsNoBack = swiperContainer && swiperContainer.parents('.sec_product').hasClass('is_noBack');
    let slidesPerViewValue = hasIsNoBack ? 2.26 : 2.47;
    let spaceBetweenValue = hasIsNoBack ? 8 : 0;
    //let slidesOffsetAfterValue = /iPhone/i.test(navigator.userAgent) && hasIsNoBack ? 80 : 0;
    
    // Swiper 초기화
    let PrdSwiper = new Swiper(sliderId, {
      //autoHeight: true,
      slidesPerView: slidesPerViewValue,
      spaceBetween: spaceBetweenValue,
      //slidesOffsetAfter : slidesOffsetAfterValue,
      pagination: {
        el: sliderId + " .swiper-pagination",
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
      },
    });
  });
}

function headerScroll() {
  var hd =$("header")
  var headerH = hd.outerHeight();
  var lastScrollTop = 0, delta = 15;
  var isMainHeader = !($("header").find(".appbar_back").length > 0);
  

  if( $(window).scrollTop() > 0){
    !hd.hasClass('fixed') && hd.addClass("fixed");
  }      
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if ((st > lastScrollTop) && (lastScrollTop >= 0)) {
      hd.addClass("fixed");
      if( isMainHeader && lastScrollTop > headerH){
        hd.removeClass("upscroll").addClass("downscroll");
      }      
    } else {     
      if(isMainHeader){
        hd.removeClass("downscroll").addClass("upscroll");
        if(lastScrollTop <= headerH){
            hd.removeClass("upscroll")
        }
      }
    }
    lastScrollTop = st;
  })
}
//Tab 가운데
function moveCenterTab(el){
  let liWid = 0,
    boxWid = $('.tab_center').outerWidth(true),
    boxHalf = $('.tab_center').outerWidth(true) / 2,
    leftPos = 0,
    // pd = $(el).parent('ul').css('padding-left') * 2,
    selectPos,
    pos;
  $(el).parents('.tab_center').find('.tab_list').each(function() {
    liWid += $(this).outerWidth(true);
  });
  for (let i=0; i< $(el).index(); i++) {
    leftPos += $(el).parents('.tab_center').find('.tab_list').eq(i).outerWidth(true);
  }
  selectPos = leftPos + $(el).outerWidth(true)/2;
  if (selectPos < boxHalf) {
  pos = 0;
  } else if (liWid - selectPos < boxHalf) {
  pos = liWid - boxWid;
  }  
  else {
  pos = selectPos - boxHalf ;
  }

  $(el).parents('.tab_center').find('>ul').animate({scrollLeft:pos});
}
//탭클릭 앵커이동
function tabMoveAnchor() {//.tab_menu.clickTab --> .toCont
  let clickTab = $('.clickTab');
  let headerH = $('header').outerHeight();
  let tabListH = clickTab.outerHeight();
  let moveTab = clickTab.hasClass('clickTab')
  let userAreaH = 0;
  if(!moveTab){return false}
  if($('.page_point').length > 0 ){
    userAreaH = $('.user_area').outerHeight();
  }
  $(document).on('click touchend', '.tab_menu .tab_list', function(){
    let idx = $(this).index();
    let toEl = $(this).parents('.clickTab').length > 0 && $('.toCont').eq(idx);
    $("html, body").animate({
      scrollTop : toEl.offset().top - (headerH + userAreaH)
    },500)
  })
}

//카트 담기
function putInCart() {
  $(document).on('click touchend', '.prd_cart_btn', function(){
    putInCartAction()
  })
  $(document).on('click touchend', '.btn_cart', function(){
      putInCartAction()
  })
  function putInCartAction(){
    if($('.prd_put_cart').length == 0) {
      $('.appbar > .inner').append('<div class="prd_put_cart"><div class="aniPut"> <div class="ani_img"><i class="ico_cart_float ico_24"></i></div></div><div class="put_text"><p>나의 장바구니에 담았습니다</p></div></div>')
      $('.prd_put_cart').addClass('active');
      setTimeout(function() {
        $('.prd_put_cart').removeClass('active').remove();
      },4500)
    }
  }
}

function prdImgFix() {
  let winW = $(window).width();
  if(winW < 1024) {
    $(window).on('scroll',function() {
      let scroll = $(this).scrollTop();
      if(scroll > 0) {
        $('.prd_top_info .prd_img').addClass('fix')
      } else {
        $('.prd_top_info .prd_img').removeClass('fix')
      }
      
    })
  }
}

function tabContPos() {
  if($('.tab_cont').length > 0){
    let tabContPos = $('.tab_cont').offset().top;
    let headeH = $('header').outerHeight();
    let tabMenuH = $('.tab_menu').outerHeight();
    $(document).on('click touchend', '.tab_list', function(){
      if($(this).parents('.prd_detail_view').length <= 0){
        return false;
      }
      //아이폰 확인
      function isIphone() {
        return /iPhone/.test(navigator.userAgent);
      }
      if (isIphone()) {
        $('html,body').animate({
          scrollTop : tabContPos - headeH - tabMenuH + 20
        })
      } else {
        $('html,body').animate({
          scrollTop : tabContPos - headeH - tabMenuH
        })
      }
    })
  }
}

function monthPicker() {
  $(document).on('click touch', '.open_month', function(){
    $('[data-type="picker"]').monthpicker('show')
  })
  $('[data-type="picker"]').monthpicker({
    altFormat: 'yy',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    minDate: new Date(2021, 1 - 1, 1),
    maxDate: "+Y",
    dateFormat:'yy. mm',
    onSelect: function () {
      let calName =$(this).attr('data-type');
      let selectValue = this.value;
      $("div[data-cal='" + calName + "']").text(selectValue)
    }
  });
}

function showPicker(){
  $(document).on('click touchend', '.input_radio_wrap label, .input_check_wrap label', function(){
    if(!$(this).parents().hasClass('show_picker')){
      $('.is_date.hidden').css('display','none');
    }else{
      $('.is_date.hidden').css('display','flex');
    }
  })
}

function showEtc(){
  $(document).on('click touchend', '.input_radio_wrap label, .input_check_wrap label', function(){
    let isShowTrigger = $(this).parent().hasClass('show_etcinput');
    let radioType = $(this).siblings('input').prop("type") == "radio";
    let checkType = $(this).siblings('input').prop("type") == "checkbox";

    if(radioType){
      isShowTrigger ? uiShow(this) : uiHide(this);
    }
    
    if(checkType){
      if(isShowTrigger){
        if($(this).parents('.inquiry_box').hasClass('check_len2')){
          if($(this).parents('.check_len2').find('input[type="checkbox"]:checked').length < 2){
            uiShow(this);
          }else{
            uiHide(this);
          }
        }else{
          uiShow(this)
        }
        
        $(this).siblings('input').prop("checked") && uiHide(this);
      }
    }
  
    function uiShow(el) {  
      $(el).parents('.inquiry_box').find('.input_etc.hidden').css('display','flex');
    }
    function uiHide(el) {  
      $(el).parents('.inquiry_box').find('.input_etc.hidden').css('display','none');
    }
  })
}

function tooltipUI() {
  $(document).on('click touchend', '.info_tooltip', function(e){
    if(!$('.tooltip_box').hasClass('show')){
      e.preventDefault(); showTooltipBox(e.target); e.stopPropagation();
    }
  });

  $('body').on('click', function (e) {
    $('.tooltip_box').hasClass('show') && $('.tooltip_box').removeClass('show');
  });

  function showTooltipBox(el){
    let trigerOfffsetBtm = $(el).offset().top + $(el).innerHeight();
    let trigerOfffsetLeft = $(el).offset().left;
    let tooltipName = $(el).attr('data-tooltip');
    let tipBox = $('#'+tooltipName);
    tipBox.addClass('show');
    tipBox.offset().top = trigerOfffsetBtm;
    tipBox.offset({
      left: trigerOfffsetLeft, top: trigerOfffsetBtm + 8
    });
  };
}

function allView() {
  $(document).on('change', '.exchange_cont input[type=checkbox]', function(){
    let $container = $(this).closest('.exchange_cont');
    let checked = $container.find('input[type=checkbox]:checked').length > 0;
    if (checked) {
      $container.find('.accord_head').addClass('on');
      $container.find('.accord_cont').slideDown();
    } else {
      $container.find('.accord_head').removeClass('on');
      $container.find('.accord_cont').slideUp();
    }
  });
}
function orderChangeHistoryUI(){
  change('.history_toggle');
  $(document).on('click change', '.history_toggle', function(){
    change(this);
  })
  function change(el){
    $(el).prop('checked') == false ? $('.change_prev').addClass('hidden') : $('.change_prev').removeClass('hidden');
    $(el).prop('checked') == false ? $('.is_changed').addClass('hidden') : $('.is_changed').removeClass('hidden');
  }
}

// 아모스 tv 슬라이드
// 스크롤 이벤트가 너무 자주 발생하지 않도록 주어진 딜레이 간격으로만 실행되도록 만드는 함수
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}
// 슬라이드의 동영상 상태를 업데이트하는 함수
// play 매개변수가 true일 경우 비디오를 재생하고 썸네일을 숨김
// false일 경우 비디오를 정지하고 썸네일을 표시
function updateVideoState(slide, play) {
  const video = slide.find('video').get(0);
  const thumbnail = slide.find('.thumbnail');
  const videoBox = slide.find('.video_box');
  if (play && video) {
    thumbnail.hide();
    videoBox.show();
    video.play();
  } else {
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    thumbnail.show();
    videoBox.hide();
  }
}
// 스크롤 시 비디오 재생 관리 함수 (스와이퍼 있을 때)
function handleScrollWithSwiper() {
  $('.sec_conts').each(function () {
    let secContsTop = $(this).offset().top;
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();

    // 스크롤 위치가 섹션 내부에 있을 때
    if (scrollTop >= secContsTop - 150 && scrollTop < secContsTop - 150 + $(this).outerHeight()) {
      const activeSlide = $(this).find('.swiper-slide-active');
      if (activeSlide.length) {
        // 현재 섹션의 활성 슬라이드의 비디오만 재생
        $('.conts_box_list_wrap .swiper-slide').not(activeSlide).each(function () {
          updateVideoState($(this), false);
        });
        updateVideoState(activeSlide, true);
      }
    } else {
      // 섹션이 활성화되지 않았을 때 모든 비디오는 정지
      $(this).find('.swiper-slide').each(function () {
        updateVideoState($(this), false);
      });
    }
  });
}
// 스크롤 시 비디오 재생 관리 함수 (스와이퍼 없을 때)
function handleScrollWithoutSwiper() {
  if($('.page_tv_datail').length == 0){
    $('.conts_box').each(function () {
      let contsBoxTop = $(this).offset().top;
      let scrollTop = $(window).scrollTop();
      let windowHeight = $(window).height();
  
      // 스크롤 위치가 섹션 내부에 있을 때
      if (scrollTop >= contsBoxTop - 150 && scrollTop < contsBoxTop - 150 + $(this).outerHeight()) {
        const activeSlide = $(this);
        // 현재 섹션의 비디오만 재생
        updateVideoState(activeSlide, true);
        // 나머지 비디오는 정지
        $('.conts_box').not(activeSlide).each(function () {
          updateVideoState($(this), false);
        });
      } else {
        // 섹션이 활성화되지 않았을 때 모든 비디오는 정지
        updateVideoState($(this), false);
      }
    });
  }
}
// tvSlider 기능 초기화 함수
function tvSlider() {
  // 스와이퍼가 있는 경우
  $(".conts_box_list_wrap.swiper").each(function (i, v) {
    let sliderName = 'slider' + i;
    $(v).attr('id', sliderName);
    let sliderId = '#' + sliderName;

    // Swiper 초기화
    let tvSwiper = new Swiper(sliderId, {
      slidesPerView: 1.1,
      spaceBetween: 7.5,
      observer: true,
      observeParents: true,
      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 10,
          on: {
            slideChange: function () {
              // PC: 모든 슬라이드의 비디오를 정지하고 썸네일을 표시
              $(this.slides).each(function () {
                updateVideoState($(this), false);
              });
            }
          }
        }
      },
      on: {
        slideChange: function () {
          // 현재 활성 슬라이드를 찾고, 해당 슬라이드의 비디오만 재생
          if (isMobile) {
            const activeSlide = $(this.slides[this.activeIndex]);
            updateVideoState(activeSlide, true);
            // 나머지 슬라이드의 비디오는 정지
            $(this.slides).not(activeSlide).each(function () {
              updateVideoState($(this), false);
            });
          }
        }
      }
    });

    // 모바일일 경우 스크롤 이벤트로 비디오 재생 관리
    if (isMobile) {
      let initialActiveSlide = $('.conts_box_list_wrap .swiper-slide-active');
      updateVideoState(initialActiveSlide, false);

      // 스크롤 이벤트에 쓰로틀링 적용
      $(window).on('scroll', throttle(handleScrollWithSwiper, 200));
    }
  });

  // 스와이퍼가 없는 경우
  if ($(".conts_box_list_wrap.swiper").length === 0) {
    if (isMobile) {
      $(window).on('scroll', throttle(handleScrollWithoutSwiper, 200));
    }
  }

  // PC일 경우, 슬라이드에 마우스를 올릴 때만 비디오 재생
  if (!isMobile) {
    $('.conts_box_list_wrap .conts_box').hover(
      function () {
        updateVideoState($(this), true);
      },
      function () {
        updateVideoState($(this), false);
      }
    );
  }
}

function tabSlider(){  
  $(".tab_menu.swiper").each(function (i, v) {
    let sliderName = 'slider' + i;
    $(v).attr('id', sliderName);
    let sliderId = '#' + sliderName;
  
    let swiperContainer = $(sliderId);
    let tabSwiper = new Swiper(sliderId, {
      slidesPerView: "auto",
    });
    $(document).on('click touchend', '.btn_delete', function() {
      var elIdx = $(this).parents('.swiper-slide').index();
      tabSwiper.removeSlide( elIdx );
    });
  });
}