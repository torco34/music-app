import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Post()
  async create(@Body(new ValidationPipe()) createTodo: CreateTodoDto) {
    return this.todoService.create(createTodo);
  }
  @Put(':id')
  async updated(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updatedTodo: UpdateTodoDto,
  ) {
    return this.todoService.updated(id, updatedTodo);
  }
  // obtener update

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }
  // obtener update
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }
  // delete
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
