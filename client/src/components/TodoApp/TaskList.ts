import { Task } from '@/types/tasks';
import { defineComponent, PropType } from 'vue';
import TaskItem from './TaskItem.vue';

const TaskList = defineComponent({
  name: 'TaskList',
  components: { TaskItem },
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      default(): Task[] {
        return [];
      },
    },
  },
  methods: {},
});

export default TaskList;
