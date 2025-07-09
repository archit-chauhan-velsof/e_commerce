// jQuery.noConflict();

// HEADER FOOTER CALL FUNCTION STARTS
  $(function(){
    $("#header").load("../common-layouts/header.html");
    $("#header_side_cart_item").load("../common-layouts/header-side-cart-item.html");
    $("#top_header").load("../common-layouts/top-header.html");
    $("#header_home").load("common-layouts/header-home.html");
    $("#header_mobile").load("common-layouts/header-mobile.html");
    $("#header_mobile_inner").load("../common-layouts/header-mobile-inner.html");
    $("#header_mobile_inner_kids").load("../common-layouts/header-mobile-inner-kids.html");
    $("#header_mobile_inner_ct").load("../common-layouts/header-mobile-inner-categorty.html");
    $("#header_mobile_inner_ct_has_items").load("../common-layouts/header-mobile-inner-categorty-has-items.html");
    $("#header_mobile_inner_ft").load("../common-layouts/header-mobile-inner-footer-page.html");
    $("#header-kids").load("../common-layouts/header-kids.html");
    $("#header-account").load("../../common-layouts/header-my-account.html");
    $("#track-order-account").load("../../common-layouts/track-order.html");
    $("#track-order-account_2").load("../../common-layouts/track-order-2.html");
    $("#contact_section").load("../common-layouts/contact-section.html");
    $("#contact_section_home").load("common-layouts/contact-section-home.html");
    $("#contact_section_mobile").load("common-layouts/contact-section-mobile.html");
    $("#contact_section_mobile_inner").load("../common-layouts/contact-section-mobile-inner.html");
    $("#contact_section_mobile_inner_inner").load("../../common-layouts/contact-section-mobile-inner-inner.html");
    $("#contact_section_account").load("../../common-layouts/contact-section-account.html");
    $("#left_footer_pane_about_page").load("../common-layouts/left-footer-pane-about-page.html");
    $("#left_footer_pane_media_page").load("../common-layouts/left-footer-pane-media-page.html");
    $("#left_footer_pane_account_page").load("../../common-layouts/left-footer-pane-account-page.html");
    $("#phone_by").load("../common-layouts/phone-by.html");
    $("#phone_by_account").load("../../common-layouts/phone-by.html");
    $("#phone_by_home").load("common-layouts/phone-by.html");
    $("#footer").load("../common-layouts/footer.html");
    $("#footer_home").load("common-layouts/footer-home.html");
    $("#footer_mobile").load("common-layouts/footer-mobile.html");
    $("#footer_mobile_inner").load("../common-layouts/footer-mobile-inner.html");
    $("#footer_mobile_inner_pd").load("../common-layouts/footer-mobile-inner-pd.html");
    $("#footer_mobile_inner_inner").load("../../common-layouts/footer-mobile-inner-inner.html");
    $("#footer_account").load("../../common-layouts/footer-account.html");
  });
// HEADER FOOTER CALL FUNCTION ENDS

// HIDE DIV CSS AND JS STARTS

  function readlessFunction(){
    $("#footer_read_more").hide();
    $("#show").show();
    $("#hide").hide();
  }

  function readmoreFunction(){
    $("#footer_read_more").show();
    $("#show").hide();
    $("#hide").show();
  };

// HIDE DIV CSS AND JS ENDS



// SHOW PASSWORD STARTS

  function showpasswordFunction(){
    if($("#password").attr("type") == "password" || $("#password1").attr("type") == "password"){
      $("#password1").attr("type","text");
      $("#password").attr("type","text");
      $(".hide-pass").css({"display":"block"});
      $(".show-pass").css({"display":"none"});
    } else{
      $("#password").attr("type","password");
      $("#password1").attr("type","password");
      $(".hide-pass").css({"display":"none"});
      $(".show-pass").css({"display":"block"});
    }

  }

// SHOW PASSWORD ENDS


// SIDE CART JS STARTS

	function sideCartFunction() {
		$("#right_box").css({"display":"flex","width":"620px","position":"relative", "flex-direction":"column"});
		$("#side_cart").css({"display":"flex","width":"100%","position":"fixed","z-index":"1111","top":"0","left":"0"});
	}
  function closeFunction() {
    $("#right_box").css({"display":"none","width":"0px"});
    $("#side_cart").css({"display":"none"});
  }


// SIDE CART JS ENDS



// NEWSLETTER JS STARTS

  function showModalFunction() {
    $("#newsletter").css({"display":"block"});
  }
  function hideModalFunction() {
    $("#newsletter").css({"display":"none"});
  }


// NEWSLETTER JS ENDS



// MOBILE HEADER JS STARTS

  function headerOpenFunction() {
    $("#mobile_nav").css({"display":"block"});
  }
  function headerCloseFunction() {
    $("#mobile_nav").css({"display":"none"});
  }


// MOBILE HEADER JS ENDS


// CONTACT US MODAL JS STARTS

  function contactModalOpen() {
    $("#contact_us_modal").css({"display":"block"});
  }
  function contactModalClose() {
    $("#contact_us_modal").css({"display":"none"});
  }


// CONTACT US MODAL JS ENDS


// CONTACT US MODAL JS STARTS

  function uploadslip() {
    $("#uploadslip").css({"display":"block"});
  }
  function uploadCloseFunction() {
    $("#uploadslip").css({"display":"none"});
  }


// CONTACT US MODAL JS ENDS


// LOGIN MODAL JS STARTS

  function loginFunction() {
    $("#login-form").css({"display":"block"});
  }
  function loginCloseFunction() {
    $("#login-form").css({"display":"none"});
  }

  function loginmobileFunction() {
    $("#login-form-mobile").css({"display":"block"});
  }
  function loginmobileCloseFunction() {
    $("#login-form-mobile").css({"display":"none"});
  }


// LOGIN MODAL JS ENDS


// SIGNUP MODAL JS STARTS

  function signupFunction() {
    $("#signup-form").css({"display":"block"});
    $("#login-form").css({"display":"none"});
  }
  function signupCloseFunction() {
    $("#signup-form").css({"display":"none"});
  }
  function loginsignupFunction() {
    $("#signup-form").css({"display":"none"});
    $("#login-form").css({"display":"block"});
  }

  function signupmobileFunction() {
    $("#signup-form-mobile").css({"display":"block"});
    $("#login-form-mobile").css({"display":"none"});
  }
  function signupmobileCloseFunction() {
    $("#signup-form-mobile").css({"display":"none"});
  }
  function loginsignupmobileFunction() {
    $("#signup-form-mobile").css({"display":"none"});
    $("#login-form-mobile").css({"display":"block"});
  }


// SIGNUP MODAL JS ENDS




// LOGIN MODAL JS STARTS

  function loginotpFunction() {
    $("#login-otp").css({"display":"block"});
    $("#login-form").css({"display":"none"});
  }
   function backFunction() {
    $("#login-form").css({"display":"block"});
    $("#login-otp").css({"display":"none"});
  }
  function loginotpCloseFunction() {
    $("#login-otp").css({"display":"none"});
  }

  function loginotpmobileFunction() {
    $("#login-otp-mobile").css({"display":"block"});
    $("#login-form-mobile").css({"display":"none"});
  }
   function backmobileFunction() {
    $("#login-form-mobile").css({"display":"block"});
    $("#login-otp-mobile").css({"display":"none"});
  }
  function loginotpClosemobileFunction() {
    $("#login-otp-mobile").css({"display":"none"});
  }


// LOGIN MODAL JS ENDS




// LOGIN MODAL JS STARTS

  function loginforgotFunction() {
    $("#forgot-password").css({"display":"block"});
    $("#login-form").css({"display":"none"});
  }
   function loginforgotbackFunction() {
    $("#login-form").css({"display":"block"});
    $("#forgot-password").css({"display":"none"});
  }
   function loginforgotfinishFunction() {
    $("#forgot-password-complete").css({"display":"block"});
    $("#forgot-password").css({"display":"none"});
  }
  function loginforgotcloseFunction() {
    $("#forgot-password").css({"display":"none"});
  }

  function loginforgotmobileFunction() {
    $("#forgot-password-mobile").css({"display":"block"});
    $("#login-form-mobile").css({"display":"none"});
  }
   function loginforgotbackmobileFunction() {
    $("#login-form-mobile").css({"display":"block"});
    $("#forgot-password-mobile").css({"display":"none"});
  }
   function loginforgotfinishmobileFunction() {
    $("#forgot-password-complete-mobile").css({"display":"block"});
    $("#forgot-password-mobile").css({"display":"none"});
  }
  function loginforgotclosemobileFunction() {
    $("#forgot-password-mobile").css({"display":"none"});
  }


// LOGIN MODAL JS ENDS




// LOGIN MODAL JS STARTS

   function loginforgotcompletebackFunction() {
    $("#forgot-password").css({"display":"block"});
    $("#forgot-password-complete").css({"display":"none"});
  }
  function loginforgotcompletecloseFunction() {
    $("#forgot-password-complete").css({"display":"none"});
  }

   function loginforgotcompletebackmobileFunction() {
    $("#forgot-password-mobile").css({"display":"block"});
    $("#forgot-password-complete-mobile").css({"display":"none"});
  }
  function loginforgotcompleteclosemobileFunction() {
    $("#forgot-password-complete-mobile").css({"display":"none"});
  }


// LOGIN MODAL JS ENDS



// SORT BY MODAL JS STARTS

    function sortFunction() {
        $("#sort-by").css({"display":"block"});
    }
    function sortCloseFunction() {
        $("#sort-by").css({"display":"none"});
    }

// SORT BY MODAL JS ENDS



// FILTER MODAL JS STARTS

    function filterFunction() {
        $("#filter").css({"display":"block"});
    }
    function filterCloseFunction() {
        $("#filter").css({"display":"none"});
    }

// FILTER MODAL JS ENDS



// SIDE CART MOBILE JS STARTS

  function sideCartMobileFunction() {
    $("#right_box_mb").css({"display":"flex","width":"100%","position":"absolute", "min-height": "50%", "bottom":"0", "height":"unset"});
    $("#side_cart_mb").css({"display":"flex","width":"100%","position":"fixed","z-index":"1111","top":"0","left":"0"});
  }
  function closeMobileFunction() {
    $("#right_box_mb").css({"display":"none","width":"0px"});
    $("#side_cart_mb").css({"display":"none"});
  }


// SIDE CART MOBILE JS ENDS


// INPUT FUNCTION STARTS

  $(document).ready(function(){
    $("input").keyup(function(){
      if($(this).val() == ""){
        $(this).parent().find(".lblchange").css({"display":"none"});
      } else {
        $(this).parent().find(".lblchange").css({"display":"block"});
      }
      
    });
    $("input").each(function(){
      if($(this).val() == ""){
        $(this).parent().find(".lblchange").css({"display":"none"});
      } else {
        $(this).parent().find(".lblchange").css({"display":"block"});
      }
      
    });
  });

// INPUT FUNCTION ENDS


// SEARCH MODAL JS STARTS
  function searchopenFunction() {
    $("#search-modal").css({"display":"block"});
  }
  function searchcloseFunction() {
    $("#search-modal").css({"display":"none"});
  }
  function searchmobileopenFunction() {
    $("#search-modal-mobile").css({"display":"block"});
  }
  function searchmobilecloseFunction() {
    $("#search-modal-mobile").css({"display":"none"});
  }
// SEARCH MODAL JS ENDS



// SEARCH MODAL JS STARTS
  function searchkidsmobileopenFunction() {
    $("#search-modal-kids-mobile").css({"display":"block"});
  }
  function searchkidsmobilecloseFunction() {
    $("#search-modal-kids-mobile").css({"display":"none"});
  }
// SEARCH MODAL JS ENDS



// SEARCH MODAL JS STARTS
  function menSearchFunction() {
    $("#men-search").css({"display":"block"});
    $("#women-search").css({"display":"none"});
    $("#kids-search").css({"display":"none"});
  }
  function womenSearchFunction() {
    $("#men-search").css({"display":"none"});
    $("#women-search").css({"display":"block"});
    $("#kids-search").css({"display":"none"});
  }
  function kidsSearchFunction() {
    $("#men-search").css({"display":"none"});
    $("#women-search").css({"display":"none"});
    $("#kids-search").css({"display":"block"});
  }
// SEARCH MODAL JS ENDS


// MOBILE HEADER JS STARTS

  function menMenuFunction() {
    $("#mobile-menu-items-main").css({"display":"none"});
    $("#submenumen").css({"display":"block", "right":"0", "transition":"1.0s ease-in-out", "opacity":"1"});
  }
  function menMenuBackFunction() {
    $("#submenumen").css({"opacity":"0", "right":"-300px", "transition":"0s ease-in-out", "display":"block"});
    $("#mobile-menu-items-main").css({"display":"block", "transition":"1.0s ease-in-out"});
  }
  function womenMenuFunction() {
    $("#mobile-menu-items-main").css({"display":"none"});
    $("#subwomenumen").css({"display":"block", "right":"0", "transition":"1.0s ease-in-out", "opacity":"1"});
  }
  function womenMenuBackFunction() {
    $("#subwomenumen").css({"opacity":"0", "right":"-300px", "transition":"0s ease-in-out", "display":"block"});
    $("#mobile-menu-items-main").css({"display":"block"});
  }
  function kidsMenuFunction() {
    $("#mobile-menu-items-main").css({"display":"none"});
    $("#menukids").css({"display":"block", "right":"0", "transition":"1.0s ease-in-out", "opacity":"1"});
  }
  function kidsMenuBackFunction() {
    $("#menukids").css({"opacity":"0", "right":"-300px", "transition":"0s ease-in-out", "display":"block"});
    $("#mobile-menu-items-main").css({"display":"block"});
  }
  function designerMenuFunction() {
    $("#mobile-menu-items-main").css({"display":"none"});
    $("#menudesigner").css({"display":"block", "right":"0", "transition":"1.0s ease-in-out", "opacity":"1"});
  }
  function designerMenuBackFunction() {
    $("#menudesigner").css({"opacity":"0", "right":"-300px", "transition":"0s ease-in-out", "display":"block"});
    $("#mobile-menu-items-main").css({"display":"block"});
  }
  function offersMenuFunction() {
    $("#mobile-menu-items-main").css({"display":"none"});
    $("#menuoffer").css({"display":"block", "right":"0", "transition":"1.0s ease-in-out", "opacity":"1"});
  }
  function offersMenuBackFunction() {
    $("#menuoffer").css({"opacity":"0", "right":"-300px", "transition":"0s ease-in-out", "display":"block"});
    $("#mobile-menu-items-main").css({"display":"block"});
  }

// MOBILE HEADER JS ENDS


