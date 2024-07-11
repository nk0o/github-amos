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

  /****** Tab Menu ******/
  $('.tab_menu .tab_list').click(function () { tabMenu(this) });
  function tabMenu(el) {
    var tab = $(el).parents('.tab_menu');
    var activeTab = $(el).attr('data-tab');
    $(el).siblings('li').removeClass('current');
    $(el).addClass('current');
    tab.next('.tab_cont').find('.tab_cont_item').stop().hide();
    tab.next('.tab_cont').find('#' + activeTab).stop().show();

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
      let liWid = 0,
          boxWid = $('.tab_center').outerWidth(),
          boxHalf = $('.tab_center').outerWidth() / 2,
          leftPos = 0,
          pd = $(el).parent('ul').css('padding-left') * 2,
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
        pos = liWid - boxWid + 60;
      }  
      else {
        pos = selectPos - boxHalf + 30;
      }

      //컨테인탭
      if (tab.hasClass('contain_tab')) {
        if (selectPos < boxHalf) {
          pos = 0;
        } else if (liWid - selectPos < boxHalf) {
            pos = liWid - boxWid;
        } 
        else {
            pos = selectPos - boxHalf;
        }
      }
      $(el).parents('.tab_center').find('>ul').animate({scrollLeft:pos});
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
  if ($('.prd_list_wrap.ir').length > 0) {
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
      let count = $(this).parents('.prd_list_wrap').find('.prd_box.checked').length;
      $('.prd_cart_btn .count').text('(' + count + ')');
    });
    
    // 장바구니 버튼
    $('.prd_cart_btn .btn_bottom').on('click',function() {
      let cartTxt = $(this).siblings('.cart_txt');
      if(cartTxt.hasClass('active')) {
        cartTxt.removeClass('active')
      } else {
        cartTxt.addClass('active');
        setTimeout(function() {
          cartTxt.removeClass('active');
        }, 2000);
      }
    })
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
  $(".accord_head").click(function (event) { accordionAction(this, event) });
  function accordionAction(el, event) {
    if($(el).hasClass("no_open")){
      return false;
    }
    if($(el).parent(".accord_list").hasClass("is_plus")){
      if($(event.target).hasClass("ico_plus")){
        onOff(el);
      }
    }else{
      onOff(el);
    }
    function onOff(item){
      if ($(item).hasClass("on")) {
        $(item).removeClass("on");
        $(item).find(".accord_cont").stop().slideUp();
      } else {
        $(item).parent('.accord_list').find('.accord_head').removeClass("on");
        $(item).parent('.accord_list').find(".accord_cont").stop().slideUp();
        $(item).addClass("on");
        $(item).find(".accord_cont").stop().slideDown();
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
  $(".input_text").on('keyup', function () { 
    if($(this).parents('label').find('button').length){
      return false
    }
    if(!$(this).parents('label').find('.ico_close_circle').length){
      $(this).parent('label').append(`<button class="ico_close_circle"></button>`)
    }
  });
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
  $('.floating_side .anchor').click(function(){
    $(this).parents('.floating_side').addClass('is_expanded');
    $("body").addClass("no_scroll");
  })
  $('.floating_side .anchor_close').click(function(){
    $(this).parents('.floating_side').removeClass('is_expanded');
    $("body").removeClass("no_scroll");
  })
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
  const target = $(event);
  if (target.hasClass("active")) {
    target.removeClass("active");
    target.parent('.bottom').find('.ani_liked').remove();
  } else {
    target.addClass("active");
    target.parent('.bottom').append(
      '<div class="ani_liked"><div class="ir_like"></div></div>'
    );
    target.parent('.bottom').find('.ani_liked').addClass('active');
    setTimeout(function() {
      target.parent('.bottom').find('.ani_liked').removeClass('active');
    }, 1000);
  }
}

function catecoryUI(){
  $(".cate_nav li").click(function(){
    if($(this).hasClass("active")){
      return false;
    }else{
      $(".cate_nav li").removeClass("active");
      $(this).addClass("active");
    }
  })
}

function PrdSlider(){
  $(".prd_list_wrap.swiper").each(function (i, v) {
    let sliderName = 'slider' + i;
    $(".prd_list_wrap.swiper")[i].id = sliderName;
    let sliderId = '#' + sliderName;
    let PrdSwiper = new Swiper(sliderId, {
      autoHeight: true,
      slidesPerView: 2.26,
      spaceBetween: -1,    
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