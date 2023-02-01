$(document).ready(function () {
    
    $("#list").click(function () {
        $(".pop-chack-list-box").fadeIn();
    });
    $(".gray-btn").click(function () {
        $(".pop-chack-list-box").fadeOut();
    });

    $(".people").click(function () {
        $(".people-list-pop").fadeIn();
    });
    $(".people-list-pop .close").click(function () {
        $(".people-list-pop").fadeOut();
    });
    $(function () {
        $(".datepicker").datepicker({language: 'ko-KR', format: 'yyyy-mm-dd'});
        $(".in-header ul li.no").hover(function () {
            $("#sub-header").slideUp(300);
        });
        $(".in-header ul li.bar").hover(function () {
            $("#sub-header").slideDown(300);
        });
        $("#sub-header").mouseleave(function () {
            $("#sub-header").slideUp(300);
        });

    });
});



  function fnCheckAll(checkBoxID, buttonID) {
            var elements = document.getElementsByName(checkBoxID);
            [].forEach.call(elements, function(element) {
                var btnCheckAll = document.getElementById(buttonID);
                if (btnCheckAll.checked) {
                    element.checked = true;
                } else {
                    element.checked = false;
                }
            });
        }
