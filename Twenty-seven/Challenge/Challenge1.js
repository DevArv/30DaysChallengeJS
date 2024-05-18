/* En este ejercicio práctico, crearás métodos adicionales para una singly linked list.

Para este ejercicio, deberás implementar la lógica de algunos métodos de LinkedListRecharged 
que heredará de un LinkedList (SinglyLinkedList.js) previamente creada.

Los métodos que deberás implementar son los siguientes

get(index): este método recibirá un index y retornará el valor del nodo en la posición buscada, 
en caso de recibir un index invalido este retornará null.

insertAt(index, value): este método inserta un valor en la posición especificada.

toArray(): Tomará todos los valores de la singly linked list y los retornará en un array.

removeAt(index): este método elimina el nodo en el index especificado y retorna el valor.

Las pruebas harán uso del método toArray() para comparar resultados.

Ejemplo 1:


Input:
const linkedList = new LinkedListRecharged();

El método append ya se encuentra implementado por lo que no debes preocuparte
linkedList.append("30");
linkedList.append("Días");
linkedList.append("De javascript");

linkedList.get(1)

Output:
"Días"

Ejemplo 2:

Input:
const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insertAt(1, 5)

linkedList.toArray()

Output:
[1, 5, 2, 3]

Ejemplo 3:


Input:
const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.removeAt(1);

linkedList.toArray()

Output:
[1, 3] */

class Node {
    // Este código no debe ser modificado ❌
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Este código no debe ser modificado ❌
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                this.length--;
                return;
            }
            currentNode = currentNode.next;
        }
    }
}

class LinkedListRecharged extends LinkedList {
    
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        let counter = 0;
        while (currentNode) {
            if (counter === index) {
                return currentNode.value;
            }

            currentNode = currentNode.next;
            counter++;
        }
    }

    insertAt(index, value) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === this.length) {
            this.append(value);
            return;
        }

        const NEW_NODE = new Node(value);
        
        if (index === 0) {
            NEW_NODE.next = this.head;
            this.head = NEW_NODE;
        } else {
            let currentNode = this.head;
            let counter = 0;
            while (currentNode) {
                if (counter === index - 1) {
                    NEW_NODE.next = currentNode.next;
                    currentNode.next = NEW_NODE;
                    break;
                }
                currentNode = currentNode.next;
                counter++;
            }
        }
        this.length++;
    }

    toArray() {
        const ARRAY = [];
        let currentNode = this.head;
        while (currentNode) {
            ARRAY.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return ARRAY;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === 0) {
            const VALUE = this.head.value;
            this.head = this.head.next;
            this.length--;
            return VALUE;
        }

        let currentNode = this.head;
        let counter = 0;

        while (currentNode) {
            if (counter === index - 1) {
                const REMOVED_NODE = currentNode.next;
                currentNode.next = REMOVED_NODE.next;

                if (REMOVED_NODE.next) {
                    REMOVED_NODE.next.prev = currentNode;
                }

                this.length--;
                return REMOVED_NODE.value;
            }
            currentNode = currentNode.next;
            counter++;
        }
        return null;
    }
}
