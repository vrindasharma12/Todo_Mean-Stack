import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  todoList: any;
  list: TodoList = new TodoList();
  profileForm = new FormGroup({
    task: new FormControl(''),
    edittask: new FormControl(''),
    _id: new FormControl('')
  });
  constructor(private todoService: TodoService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getList();
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.list.task = this.profileForm.value.task;
    this.todoService.post(this.list).subscribe(res => {
      this.getList();
      this.list.task = '';
    }, error => console.log(error));
    this.profileForm.reset();

  }

  onDelete(id) {
  this.todoService.delete(id).subscribe(res => {
  this.getList();
  }, error => console.log(error));
  }

  onEdit(list) {
    this.profileForm.patchValue({
      edittask: list.task,
      _id: list._id,
    });
  }

  onSave(list, id) {
    const data = {
      task: list
    };
    this.todoService.update(data, id).subscribe(res => {
      console.log(res);
      this.getList();
    });
  }

  getList() {
    this.todoService.getList().subscribe(res => {
      this.todoList = res;
      console.log(this.todoList);
    }, error => {
      console.log(error);
    });
  }
}

class TodoList {
  task: string;
}

