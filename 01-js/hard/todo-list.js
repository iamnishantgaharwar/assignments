/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor ( alltodos ) {
    this.alltodos = []
  }

  add(todo) {
    this.alltodos.push(todo)
  }
  remove(indexOfTodo) {
    // indexOfTodo -= 1;
    if (indexOfTodo >= 0 && indexOfTodo < this.alltodos.length){
      this.alltodos.splice(indexOfTodo, 1)
    }
  }
  update(index, updatedTodo) {
    // index -= 1;
    if (index >= 0 && index < this.alltodos.length) {
      this.alltodos[index] = updatedTodo;
    }
  }
  getAll() {
    return this.alltodos
  }
  get(indexOfTodo) {
    // indexOfTodo -= 1;
    if (indexOfTodo >= 0 && indexOfTodo < this.alltodos.length){
      return this.alltodos[indexOfTodo]
    } 
    return null;
  }
  clear() {
    this.alltodos = []
  }
}

const todobolte = new Todo ();
todobolte.add("muje ye karna hai 1")
todobolte.add("muje ye karna hai 2")
todobolte.add("muje ye karna hai 3")
todobolte.add("muje ye karna hai 4")
todobolte.remove(4)

todobolte.get(3)
console.log(todobolte.getAll(), todobolte.get(3));

module.exports = Todo;
