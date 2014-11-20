var Script = function () {

    //morris chart

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
      var tax_data = [
           {"period": "2011 Q3", "Shipped": 407, "New Customers": 4},
           {"period": "2011 Q2", "Shipped": 151, "New Customers": 11},
           {"period": "2011 Q1", "Shipped": 269, "New Customers": 13},
           {"period": "2010 Q4", "Shipped": 246, "New Customers": 11},
           {"period": "2009 Q4", "Shipped": 171, "New Customers": 5},
           {"period": "2008 Q4", "Shipped": 155, "New Customers": 8},
           {"period": "2007 Q4", "Shipped": 226, "New Customers": 5},
           {"period": "2006 Q4", "Shipped": 245, "New Customers": 11},
           {"period": "2005 Q4", "Shipped": 289, "New Customers": 9}
      ];
      var day_data = [
        {"period": "2012-10-01", "Profit": 407, "Loss": 160},
        {"period": "2012-09-30", "Profit": 451, "Loss": 129},
        {"period": "2012-09-29", "Profit": 469, "Loss": 118},
        {"period": "2012-09-20", "Profit": 446, "Loss": 161},
        {"period": "2012-09-19", "Profit": 457, "Loss": 167},
        {"period": "2012-09-18", "Profit": 448, "Loss": 127},
        {"period": "2012-09-17", "Profit": 471, "Loss": 160},
        {"period": "2012-09-16", "Profit": 471, "Loss": 176},
        {"period": "2012-09-15", "Profit": 401, "Loss": 156},
        {"period": "2012-09-10", "Profit": 415, "Loss": 122}
      ];

      Morris.Line({
        element: 'graph',
        data: day_data,
        xkey: 'period',
        ykeys: ['Profit', 'Loss'],
        labels: ['Profit', 'Loss'],
        xLabelAngle: 20
      });

      Morris.Line({
        element: 'hero-graph',
        data: tax_data,
        xkey: 'period',
        ykeys: ['Shipped', 'New Customers'],
        labels: ['Shipped', 'New Customers'],
        lineColors:['#8075c4','#6883a3']
      });

      Morris.Donut({
        element: 'hero-donut',
        data: [
          {label: 'Jam', value: 25 },
          {label: 'Frosted', value: 40 },
          {label: 'Custard', value: 25 },
          {label: 'Sugar', value: 10 }
        ],
          colors: ['#41cac0', '#49e2d7', '#34a39b'],
        formatter: function (y) { return y + "%" }
      });

      Morris.Area({
        element: 'hero-area',
        data: [
          {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
          {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
          {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
          {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
          {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
          {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
          {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
          {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
          {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
          {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
        ],

          xkey: 'period',
          ykeys: ['iphone', 'ipad', 'itouch'],
          labels: ['iPhone', 'iPad', 'iPod Touch'],
          hideHover: 'auto',
          lineWidth: 1,
          pointSize: 5,
          lineColors: ['#4a8bc2', '#ff6c60', '#a9d86e'],
          fillOpacity: 0.5,
          smooth: true
      });

      Morris.Bar({
        element: 'hero-bar',
        data: [
          {device: 'iPhone', geekbench: 136},
          {device: 'iPhone 3G', geekbench: 137},
          {device: 'iPhone 3GS', geekbench: 275},
          {device: 'iPhone 4', geekbench: 380},
          {device: 'iPhone 4S', geekbench: 655},
          {device: 'iPhone 5', geekbench: 1571}
        ],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#6883a3']
      });

      new Morris.Line({
        element: 'examplefirst',
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value'],
        data: [
          {year: '2008', value: 20},
          {year: '2009', value: 10},
          {year: '2010', value: 5},
          {year: '2011', value: 5},
          {year: '2012', value: 20}
        ]
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();




