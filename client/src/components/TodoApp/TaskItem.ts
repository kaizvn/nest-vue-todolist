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
      if (this.isEditing) {
        return;
      }

      this.$parent?.$emit('remove-task', id);
    },
    async doComplete(id: string) {
      this.$parent?.$emit('toggle-completeTask', id);
    },
    async doUpdate(id: string, info: { title: string; desc?: string }) {
      this.$parent?.$emit('update-task', id, info, () => this.toggleEditing());
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
