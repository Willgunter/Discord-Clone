import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
    
    showBox: boolean;

    onShowBoxChange(newValue: boolean) {
        this.showBox = newValue;
    }
}
