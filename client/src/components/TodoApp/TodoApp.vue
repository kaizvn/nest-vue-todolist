<script src="./TodoApp.ts" lang="ts"></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4 gap-3">
      <div class="mt-10">
        <h1
          class="text-5xl font-semibold text-gray-600 text-center dark:text-white"
        >
          Todo List
        </h1>
        <div class="mt-6">
          <AddTaskForm />
        </div>
        <div class="mt-8">
          <TaskList :tasks="tasks" />
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
