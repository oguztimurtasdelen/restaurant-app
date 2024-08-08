import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-welcome-bar',
  templateUrl: './welcome-bar.component.html',
  styleUrls: ['./welcome-bar.component.scss'],
})
export class WelcomeBarComponent  implements OnInit {
  @Input() userInfo$: UserModel = <UserModel>{};
  defaultAddress: string = 'Ev: 9166/1 Sok. No:1 D:3 Karabağlar-İzmir';

  constructor() { }

  ngOnInit() {}

  findDefaultAddress(userInfo: UserModel): string | null {
    return !!userInfo.address ? userInfo.address.find(address => address.isDefault)?.addressDetails || null : null;
  }

}
