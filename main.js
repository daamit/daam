jQuery(document).ready(function($) {

    /**
     * Blocks
     *
     * - Decrypt and show email
     * - Chart.js
     */

    /**
     * Decrypt and show email
     */

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

    /**
     * Chart.js
     */

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

});
