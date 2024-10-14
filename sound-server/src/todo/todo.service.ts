import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';
import { Todo } from './schema/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async create(todo: CreateTodoDto) {
    const createTodo = new this.todoModel(todo);
    return createTodo.save();
  }
  async updated(id: string, todo: UpdateTodoDto) {
    return this.todoModel
      .findByIdAndUpdate(id, todo, {
        new: true,
      })
      .exec();
  }
  async findAll() {
    return this.todoModel.find().exec();
  }
  async findOne(id: string) {
    return this.todoModel.findById(id).exec();
  }
  async remove(id: string) {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
