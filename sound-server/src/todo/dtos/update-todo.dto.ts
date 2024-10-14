import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoStatus } from '../schema/todo.schema';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;
}
