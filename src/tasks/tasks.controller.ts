import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'task page';
  }

  @Post()
  createTask(@Body() body: createTaskDto) {
    return body;
  }

  @Get('/:id')
  getTask(@Param('id') id: string | number) {
    return id;
  }
}
