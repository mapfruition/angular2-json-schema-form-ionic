import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService, hasOwn } from 'angular2-json-schema-form';

@Component({
  selector: 'toggle-widget',
  templateUrl: 'ionic-toggle.template.html',
})
export class IonicToggleComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: any;
  controlDisabled = false;
  boundControl = false;
  options: any;
  trueValue: any = true;
  falseValue: any = false;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService
  ) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    console.log(this.options);
    this.jsf.initializeControl(this);
    if (this.controlValue === null || this.controlValue === undefined) {
      this.controlValue = false;
      this.jsf.updateValue(this, this.falseValue);
    }
  }

  updateValue(value) {
    if (!!this.options.onChange) {
      this.options.onChange(this.controlValue, this.layoutNode);
    }
    this.options.showErrors = true;
    this.jsf.updateValue(this, value? this.trueValue : this.falseValue);
  }
}
