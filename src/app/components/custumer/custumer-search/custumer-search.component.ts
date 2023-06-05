import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { needConfirmation } from 'src/app/decorator/confirm-dialog.decorator';
import { Custumer } from 'src/app/models/custumer/custumer';
import { CustumerService } from 'src/app/services/custumer/custumer.service';

@Component({
  selector: 'app-custumer-search',
  templateUrl: './custumer-search.component.html',
  styleUrls: ['./custumer-search.component.css']
})
export class CustumerSearchComponent implements OnInit {
  clientes: Custumer[] = [];
  displayedColumns: string[] = ["id", "name", "obs", "acoes"];

  constructor(private service: CustumerService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.clientes = resposta;
    });
  }
  findByName(){
    
  }

  @needConfirmation()
  deleteCustumer(id: number){
    this.service.delete(id).subscribe(() => this.findAll());
  }
}
