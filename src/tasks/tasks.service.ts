import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';
import { v4 } from 'uuid';
import { UpdateTaskDTO } from './tasks.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks(): Task[] {
    return this.tasks;
  }
  getTask(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }
  createTask(title: string, desc?: string): Task {
    const task: Task = {
      id: v4(),
      title,
      desc,
      isCompleted: false,
      createdAt: new Date().toUTCString(),
    };

    this.tasks.unshift(task);
    return task;
  }

  updateTask(id: string, updatingTask: UpdateTaskDTO): Task | undefined {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex === undefined) {
      return;
    }

    this.tasks[taskIndex] = {
      ...this.tasks[taskIndex],
      ...updatingTask,
      id,
    };

    return this.tasks[taskIndex];
  }

  deleteTask(id: string): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    const _tasks = [...this.tasks];
    _tasks.splice(taskIndex, 1);
    this.tasks = _tasks;

    return this.tasks[taskIndex];
  }
}
