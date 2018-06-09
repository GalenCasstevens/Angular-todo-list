import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoInput = '';
  todoList = [];

  constructor() { }

  ngOnInit() {
  }

  onNewTodo(event) {
    this.todoList.push(this.todoInput);
    this.todoInput = '';
  }
}
