import { Component, inject } from '@angular/core';
import { LocalStorageService } from '../../services/crud.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud.component.html',
})

export class CrudComponent {
  public formBuild = inject(FormBuilder);
  // el validator me estaba funcionando pero no se que paso
  // me toco validarlo 'rapido'
  public crudForm: FormGroup = this.formBuild.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  items: any[] = [];
  editingId: number | null = null;

  constructor(private localStorageService: LocalStorageService) {
    this.items = JSON.parse(localStorage.getItem('items') || '[]');
  }

  ngOnInit() {
    this.crudForm = this.formBuild.group({
      name: [''],
    });
    this.loadItems();
  }

  loadItems() {
    this.items = this.localStorageService.getItems();
  }

  addItem() {    
    // validacion rapida xd
    if (this.crudForm.value.name == '') {
      alert('El campo no puede estar vacio');
      return;
    } else {
      const newItem = {
        id: new Date().getTime(),
        name: this.crudForm.value.name,
      };
      this.localStorageService.addItem(newItem);
      this.crudForm.reset();
      this.loadItems();
    }
  }

  editItem(item: any) {
    this.crudForm.patchValue({ name: item.name });
    this.editingId = item.id;
  }

  updateItem() {
    // otra validacion rapida
    if (this.crudForm.value.name == '') {
      alert('El campo no puede estar vacio');
      return;
    } else {
      const updatedItem = {
        id: this.editingId,
        name: this.crudForm.value.name,
      };
      this.localStorageService.updateItem(updatedItem);
      this.crudForm.reset();
      this.editingId = null;
      this.loadItems();
    }
  }

  deleteItem(id: number) {
    this.localStorageService.deleteItem(id);
    this.loadItems();
  }
}
