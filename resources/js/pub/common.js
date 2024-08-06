//모바일체크
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
$(document).ready(function () {
  if ($(".line_tab")) { LineTabMenuInit() }
  if ($(".btn_toggle").find("input[disabled='true']")) { toggleBtnDisabled() }
  if ($('.file_uploader')) { fileUploader() }
  if ($('.input_writing_group textarea')) { initCountString() }
  if ($('.progress_bar')) { progressBarUI() }
  if ($('.pagination').length > 0) { paginationUI() }
  if ($('.accord_head').length > 0) { accordionUI() }
  if ($('.select_box').length > 0) { selectBoxUI() }
  if ($('.input_text').length > 0) { addInputClearBtn() }
  if ($('.modal_container').length > 0) { modalUI() }
  if ($('[data-btmsheet]').length > 0) { bottomSheetUI() }
  if ($('.floating_side').length > 0) { floatingSideUI() }
  if ($('.cate_nav').length > 0) { catecoryUI() }
  if ($('.prd_list_wrap.swiper').length > 0) { PrdSlider() }
  if ($('header').length > 0) { headerScroll() }
  if ($('.page_detail .prd_top_info').length > 0) { prdImgFix() }
  if ($('.page_detail .tab_menu').length > 0) { tabContPos() }
  if ($('.prd_cart_btn').length > 0) { putInCart() }
  if ($('.clickTab').length > 0) {  tabMoveAnchor() }
  if ($('.open_month').length > 0) {  monthPicker() }

  /****** Window Resize ******/
  $(window).resize(function () {
    LineTabMenuInit()
  });

  /****** Tab Menu ******/
  $('.tab_menu .tab_list').click(function () { tabMenu(this) });
  function tabMenu(el) {
    var tab = $(el).parents('.tab_menu');
    var activeTab = $(el).attr('data-tab');
    $(el).siblings('li').removeClass('current');
    $(el).addClass('current');
    tab.next('.tab_cont').find('.tab_cont_item').removeClass("current");
    tab.next('.tab_cont').find('#' + activeTab).addClass("current");

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
  $('.btn_toggle').click(function () {
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
  function fileUploader() {
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
  };

  // 상품 담기
  if ($('.prd_list_wrap.ir').length > 0 ) {
    $('.prd_box .prd').on('click', function() {
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
  $('.select_box_value').click(function (e) {
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
  $('.input_text[type="file"]').on('change', function(){
    addB(this)
    $(this).css('color', '#222')
  })
  $(".input_text").on('keyup', function () { 
    addB(this)
  });
  function addB(el){
    if($(el).parents('label').find('button').length){
      return false
    }
    if(!$(el).parents('label').find('.ico_close_circle').length){
      $(el).parent('label').append(`<button class="ico_close_circle"></button>`)
    }
  }
}
/****** Modal ******/
function modalUI(){
  $('.btn_modal_open').click((e) => { e.preventDefault(); openModal(e.target) }); //open modal

  $('.modal_container').on('click', '.btn_modal_close, .modal_overlay', (e)=>{ //close modal
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
  $('[data-btmsheet]').click(function() {
    if(isMobile){
      $("#"+ $(this).data('btmsheet')).addClass('show');
    }
  });
  $('.btm_sheet_close').click(function() {
    $(this).parents('.btm_sheet').removeClass('show')
  });
}
/* Floating UI */
function floatingSideUI(){
  //expand
  $('.floating_side .anchor').focusin(function(){ 
    $(this).parents('.floating_side').addClass('focus')
  }).focusout(function(){ 
    $(this).parents('.floating_side').removeClass('focus')
  });  
  $('.floating_side .anchor').click(function(e){
    $(this).parents('.floating_side').addClass('is_expanded');
    $("body").addClass("no_scroll");
  })
  $('.floating_side .anchor_close').click(function(){
    $(this).parents('.floating_side').removeClass('is_expanded');
    $("body").removeClass("no_scroll");
  })
  //scrollTop
  $('.floating_side .scrolltop').click(function(){
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
  $(".cate_nav li").click(function(){
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
function PrdSlider(){
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
  
    // Swiper 초기화
    let PrdSwiper = new Swiper(sliderId, {
      autoHeight: true,
      slidesPerView: slidesPerViewValue,
      spaceBetween: spaceBetweenValue,
      pagination: {
        el: sliderId + " .swiper-pagination",
      },
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
  
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if ((st > lastScrollTop) && (lastScrollTop >= 0)) {
      hd.addClass("fixed");
      if( isMainHeader && lastScrollTop > 0){
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
    boxWid = $('.tab_center').outerWidth(),
    boxHalf = $('.tab_center').outerWidth() / 2,
    leftPos = 0,
    // pd = $(el).parent('ul').css('padding-left') * 2,
    selectPos,
    pos;
    $(el).parents('.tab_center').find('.tab_list').each(function() {
    liWid += $(this).outerWidth();
  });
  for (let i=0; i< $(el).index(); i++) {
    leftPos += $(el).parents('.tab_center').find('.tab_list').eq(i).outerWidth();
  }
  selectPos = leftPos + $(el).outerWidth()/2;
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
  let clickTab = $('.tab_menu');
  let headerH = $('header').outerHeight();
  let tabListH = clickTab.outerHeight();
  let moveTab = clickTab.hasClass('clickTab')
  let userAreaH = 0;
  if(!moveTab){return false}
  if($('.page_point').length > 0 ){
    userAreaH = $('.user_area').outerHeight();
    console.log(userAreaH);
  }
  clickTab.find('.tab_list').click(function(){
    let idx = $(this).index();
    let toEl = clickTab.find('.tab_list').length > 0 && $('.toCont').eq(idx);
    $("html, body").animate({
      scrollTop : toEl.offset().top - (headerH + userAreaH)
    },500, 'easeOutBounce')
  })
}

//카트 담기
function putInCart() {
  $('.prd_cart_btn').on('click',function() {
    if($('.prd_put_cart').length == 0) {
      $('.appbar > .inner').append('<div class="prd_put_cart"><div class="aniPut"> <div class="ani_img"><i class="ico_cart_float ico_24"></i></div></div><div class="put_text"><p>나의 장바구니에 담았습니다</p></div></div>')
      $('.prd_put_cart').addClass('active');
      setTimeout(function() {
        $('.prd_put_cart').removeClass('active').remove();
      },4500)
    }
  })
}

function prdImgFix() {
  let winW = $(window).width();
  if(winW < 1024) {
    $(window).on('scroll',function() {
      let scroll = $(this).scrollTop();
      console.log(scroll)
      if(scroll > 0) {
        $('.prd_top_info .prd_img').addClass('fix')
      } else {
        $('.prd_top_info .prd_img').removeClass('fix')
      }
      
    })
  }
}

function tabContPos() {
  let tabContPos = $('.tab_cont').offset().top;
  let headeH = $('header').outerHeight();
  let tabMenuH = $('.tab_menu').outerHeight();
  console.log(tabContPos)
  $('.tab_list ').on('click',function() {
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

function monthPicker() {
  $('.open_month').on('click',function() {
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

