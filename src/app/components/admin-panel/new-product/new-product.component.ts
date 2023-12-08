import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../services/firebase/data.service';
import { Types } from '../../../interfaces/type.enum';

@Component({
  selector: 'csa-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {
  
  @Input() show: boolean = true;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  public productData: FormGroup;
  public types: string[] = Object.values(Types);
  public color: FormArray;
  public image: FormArray;
  public col: FormControl;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) {
    this.types = this.types.filter(res => res !=="All");
    
    this.color = new FormArray(
      [new FormControl("#000")]
    );

    this.image = new FormArray(
      [new FormControl("", Validators.required)]
    );
    this.col = new FormControl("", Validators.required);

    this.productData = new FormGroup({
      brandImg: new FormControl("", Validators.required),
      brandTitle: new FormControl("", Validators.required),
      color: this.color,
      size: this.fb.group(
        {
          '44': [false],
          '46': [false],
          '48': [false],
          '50-52': [false],
          '54': [false],
          '56-58': [false]
        }
      ),
      image: this.image,
      price: new FormControl("", Validators.required),
      sale: new FormControl("", Validators.required),
      female: new FormControl("false", Validators.required),
      male: new FormControl("", Validators.required),
      rating: new FormControl("", Validators.required),
      title: new FormControl("", Validators.required),
      type: new FormControl("Шорти", Validators.required),
    });
  }

  private getKeyByValue(object: { [key: string]: string }, value: string): string {
    return Object.keys(object).find(key => object[key] === value)!;
  }

  onSubmit(form: FormGroup) {
    const key = this.getKeyByValue(Types, form.value.type);
    
    if (form.valid) {
      console.log(form.value);

      let formData = { ...form.value }
      this.dataService.sendData(key, formData);
      form.reset();
      this.close.emit(!this.show);
    }
  }

  public addColor() {
    this.color.push(
      new FormControl("#000")
    )
  }

  public deleteColor() {
    this.color.controls.pop();
  }

  public addImage() {
    this.image.push(
      new FormControl("", Validators.required)
    )
  }

  public deleteImage() {
    this.image.controls.pop();
  }
}
