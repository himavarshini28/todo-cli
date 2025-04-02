# Todo CLI

Hey Developer! 👋 Here is your Todo Manager – a simple and efficient CLI to manage your tasks directly from the terminal.

A simple command-line interface (CLI) application to manage your to-do list using Node.js and Commander.js.

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/himavarshini28/todo-cli.git
cd todo-cli
```

### 2. Install Dependencies

```sh
npm install commander fs
```

### 3. Link the CLI Globally

```sh
npm link
```

This will allow you to use the `todo` command globally in your terminal.

## Usage

### Add a Todo

```sh
todo add "Buy groceries"
```

**Output:**

```sh
Added todo: Buy groceries
```

### List All Todos

```sh
todo list
```

**Output:**

```sh
1 | Buy groceries | false
2 | Complete assignment | false
```

### Delete a Todo

```sh
todo delete <id>
```

Example:

```sh
todo delete 1
```

**Output:**

```sh
Todo deleted: Buy groceries
```

### Mark a Todo as Completed

```sh
todo complete <id>
```

Example:

```sh
todo complete 2
```

**Output:**

```sh
Todo completed: Complete assignment
```

### List Only Incomplete Todos

```sh
todo incomplete
```

**Output:**

```sh
1 | Buy groceries | false
```

## File Storage

The CLI stores todos in a `todo.json` file in the project directory.

## Uninstall

To remove the CLI globally, run:

```sh
npm unlink
```


