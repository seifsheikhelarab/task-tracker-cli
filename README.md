
# Task Tracker CLI

A simple command-line interface (CLI) application for managing tasks. This project allows you to add, update, delete, and list tasks, as well as mark them as "in-progress" or "done." Tasks are stored locally in a `tasks.json` file, ensuring your data persists between runs.

## Features

- Add new tasks
- Update task descriptions
- Delete tasks
- Mark tasks as "in-progress" or "done"
- List tasks based on their status
- Uses a JSON file to store tasks locally
- Handles errors gracefully and ensures data integrity

## Task Properties

Each task in the application has the following properties:

- **id**: A unique identifier for the task
- **description**: A short description of the task
- **status**: The task's status (`todo`, `in-progress`, or `done`)
- **createdAt**: The date and time when the task was created
- **updatedAt**: The date and time when the task was last updated

## Requirements

- [Node.js](https://nodejs.org/) installed on your system
- Basic familiarity with command-line interfaces

## Installation

1. Clone this repository or download the code.
2. Navigate to the project directory:
   ```bash
   cd task-tracker-cli
   ```
3. Make the CLI script executable (optional, for Linux/macOS):
   ```bash
   chmod +x index.js
   ```
4. Ensure you have Node.js installed. You can check by running:
   ```bash
   node -v
   ```

## Usage

Run the CLI by using the `node` command followed by the desired action. Below are the available commands:

### Add a Task
Add a new task with a description:
```bash
task-cli add "Your task description"
```
**Example**:
```bash
task-cli add "Buy groceries"
```

### List All Tasks
List all tasks:
```bash
task-cli list
```

### List Tasks by Status
List tasks based on their status:
- **Todo** tasks:
  ```bash
  task-cli list todo
  ```
- **In-progress** tasks:
  ```bash
  task-cli list in-progress
  ```
- **Done** tasks:
  ```bash
  task-cli list done
  ```

### Update a Task
Update the description of a task using its ID:
```bash
task-cli update <task_id> "Updated description"
```
**Example**:
```bash
task-cli update 1 "Buy groceries and cook dinner"
```

### Delete a Task
Delete a task by its ID:
```bash
task-cli delete <task_id>
```
**Example**:
```bash
task-cli delete 1
```

### Mark a Task as In-Progress
Mark a task as "in-progress" using its ID:
```bash
task-cli mark-in-progress <task_id>
```
**Example**:
```bash
task-cli mark-in-progress 1
```

### Mark a Task as Done
Mark a task as "done" using its ID:
```bash
task-cli mark-done <task_id>
```
**Example**:
```bash
task-cli mark-done 1
```

## Example Workflow

1. Add a task:
   ```bash
   task-cli add "Write a blog post"
   ```
2. Mark it as in-progress:
   ```bash
   task-cli mark-in-progress 1
   ```
3. Update the description:
   ```bash
   task-cli update 1 "Write a blog post about JavaScript"
   ```
4. Mark it as done:
   ```bash
   task-cli mark-done 1
   ```
5. List all done tasks:
   ```bash
   task-cli list done
   ```

## Error Handling

- If the `tasks.json` file is missing or corrupted, it will be automatically initialized with an empty array.
- The CLI provides clear error messages if commands or arguments are invalid.

## Project Structure

```
task-tracker-cli/
├── index.js       # Main CLI script
├── tasks.json     # JSON file for storing tasks
└── README.md      # Project documentation
```


## Roadmap

- Made for [Roadmap.sh](https://roadmap.sh/projects/task-tracker) for their Backend Projects
