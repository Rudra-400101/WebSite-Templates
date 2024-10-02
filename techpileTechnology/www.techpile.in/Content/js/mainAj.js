$(function () {

    //Feedback form image validateion
    $('.form').on('submit', function () {
        var fullpath = $("#pic").val();
        var name = fullpath.substring(fullpath.lastIndexOf('\\') + 1);
        var ext = fullpath.substring(fullpath.lastIndexOf('.') + 1).toLowerCase();
        if (fullpath == "") {
            $("#error").html('').fadeIn(10);
            $("#error").html("<span style='color:red;'>Please Select Your Picture!</span>").delay(4000).fadeOut(1000);
            return false;
        }
        if (ext == "jpg" || ext == "png" || ext == "jpeg") {
            $("#error").html('').fadeIn(10);
        }
        else {
            $("#error").html('').fadeIn(10);
            $("#error").html("<span style='color:red;'>Select valid Picture.( jpg, jpeg, png )</span>").delay(4000).fadeOut(1000);
            return false;
        }
    });

    //Toggel Div Filter div of placement
    $(".filterPlacedStuident").on('click', function () {
        $(".filterPlacedStuidentDiv").slideToggle();
    });

    //Sort gallery items
    $(document).on("click", "ul.shortBtnAj li", function () {
        $("ul.shortBtnAj li").removeClass("active");
        $(this).addClass('active');
        var toShow = $(this).attr('data-target');
        if (toShow != 'all') {
            $(".ourGallery .gVideo").hide();
            $(".ourGallery .gVideo." + toShow).show();
        } else {
            $(".ourGallery .gVideo").show();
        }
    });

    //Open lightbox of gallery
    $(".open-lightBox").on("click", function () {
        var newSrc = $(this).children('img').prop('src');
        $('.lightBox').fadeIn();
        $('.lightBox').children('img').prop('src', newSrc);
    });

    //Close Light box
    $(".lightBox").on("click", function () {
        $(this).fadeOut();
    });
    $(".lightBox .closeBtn").on("click", function () {
        $(this).parent().fadeOut();
    });

    //course review form star validation
    $('.courseReview').on('submit', function () {
        var givenStar = $(".starInput").val();
        if (givenStar == "") {
            $("#error").html('').fadeIn(10);
            $("#error").html("<span style='color:red;'>*Star rating is required!</span>").delay(4000).fadeOut(1000);
            return false;
        } else {
            $("#error").html('').fadeIn(10);
            return true;
        }
    });

    //Give an star in input box
    $('.ratingAj a').on('click', function () {
        $(".starInput").val($(this).attr('data-target'));
    });

    //Filter placedStudent
    $('.filterStForm').on('submit', function () {
        var place_collegeName = $(".place_collegeName").val();
        var place_year = $(".place_year").val();
        var sbmBtn = $('.filterStForm input[type="submit"]');
        var loadingImg = $('.loadingGif');
        sbmBtn.hide();
        loadingImg.show();
        $.ajax({
            url: '../Home/filterPlacedStudent',
            type: 'post',
            data: { 'place_collegeName': place_collegeName, 'place_year': place_year },
            success: function (ress) {
                //$(".filterPlacedStuidentDiv").slideUp();
                sbmBtn.show();
                loadingImg.hide();
                $('.filterHere').empty().append(ress);
            }
        });
        return false;
    });

    //show hide certificate form 
    $("input[name='certifiacteRadio']").on('click', function () {
        var radiio = $("input[name='certifiacteRadio']:checked").val();
        $('.c-form').slideUp();
        $('.c-form.' + radiio).slideDown();
    });


    //Filter cirtificate
    $('.filterCirtificate').on('submit', function () {
        var place_collegeName = $('input[name="certifiacteRadio"]:checked').val();
        var st_Enrollment = $('.st_Enrollment').val();
        var keyWords = $('.keyWords').val();
        var trainingName = $('.trainingNameForC').val();
        var sessionForC = $('.sessionForC').val();
        var sbmBtn = $('.filterCirtificate input[type="submit"]');
        var loadingImg = $('.loadingGif');
        sbmBtn.hide();
        $(".certificateMainOuter").hide();
        $('.certificateTableMain').empty();
        loadingImg.show();
        if (place_collegeName == "enroll") {
            if (st_Enrollment != '') {
                $.ajax({
                    url: '../Home/filterCerticate_Enroll',
                    type: 'post',
                    data: { 'enrollment': st_Enrollment },
                    success: function (ress) {
                        sbmBtn.show();
                        loadingImg.hide();
                        $('.certificateTableMain').empty().append(ress);
                    },
                    error: function () {
                        sbmBtn.show();
                        loadingImg.hide();
                        alert('Opps! Something went wrong. Try again.');
                    }
                });
            } else {
                alert("Enter enrollment number.");
                sbmBtn.show();
                loadingImg.hide();
            }
        }
        else if (place_collegeName == "other") {
            if (keyWords != '' || trainingName != '' || sessionForC != '') {
                $.ajax({
                    url: '../Home/filterCerticate_other',
                    type: 'post',
                    data: { 'keyWords': keyWords, 'training': trainingName, 'session': sessionForC },
                    success: function (ress) {
                        sbmBtn.show();
                        loadingImg.hide();
                        $('.certificateTableMain').empty().append(ress);
                    },
                    error: function () {
                        sbmBtn.show();
                        loadingImg.hide();
                        alert('Opps! Something went wrong. Try again.');
                    }
                });
            } else {
                alert("Please enter your details first (Minimum one input is required).");
                sbmBtn.show();
                loadingImg.hide();
            }
        }
        else {
            alert("First choose the form type. Eg: Enrollment number or Other details.");
            sbmBtn.show();
            loadingImg.hide();
        }
        return false;
    });

    //Genrate Certificate
    $(document).on("click", ".genrateCertificate", function () {
        var btn = $(this);
        //Show loader
        btn.children('img').show();
        var id = btn.attr('data-target');
        if (id != "" ||id!=null) {
            $.ajax({
                url: '../Home/getCertificate',
                type: 'GET',
                contentType: 'application/json;charset=utf-8',
                dataType: 'json',
                data: { 'id': id },
                success: function (ress) {
                    //Hide Loader
                    btn.children('img').hide();
                    var name = ress[0].name;
                    var enroll = ress[0].enroll;
                    var college = ress[0].college;
                    var dayss = ress[0].dayss;
                    var tType = ress[0].tType;
                    var technology = ress[0].technology;
                    var tGrade = ress[0].tGrade;
                    var date = ress[0].date;
                    $("#enrollId").val(enroll);
                    $("#sName").val(name);
                    $("#college").val(college);
                    $("#dayss").val(dayss);
                    $("#tType").val(tType);
                    $("#technology").val(technology);
                    $("#tGrade").val(tGrade);
                    $("#date").val(date);
                    $(".certificateMainOuter").show();
                    $("#cirtificateOuter").css('visibility', 'visible');
                    $(".hideDownloadBtn").show();
                    $('html, body').animate({ scrollTop: ($('.certificateMainOuter').offset().top - 80 ) }, 'slow');

                },
                error: function () {
                    //Hide Loader
                    btn.children('img').hide();
                    $(".certificateMainOuter").hide();
                    alert('Opps! Something went wrong. Try again.');
                }
            });
        } else {
            //Hide Loader
            btn.children('img').hide();
            $(".certificateMainOuter").hide();
            alert("Sorry! Unable to genrate certificate. Try again");
        }
    });


});