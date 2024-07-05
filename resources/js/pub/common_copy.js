$(document).ready(function () {
  if($('.lnb').length > 0 ) lnbFunc();
  if($('.gnb').length > 0 ) gnbFunc();
  /******** slimScroll ********/
  //slimScroll
  $('.slim_scroll').slimScroll({
    width: 'auto',
    height: '100%',
    distance: '4px',
    size: '8px',
    color: '#d6dae1',
    start: 'top',
    railVisible: false,
    opacity: 1,
    wheelStep: 8,
    disableFadeOut: true,
    position: 'right',
    alwaysVisible: true,
    allowPageScroll: false,
  });
  $('.slim_scroll').trigger( "mouseover" );    
  /******** Select Box ********/
  $(document).on('click', '.select_box_value', function (e) {
      $('.select_box').removeClass('on');
      const t = $(this);
      selectBoxDown(t);
  });
  $(document).on('click', '.select_box_list a', function (e) {
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
  }
  function selectBoxDownAction(el) {
      $(el).parents('.select_box_list').find('li').not('.disabled').children('a').not('.text-primary')
          .removeClass('selected');

      if (!$(el).parent('li').hasClass('disabled')) {
          $(el).addClass('selected');
      }
      $(el).parents('.select_box').removeClass('on')
  }
  function dropDownClose() {
      $('.select_box').removeClass('on');
  }
  //셀렉트 값 넣기    
  function SelectBoxChange(selectItem) {
      var $cloneEle = $(selectItem).parents('.select_box').find('.select_box_value').children('span').children();
      var selectText = $(selectItem).text();
      clearInput(selectItem);
      $(selectItem).parents('.select_box').find('.select_box_value').children('span').text(selectText);
      $(selectItem).parents('.select_box').find('.select_box_value').children('span').append($cloneEle);
  }        
  function clearInput(obj) {
      $(obj).parents('.select_box').find('.select_box_value').children('span').text("");
  }
  

 /******** DatePicker ********/
  $(".date_picker .input_calendar").datepicker({
      monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      // monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      dayNamesMin: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      minDate: "-12M",                   
      dateFormat : 'yy.mm.dd',
      showMonthAfterYear:true,
      firstDay: 1,
      beforeShow: function(input) {
          var i_offset= $(input).offset(),
              i_height= $(input).height();
          setTimeout(function(){
              $('#ui-datepicker-div').css({'top':i_offset.top + i_height, 'bottom':'', 'left':i_offset.left}); 
          })
      }
  });


  /******** 검색옵션 ********/    
  $(document).ready(function(){            
      $('.search_option_btn').click(function(){
          var $searchOption = $(this).parents('.search_option');
          var $searchResult = $(this).parents('.row').next('.row').find('.search_result');

          if($searchOption.hasClass('show')){                    
              $searchOption.removeClass('show').addClass('hide');
              $searchResult.addClass('top')
          }else{
              $searchResult.removeClass('top')
              $searchOption.addClass('show').removeClass('hide');                
          }
      })
  });

  /******** Input, Form ********/
  //Tab Menu
  $(function() {
      $('.tab_menu .tab_list').click(function() {
          var activeTab = $(this).attr('data-tab');
          $(this).parents('.tab_menu').find('.tab_list').removeClass('current');
          //$('.price_cont').removeClass('current'); 탭 내용
          $(this).addClass('current');
          $('.' + activeTab).addClass('current');
      })
  });

  function tabOn2(){
      $('.tab_list li').removeClass('current');
      $(this).addClass('current');
      tabBar2();
  };

  $(document).on("click", ".tab_list > li", tabOn2);

  function tabBar2(){

      if ( $(".line_tab").length > 0 ){
          $(".line_tab").each(function(){
              if ( $(".tab_bar").length < 1 ){
                  $(this).append("<div class='tab_bar'></div>");
              };
              var bar = $(".tab_bar");
              var liWidth = $(this).find(".current").outerWidth();
              var marginLeft = parseInt($(this).find(".current").css("margin-left"));
              var left = $(this).find(".current").position().left + marginLeft;
              bar.css({ "width": liWidth, "left": left });
          });
      };
  };
  
  tabBar2();
  
  //Input - 비밀번호(show/hide)
  $('.input_pw button').click(function(){
      if($(this).parents('.input_pw').hasClass('hide')){
          $(this).prev('input').attr('type','text');
          $(this).parents('.input_pw').removeClass('hide');
          $(this).addClass('ico_input_hide').removeClass('ico_input_show');
      }else{
          $(this).prev('input').attr('type','password');
          $(this).parents('.input_pw').addClass('hide');
          $(this).removeClass('ico_input_hide').addClass('ico_input_show');
      }
  })
  //Toggle button
  $('.btn_toggle').on('click', function() {        
      $(this).toggleClass('on')
  });

  // Modal 
  let openModalBtn = $('.btn_modal_open');
  let modalContainer = $('.modal_container');

  openModalBtn.click((e) => { e.preventDefault(); openModal(e.target) }); //open modal
  modalContainer.on('click', '.btn_modal_close, .modal_overlay', (e)=>{ //close modal
    e.preventDefault();
    closeModal(e.target);
  })   
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


//check box
let allCheck = $('.allCheck'),
    checkBox = $('[data-target-check]');

allCheck.on('click', function(){
  $(this).parents('[data-check-parent]').find(checkBox).prop('checked', this.checked);
});

checkBox.on('click', function (){
  let checkedLen = $(this).parents('[data-check-parent]').find('[data-target-check]:checked').length,
      checkBoxLen = $(this).parents('[data-check-parent]').find(checkBox).length;
  
    if( checkedLen == checkBoxLen ) {
      $(this).parents('[data-check-parent]').find(allCheck).prop('checked',true);
    } else {
      $(this).parents('[data-check-parent]').find(allCheck).prop('checked',false);
    }
});


}) //ready


//GNB
function gnbFunc(){
  var speed = 200;
  var gnbList = $('.gnb_dep1 > li');

  $(gnbList).on("mouseenter", function (e) {
    var isOpen = $(this).hasClass("open");
    if (!isOpen) {
      $(this).addClass("open");
      $(this).children(".gnb_dep2").stop().slideDown(speed)
    };
    return false;
  }).on("mouseleave", function (e) {
    var isOpen = $(this).hasClass("open");
    if (isOpen) {
      $(this).removeClass("open")
      $(this).children(".gnb_dep2").slideUp(speed)
    };
    return false;
  })
}

//LNB
function lnbFunc(){
  var winH = window.innerHeight,
    docH = document.documentElement.clientHeight,
    winScrollBarH = winH - docH,
    lnbCollapsedBtn= $(".lnb_btn_toggle");
    lnbCollapsedBtn.on("click", function (e) {
      lnbCollapsedCheck = $(".lnb_btn_toggle").find('input').is(':checked');
      lnbCollapsedCheck? $('.lnb').addClass('collapsed') : $('.lnb').removeClass('collapsed')
    })

  $('.lnb').css('padding-bottom', winScrollBarH);
  $('.lnb_bottom').css('bottom', winScrollBarH);

  var speed = 300;
  var lnbList = $('.lnb_list li');
  var depth2 = $('.lnb .depth_2');

  $(lnbList).on("click", function (e) {
    var isOn = $(this).hasClass("on");
    if (isOn) {
      if ($(this).parents('ul').hasClass('depth_2')) {
        $(this).parents('.depth_2 li').removeClass("on");
      } else {
        $(this).removeClass("on").find('.depth2').slideUp(speed);
      }
    } else {
      if ($(this).parents('ul').hasClass('depth_2')) {
        $(this).parents('.depth_2 li').addClass("on");
      } else {
        $(this).addClass("on").find('.depth2').slideDown(speed);
      }
    }
    return false;
  });
  
}

// 인풋박스 복사
function inputClone() {
  let cloneRow = $('.input_clone .clone_row'),
  cloneLen = cloneRow.length,
  maxLen = 4;

  $(document).on('click', '.btn_clone', function (){
    if(cloneLen <  maxLen - 1) {
      cloneLen++;
      let clone = cloneRow.clone();
      $('.input_area').append(clone);
      clone.find('input').val('');
      clone.find('button').removeClass('btn_clone').addClass('del_clone');
      clone.find('button').append('<i class="ico_subtract"></i>');
      clone.find('.ico_add').remove();
    } 
  });

  $(document).on('click', '.del_clone', function() {
    if (cloneLen > 1 ) {
      $(this).closest('.clone_row').remove();
      cloneLen--;
    }
  });
}
