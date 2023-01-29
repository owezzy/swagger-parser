import {Component, OnInit} from '@angular/core';
import SwaggerParser from "@apidevtools/swagger-parser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'swagger-parser';

  ngOnInit(): void {

    SwaggerParser.parse('src/assets/swagger-files/petstore.yaml').then(r => console.log(r))
  }
}
