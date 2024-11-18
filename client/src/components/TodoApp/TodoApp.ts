import { defineComponent } from 'vue';
import { Task } from '@/types/tasks';
import AddTaskForm from './AddTaskForm.vue';
import TaskList from './TaskList.vue';
import { AxiosResponse } from 'axios';
import { Callback } from '@/types/utils';

const TodoApp = defineComponent({
  name: 'TodoApp',
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  components: {
    AddTaskForm,
    TaskList,
  },
  methods: {
    async getAllTasks(callback?: Callback): Promise<Task[]> {
      try {
        const resp: AxiosResponse<Task[]> = await this.$axios.get(`/tasks`);
        callback?.(resp);

        return resp.data;
      } catch (err) {
        console.error(err);
        return [];
      }
    },
    async getTask(id: string, callback?: Callback) {
      try {
        const resp: AxiosResponse<Task> = await this.$axios.get(`/tasks/${id}`);
        callback?.(resp);

        return resp.data;
      } catch (err) {
        console.error(err);
        return;
      }
    },
    async addTask(title: string, callback?: Callback) {
      try {
        const resp: AxiosResponse<Task> = await this.$axios.post('/tasks', {
          title,
        });

        this.tasks = [resp.data, ...this.tasks];

        callback?.(resp);
      } catch (err) {
        console.error(err);
      }
    },
    async removeTask(id: string, callback?: Callback) {
      try {
        const resp = await this.$axios.delete(`/tasks/${id}`);

        const index = this.tasks.findIndex((task) => task.id === id);
        const tasks = [...this.tasks];
        tasks.splice(index, 1);
        this.tasks = tasks;

        callback?.(resp);
      } catch (err) {
        console.error(err);
      }
    },
    async updateTask(id: string, info: Task, callback?: Callback) {
      try {
        const resp: AxiosResponse<Task> = await this.$axios.patch(
          `tasks/${id}`,
          info,
        );
        const index = this.tasks.findIndex((task) => task.id === id);
        this.tasks[index] = resp.data;

        callback?.(resp);
      } catch (err) {
        console.error(err);
      }
    },
    async toggleCompleteTask(id: string, callback?: Callback) {
      try {
        const resp: AxiosResponse<Task> = await this.$axios.patch(
          `tasks/${id}/complete`,
        );
        const index = this.tasks.findIndex((task) => task.id === id);
        this.tasks[index].isCompleted = resp.data.isCompleted;

        callback?.(resp);
      } catch (err) {
        console.error(err);
      }
    },
  },

  async beforeMount() {
    this.tasks = await this.getAllTasks();
  },
});

export default TodoApp;
