jQuery(document).ready(function ($) {

    /**
     * Blocks
     *
     * - Decrypt and show email
     * - Chart.js
     * - Equal height elements
     */

    /**
     * Decrypt and show email
     */

    var var_1, var_2, var_3, var_4;

    var_1 = 'emai';
    var_2 = 'l: daam';
    var_3 = '@daa';
    var_4 = 'm.it';

    $('.mail-btn-js').on('click', function (e) {
        e.preventDefault();
        var html = '<span>' + var_1 + var_2 + var_3 + var_4 + '</span>';
        $(this).parent().find('.email-js').append(html).css({'display': 'inline-block'});
        $(this).hide();
    });

    /**
     * Chart.js
     */

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["March", "April", "May", "June", "July", "August", "September"],
            datasets: [{
                label: "Instagram Followers",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [3800, 4340, 5250, 6230, 7060, 7660, 8130],
            }]
        },

        // Configuration options go here
        options: {}
    });

    /**
     * Equal height elements
     */

    $(function () {
        $('.same-height-1').matchHeight();
        $('.same-height-2').matchHeight();
        $('.same-height-3').matchHeight();
    });

});
