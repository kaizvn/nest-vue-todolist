<script lang="ts" src="./AddTaskForm.ts"></script>

<template>
  <div class="grid grid-cols-1">
    <form @submit.prevent="doSubmit()">
      <div class="grid grid-cols-6 gap-4">
        <div class="md:col-span-5 gap-4 col-span-4">
          <input
            type="text"
            id="title"
            class="py-3 px-4 block w-full rounded-lg bg-neutral-100 text-sm shadow-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
            placeholder="Enter new task"
            v-model="title"
          />
        </div>
        <div class="md:col-span-1 gap-1 text-center col-span-2">
          <button
            class="text-white py-2 px-4 shadow-md w-full rounded bg-blue-400 hover:bg-blue-600 font-semibold"
          >
            +
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
