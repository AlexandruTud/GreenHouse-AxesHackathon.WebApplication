import { Component, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { AuthService } from 'src/app/_core/services/auth.service';
import { Electronic } from 'src/app/_core/models/electronic';
import { Router } from '@angular/router';
//import { ChartOptions, ChartType } from 'chart.js';
//import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-myelectronics',
  templateUrl: './myelectronics.component.html',
  styleUrls: ['./myelectronics.component.scss']
})
export class MyelectronicsComponent {
  cards: Electronic[] = [];

  isVisible = false;
  isConfirmLoading = false;
  pollute = true;

  partners = [
    "Electronics Corp",
    "Tech Innovators Ltd",
    "Digital Devices Inc",
    "Gadget Creations LLC",
    "Electronic Solutions Co",
    "Innovative Electronics Ltd",
    "Digital Tech Enterprises",
    "Device Manufacturers Inc",
    "Advanced Electronics Ltd",
    "Tech Gadgets Corporation"
  ]

  categories = [
    "Smartphones",
    "Laptops",
    "Tablets",
    "Cameras",
    "Televisions",
    "Headphones",
    "Speakers",
    "Wearable Devices",
    "Gaming Consoles",
    "Accessories"
  ]

  clasaEnergetica = [
    "Energetica 1", "Energetica 2", "Energetica 3", "Energetica 4", "Energetica 5"
  ]

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    var userId = localStorage.getItem("userId");
    this.authService.getElectronics(userId).subscribe({
      next: (response) => {
        for (let i = 0; i < 1000; i++) {
          if (response[i] == null) {
            break;
          }
          this.cards[i] = response[i];
        }
      }
    });
    this.authService.getCO2(userId).subscribe({
      next: (response) => {
        console.log(response[0]);
        if (response[0] > 300) {
          this.pollute = false;
        }
      }
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  display = true;
  displayModal(): void {
    if (this.display == false) {
      this.display = true;
    }
    else {
      this.display = false;
    }
  }

  registerElectronic() {
    var e = document.getElementById("partnerName") as HTMLSelectElement;
    var partnerName = e.options[e.selectedIndex].text;

    e = document.getElementById("categoryName") as HTMLSelectElement;
    var categoryName = e.options[e.selectedIndex].text;

    e = document.getElementById("energyClass") as HTMLSelectElement;
    var energyClass = e.options[e.selectedIndex].text;

    var model = (<HTMLInputElement>document.querySelector("#model")).value;
    var series = (<HTMLInputElement>document.querySelector("#series")).value;
    var energyConsume = (<HTMLInputElement>document.querySelector("#energyConsume")).value;

    var userId = localStorage.getItem("userId");

    const payload = {
      idUser: userId,
      namePartner: partnerName,
      categoryName: categoryName,
      model: model,
      series: series,
      energeticClass: energyClass,
      energyUsed: energyConsume
    };

    this.authService.registerElectronic(payload).subscribe({
      next: () => {
        var c: Electronic = {
          categoryName: categoryName,
          model: model,
          series: series,
          energeticClass: energyClass,
          energyUsed: energyConsume,
          namePartner: partnerName,
          idUser: parseInt(userId),
          idElectronic: 0
        };
        this.cards.push(c);
        this.handleCancel();
        location.reload();
      }
    });
  }

  cardEmitter(event) {
    const payload = {
      IdDevice: event
    }
    this.authService.deleteElectronic(payload).subscribe({
      next: () => {
        this.cards.splice(event, 1);
      }
    })
  }

  signOut() {
    localStorage.removeItem('userId');
    this.router.navigate(['/auth/login']);
  }

  /*dps = [{ x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }];
  chart: any;

  chartOptions = {
    exportEnabled: true,
    title: {
      text: "Your Electronics Pollution"
    },
    data: [{
      type: "line",
      name: "Pollution Data",  // Numele pentru seria de date
      showInLegend: true,
      dataPoints: this.dps
    }]
  }
  getChartInstance(chart: object) {
    this.chart = chart;

    <div>
                <canvasjs-chart [options]="chartOptions" [styles]="{width: '1000px', height:'360px'}"
                    (chartInstance)="getChartInstance($event)"></canvasjs-chart>
            </div>

  }*/


}
