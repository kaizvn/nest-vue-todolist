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
    async doSubmit(): Promise<void> {
      if (!this.title.trim()) {
        return;
      }
      this.$emit('create-task', this.title, () => {
        this.title = '';
      });
    },
  },
});

export default AddTaskForm;
