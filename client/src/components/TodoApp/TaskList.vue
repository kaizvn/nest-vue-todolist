<script lang="ts" src="./TaskList"></script>

<template>
  <div class="grid grid-cols-1">
    <div v-if="tasks.length === 0">
      <div class="h-full text-center">
        <p class="text-gray-400">Add your first task!</p>
      </div>
    </div>

    <div
      class="text-lg font-semibold rounded shadow-md h-full dark:shadow-white divide-y divide-black-700 [&:hover>div]:opacity-50"
    >
      <div
        class="grid-col-1 p-2 hover:cursor-pointer hover:!opacity-100"
        v-for="(task, index) in tasks"
        :key="index"
        :class="{
          'bg-gray-200': task.isCompleted,
        }"
      >
        <TaskItem :task="task" />
      </div>
    </div>
  </div>
</template>
