export type CreateTaskDTO = {
  title: string;
  desc: string;
};

export type UpdateTaskDTO = {
  title?: string;
  desc?: string;
  isCompleted?: boolean;
};
