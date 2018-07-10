import { Component , OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  chart;
  closeResult: string;
  constructor(private modalService: NgbModal) {

  }
  ngOnInit() {
    // this.getPieChart();
  }
  open(content) {
    this.modalService.open(content , { size: 'lg'});
  }

  getPieChart() {


  this.chart = new Chart({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }]
    }]
    });
}

getBarchart() {
  this.chart = new Chart({
    chart: {
        type: 'column',

    },
    title: {
        text: 'World\'s largest cities per 2017'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: 0,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population <b>{point.y:.1f} millions</b>'
    },
    series: [{
      pointWidth: 64,
        name: 'Population',
        data: [
            ['Shanghai', 24.2],
            ['Beijing', 20.8]
        ]
    }]
  });
}

}
