jQuery(document).ready(function($) {

    // Blocks

    // - Decrypt and show email
    // - Auto resize text areas

    //============================================= Decrypt and show email =============================================

    var var_1, var_2, var_3, var_4;

    var_1 = 'emai';
    var_2 = 'l: daam';
    var_3 = '@daa';
    var_4 = 'm.it';

    $('.mail-btn-js').on('click', function(e) {
        e.preventDefault();
        var html = '<span>'+ var_1 + var_2 + var_3 + var_4 +'</span>';
        $(this).parent().find('.email-js').append(html).css({'display' : 'inline-block'});
        $(this).hide();
    });

    //============================================= /# Decrypt and show email ==========================================

});
