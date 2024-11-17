import { defineComponent } from 'vue';
import { Task } from '@/types/tasks';
import AddTaskForm from './AddTaskForm.vue';
import TaskList from './TaskList.vue';

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
  provide() {
    return {
      onCreate: this.addTask,
      onRemove: this.removeTask,
      onComplete: this.completeTask,
    };
  },
  methods: {
    async getTasks(): Promise<Task[]> {
      //return this.$axios.get('/tasks');
      return [
        {
          id: '1',
          title: 'my first',
          desc: 'default no description',
        },
      ];
    },
    async addTask(title: string): Promise<Task> {
      const newTask: Task = {
        id: String(Date.now()),
        title,
      };

      this.tasks.unshift(newTask);
      return newTask;
    },
    async removeTask(id: string) {
      const taskIndex = this.tasks.findIndex((task) => task.id === id);
      const _tasks = [...this.tasks];
      _tasks.splice(taskIndex, 1);
      this.tasks = _tasks;

      return;
    },
    async clearTasks() {
      this.tasks = [];
      return;
    },
    async updateTask(id: string, info: Task) {
      return info;
    },
    async completeTask(id: string) {
      const taskIndex = this.tasks.findIndex((task) => task.id === id);
      const _tasks = [...this.tasks];
      _tasks[taskIndex].isCompleted = !_tasks[taskIndex].isCompleted;
      this.tasks = _tasks;

      return;
    },
  },

  async beforeMount() {
    this.tasks = await this.getTasks();
  },
});

export default TodoApp;

// function addTodo() {
//     if (newTodo.value !== "") {
//         todos.value.push({
//             complete: false, text: newTodo.value
//         });
//         newTodo.value = "";
//     }
// }
// // function removeAllTodos() {
// //   todos.value.splice(0, todos.value.length);
// // }
// function completedTodo(todo) {
//     todo.complete = !todo.complete;
// }
