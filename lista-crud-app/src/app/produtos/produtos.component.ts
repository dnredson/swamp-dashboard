import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Produto } from 'src/model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
