import { Task } from '@/types/tasks';
import { defineComponent } from 'vue';

const AddTaskForm = defineComponent({
  inject: ['onCreate'],
  data() {
    return {
      title: '',
    };
  },
  name: 'AddTaskForm',
  methods: {
    async doSubmit(): Promise<Task> {
      const createTask = this.onCreate as (title: string) => Promise<Task>;
      const newTask = await createTask?.(this.title);
      this.title = '';

      return newTask;
    },
  },
});

export default AddTaskForm;
