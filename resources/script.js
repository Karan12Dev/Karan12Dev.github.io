$(document).ready(function() {

    $('.tab-link').click(function(){
        $('.tab-link.active').removeClass('active');
        $(this).addClass('active');

        if($(this).hasClass('personal-prj-tab')){
            $('.project-container').fadeOut();
            $('#personal-prj-container').fadeIn();

        }else if($(this).hasClass('professional-prj-tab')){
            $('.project-container').fadeOut();
            $('#professional-prj-container').fadeIn();
        }

    });

});
