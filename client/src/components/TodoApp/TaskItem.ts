import { Task } from '@/types/tasks';
import { defineComponent, PropType } from 'vue';

const TaskList = defineComponent({
  name: 'TaskItem',
  inject: ['onComplete', 'onRemove'],
  data() {
    return {
      isEditing: false,
      editingTitle: '',
      editingDesc: '',
    };
  },
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  methods: {
    async doRemove(id: string) {
      const removeTask = this.onRemove as (id: string) => void;
      removeTask?.(id);

      return;
    },
    async doComplete(id: string) {
      const completeTask = this.onComplete as (id: string) => void;
      completeTask?.(id);

      return;
    },
    toggleEditing() {
      if (this.task.isCompleted) {
        return;
      }

      const nextState = !this.isEditing;
      this.isEditing = nextState;

      this.editingTitle = nextState ? this.task.title : '';
      this.editingDesc = nextState ? this.task.desc ?? '' : '';
    },
  },
});

export default TaskList;
