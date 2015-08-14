(function($, W, D) {
    var PRODUCTS = {};

    PRODUCTS.UTIL = {
        setProductName: function() {
            $('#detailsModal').on('show.bs.modal', function(event) {
                var button = $(event.relatedTarget)
                var prodName = button.data('product-name');
                var prodRent = button.data('product-rent');
                var prodImgPath = button.data('image-path')
                $('.product-name').html(prodName);
                $('#prodName').val(prodName);
                $('#prodRent').val(prodRent);
                $('#prodImgPath').val(prodImgPath);
            })
        },
        resetForm: function() {
            $('#detailsModal').on('hide.bs.modal', function(e) {
                $('.product-name').html('');
                $('#name').val('');
                $('#email').val('');
                $('#contactNumber').val('');
                $('#address').val('');
                $('#prodName').val('');
                $('#prodRent').val('');

                $("#thanks").slideUp('slow');
                $(".modal-body").slideDown('slow');
                $(".modal-header").show();
            })
        },
        submitForm: function() {

            $('.spinner-container').fadeIn();
            $(".modal-body").slideUp('slow');
            $(".modal-header").hide();
            var usersRef = new Firebase("https://baglandingpage.firebaseio.com/");

            var onComplete = function(error) {
                if (error) {
                    console.log('Synchronization failed');
                } else {
                    $("#thanks").slideDown('slow');

                    $('.spinner-container').fadeOut('slow');
                }
            };

            var name = $('#name').val();
                email = $('#email').val(),
                contactNumber = $('#contactNumber').val(),
                address = $('#address').val(),
                prodName = $('#prodName').val(),
                prodRent = $('#prodRent').val(),
                prodImgPath = $('#prodImgPath').val();
           // var usersRef = ref.child("customers");
            usersRef.push({
                name: name,
                email: email,
                contactNumber: contactNumber,
                address: address,
                prodName : prodName,
                prodRent : prodRent,
                prodImgPath : prodImgPath
            }, onComplete);
        },
        setupFormValidation: function() {
            //form validation rules
            $("#detail-form").validate({
                rules: {
                    name: "required",
                    address: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    contactNumber: {
                        required: true,
                        phoneUS: true
                    }
                },
                messages: {
                    name: "Please enter your Name",
                    email: "Please enter a valid email address",
                    address: "Please enter Delivery Address",
                    contactNumber: {
                        required: "Please enter your Contact Number",
                        phoneUS: "Please enter valid Contact Number"
                    }
                },
                submitHandler: function(form) {
                    PRODUCTS.UTIL.submitForm();
                }
            });
        },
        closeAlertMessage: function() {
            $('.alert-cross').on('click', function() {
                $("#thanks").slideUp(300)
            })
        },
        scrollToProducts: function() {
            $(".carousel-control-down").on('click', function() {
                $('html, body').animate({
                    'scrollTop': $(".product-container").offset().top
                }, 1000);
            });
        },
        removeAlertBox: function() {
            console.log("ddd")
            setTimeout(function() {
                $("#thanks").slideUp(300)
            }, 5000);
        },
        showScrollToTop: function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });
        },
        scollToTop : function (){
            //Click event to scroll to top
            $('.scrollToTop').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        }
    }

    $(D).ready(function($) {
        $("#success-alert").hide();
        PRODUCTS.UTIL.setupFormValidation();
        PRODUCTS.UTIL.closeAlertMessage();
        PRODUCTS.UTIL.scrollToProducts();
        //PRODUCTS.UTIL.removeAlertBox();
        PRODUCTS.UTIL.setProductName();
        PRODUCTS.UTIL.resetForm();
        PRODUCTS.UTIL.showScrollToTop();
        PRODUCTS.UTIL.scollToTop();
    });

})(jQuery, window, document);
