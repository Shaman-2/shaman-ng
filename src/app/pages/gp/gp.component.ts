import { Component, OnInit } from '@angular/core';
import {FormMetadata} from "../../services/form/form.class";
import {Router} from "@angular/router";
import {FormService} from "../../services/form/form.service";

@Component({
  selector: 'app-gp',
  templateUrl: './gp.component.html',
  styleUrls: ['./gp.component.css']
})
export class GpComponent implements OnInit {

  private formMetadata: FormMetadata;

  constructor(
    private router: Router,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.formMetadata = this.formService.get();
  }

  issueRefundRequest() {
    console.log(JSON.stringify(this.formMetadata));

    this.formService.set(this.formMetadata);
    this.router.navigateByUrl('clientcheck');
  }
}