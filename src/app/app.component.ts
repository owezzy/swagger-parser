import {Component, OnInit} from '@angular/core';
import SwaggerParser from "@apidevtools/swagger-parser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'swagger-parser';
  data: any

  ngOnInit(): void {

    SwaggerParser.parse('http://petstore.swagger.io/v2/swagger.json', (err, api) =>{
      if (err) {
        console.error(err);
      }
      else {
        console.log("API name: %s, Version: %s", api?.info.title, api?.info.version, api);
        this.data = api
      }
    })
  }
}
