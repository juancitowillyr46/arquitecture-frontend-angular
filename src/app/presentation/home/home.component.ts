import { Component, OnInit } from '@angular/core';
import { UserAddUseCase } from 'src/app/domain/user/usecase/user-add.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public log = null;

  constructor(private userAddUseCase: UserAddUseCase) {

  }


  ngOnInit(): void {
    this.userAddUseCase.execute(1).subscribe((res) => {
      console.log(res);
      this.log = JSON.stringify(res);
    });
  }

}
