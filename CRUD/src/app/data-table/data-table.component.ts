import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import metaData from './meta-Data';
import tableData from './table-Data'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public metaData = metaData;
  public dataTable = tableData;
  public editGroup : FormGroup;
  public cols = [{"field":'name', "header":'Name'},{"field":'age', "header":'Age'},{"field":'location', "header":'Location'}]
  public optt = [{"value":'chennai', "label":'CHENNAI'},{"value":'madurai', "label":'MADURAI'},{"value":'trichy', "label":'TRICHY'}]
  display: boolean = false;
  public editForm = {}

  constructor() { }

  ngOnInit(): void {
    metaData.forEach(input_template=>{
      this.editForm[input_template.name]=new FormControl('');
    })
    this.editGroup = new FormGroup(this.editForm);
  }


  showDialog(data: any) {
    metaData.forEach(input_template=>{
      this.editForm[input_template.name]=new FormControl(data[input_template.name],[Validators.pattern(input_template.pattern)]);
    })
    this.editGroup = new FormGroup(this.editForm);
    //console.log(data);
    this.display = true;
}
onSubmit(){
  console.log(this.editGroup.value);
  console.log(this.editGroup);
}
getError(name:string){
  return this.editGroup.get(name);
}
showErr(val:any){
  console.log(val)
}

}
