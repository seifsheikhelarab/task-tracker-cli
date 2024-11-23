#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "tasks.json");

function readTasks() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }

  const data = fs.readFileSync(filePath, "utf-8");

  try {
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

const args = process.argv.slice(2);
const command = args[0];
const taskDescription = args[1];

function addTask(description) {
  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`Task added successfully (ID: ${newTask.id})`);
}

function listTasks(filter = null) {
  const tasks = readTasks();
  const filteredTasks = filter ? tasks.filter(task => task.status === filter) : tasks;
  filteredTasks.forEach(task => {
    console.log(`[${task.id}] ${task.description} - ${task.status}`);
  });
}

function updateTask(id, description) {
  const tasks = readTasks();
  const task = tasks.find(task => task.id === Number(id));
  if (!task) return console.error("Task not found!");
  task.description = description;
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(`Task updated successfully (ID: ${task.id})`);
}

function markTask(id, status) {
  const tasks = readTasks();
  const task = tasks.find(task => task.id === Number(id));
  if (!task) return console.error("Task not found!");
  task.status = status;
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(`Task marked as ${status} (ID: ${task.id})`);
}

function deleteTask(id) {
  const tasks = readTasks();
  const filteredTasks = tasks.filter(task => task.id !== Number(id));
  if (tasks.length === filteredTasks.length) {
    return console.error(`Task with ID ${id} not found!`);
  }
  writeTasks(filteredTasks);
  console.log(`Task deleted successfully (ID: ${id})`);
}

if (!command) {
  console.error("No command provided. Use add, update, delete, mark-in-progress, mark-done, or list.");
  process.exit(1);
}

switch (command) {
  case "add":
    if (!taskDescription) {
      console.error("Please provide a task description.");
      process.exit(1);
    }
    addTask(taskDescription);
    break;
  case "update":
    if (!args[1] || !args[2]) {
      console.error("Please provide task ID and new description.");
      process.exit(1);
    }
    updateTask(args[1], args[2]);
    break;
  case "delete":
    if (!args[1]) {
      console.error("Please provide task ID.");
      process.exit(1);
    }
    deleteTask(args[1]);
    break;
  case "mark-in-progress":
    if (!args[1]) {
      console.error("Please provide task ID.");
      process.exit(1);
    }
    markTask(args[1], "in-progress");
    break;
  case "mark-done":
    if (!args[1]) {
      console.error("Please provide task ID.");
      process.exit(1);
    }
    markTask(args[1], "done");
    break;
  case "list":
    listTasks(args[1]); // args[1] can be "done", "todo", or "in-progress"
    break;
  default:
    console.log("Unknown command. Use add, update, delete, mark-in-progress, mark-done, or list.");
}
