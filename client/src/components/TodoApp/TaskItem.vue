<script lang="ts" src="./TaskItem.ts"></script>

<template>
  <div class="grid grid-cols-8" :class="{ 'line-through': task.isCompleted }">
    <div v-if="!isEditing" class="col-span-6" @click="doComplete(task.id)">
      <span class="text-gray-600 text-lg font-semibold dark:text-white">
        {{ task.title }}
      </span>
    </div>
    <div v-if="isEditing" class="col-span-6">
      <input
        type="text"
        id="title"
        class="py-3 px-4 block w-full rounded-lg bg-neutral-100 text-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-300"
        placeholder="Title"
        v-model="editingTitle"
      />
    </div>
    <div class="col-span-2 text-right">
      <span class="text-slate-600 px-2" @click="toggleEditing()">
        <FaIcon :icon="['fas', 'edit']"></FaIcon>
      </span>
      <span class="text-slate-600 px-2" @click="doRemove(task.id)">
        <FaIcon :icon="['fas', 'trash']"></FaIcon>
      </span>
    </div>
  </div>
  <div class="grid grid-cols-1 pt-3" :class="{ hidden: !isEditing }">
    <div class="col-span-1">
      <textarea
        id="message"
        rows="4"
        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Write your description here..."
        v-model="editingDesc"
      ></textarea>
    </div>
    <div class="grid grid-cols-6">
      <div class="col-start-5 col-span-2 text-right pt-4">
        <span class="text-green-600 p-2" @click="toggleEditing()">
          <FaIcon :icon="['fas', 'check']"></FaIcon>
        </span>
        <span class="text-red-600 p-2" @click="toggleEditing()">
          <FaIcon :icon="['fas', 'undo']"></FaIcon>
        </span>
      </div>
    </div>
  </div>
</template>
