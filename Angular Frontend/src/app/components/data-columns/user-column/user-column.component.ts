import { Component } from '@angular/core';
import { ConfigService } from 'src/services/config.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-column',
  templateUrl: './user-column.component.html',
  styleUrls: ['./user-column.component.css']
})
export class UserColumnComponent {

    constructor(public configService: ConfigService) {}

    ngOnInit() {
      this.refreshUserList();
    }
  
    refreshUserList() {
  
      this.configService.getUserList().subscribe((res) => {
            this.configService.users = res as User[];
      });

    }
}
