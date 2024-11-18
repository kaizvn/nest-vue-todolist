import { CreateTaskDTO, UpdateTaskDTO } from './tasks.dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTask() {
    return this.taskService.getAllTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() { title, desc }: CreateTaskDTO): Task {
    return this.taskService.createTask(title, desc);
  }

  @Patch('/:id')
  updateTask(
    @Param('id') id: string,
    @Body() updatingTask: UpdateTaskDTO,
  ): Task | undefined {
    return this.taskService.updateTask(id, updatingTask);
  }

  @Delete('/:id')
  removeTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/complete')
  async toggleCompleteTask(@Param('id') id: string) {
    const task = await this.taskService.getTask(id);

    if (!task) {
      return;
    }

    return this.taskService.updateTask(id, {
      isCompleted: !task.isCompleted,
    });
  }
}
