import {Component, OnInit} from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-package-certification',
  templateUrl: './package-certification.component.html',
  styleUrls: ['./package-certification.component.scss']
})
export class PackageCertificationComponent implements OnInit {

  showPackage = false;
  environments: SelectItem[] = [
    {label: 'DEV', value: 'DEVELOPMENT'},
    {label: 'TEST', value: 'TESTING'},
    {label: 'UAT', value: 'UAT'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
