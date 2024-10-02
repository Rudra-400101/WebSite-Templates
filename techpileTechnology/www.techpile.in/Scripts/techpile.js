




function saverecord() {
    if ($('#name').val() == '') {
        alert('Please enter your name');
        return;
    }

    var obj = {

    }
    $.ajax({
        url: "../st/Insertcertificateform",
        method: "post",
        data: {
            uname: $('#enroll').val(),
            name: $('#name').val(),
            college: $('#college').val(),
            training: $('#trainings').val(),
            startbatch: $('#startbatch').val(),
            technology: $('#technology').val(),
            fromdate: $('#fromdate').val(),
            todate: $('#todate').val(),
            TotalDays: $('#totaldays').val(),
            action: 1
        },
        success: function (data) {
            if (data == 1) {

                $('#savebtn').hide();
                $('#Downlaodcertificate').show();
                $('#frm').hide();
                $('#updatebtn').hide();
                alert(data)
                alert('already applyed');
                //  alert('Pleased show the update button');
            }
            if (data == 2) {

                alert('your form data saved successfully, Please wait for Admin response to allow for Certificate.')
                $('#Downlaodcertificate').hide();
                $('#savebtn').hide();
                $('#updatebtn').show();

            }
            if (data == 3) {
                alert('show certificate link');
                $('#frm').hide();
                $('#savebtn').hide();
                $('#Downlaodcertificate').show();
                $('#updatebtn').hide();
                //alert(data);
                alert('Your Certificate is genereted')
            }
            if (data == 4) {
                alert('Record Updated Successfully !!!');
            }



        },
        error: function (data) {
            alert('err');
        }

    })
}





function UPDATErecord() {
    if ($('#name').val() == '') {
        alert('Please enter your name');
        return;
    }

    var obj = {

    }
    $.ajax({
        url: "../st/Insertcertificateform",
        method: "post",
        data: {
            uname: $('#enroll').val(),
            name: $('#name').val(),
            college: $('#college').val(),
            training: $('#trainings').val(),
            startbatch: $('#startbatch').val(),
            technology: $('#technology').val(),
            fromdate: $('#fromdate').val(),
            todate: $('#todate').val(),
            TotalDays: $('#totaldays').val(),
            action: 2
        },
        success: function (data) {
            if (data == 'Record successfully updated !!') {
                reset();
            }
            alert('Record Update Successfully !!!')

        },
        error: function (data) {
            alert('err');
        }

    })
}


function reset() {
    $('#savebtn').show();
    $('#updatebtn').hide();
    $('#name').val('');
    $('#college').val('');
    $('#training').val('');
    $('#totaldays').val('');
    $('#startbatch').val('');
    $('#technology').val('');
    $('#fromdate').val('');
}


function certificatelink() {
    window.location.href = "../Home/Certificate";
}
//OnlineTraining
