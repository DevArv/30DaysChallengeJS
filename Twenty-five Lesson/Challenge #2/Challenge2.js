/* En este desafío, debes construir una lista de contactos mediante una hashTable.

Tu objetivo será el de implementar la lógica de la clase ContactList para agregar contactos 
y realizar las operaciones correspondientes.

La hashTable (ContactList) deberá tener los siguientes métodos:

- insert(name, phone): este método recibirá el nombre y el número de teléfono de un contacto 
y agregará este último a la hashTable.

- get(name): este método recibirá el nombre de un contacto y devolverá su número de teléfono. Si el contacto no existe, retornará null.

- retrieveAll(): este método devolverá un array con todos los buckets utilizados en la hashTable.

- delete(name): este método recibirá el nombre de un contacto y eliminará dicho contacto de la hashTable, en caso de no encontrar el name debe retornar null.

El código original ya tiene una implementación del método hash por lo que no te tienes que preocuparte por ello.

Ejemplo 1:

Input:

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

contactList.retrieveAll()

Output: [["Mr michi", "123-456-7890"]]

Ejemplo 2:

Input:

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

contactList.get("Mr Michi")

Output: "123-456-7890"

Ejemplo 3:


Input:

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")
contactList.delete("Mr michi")

contactList.get("Mr Michi")

Output: null */

class ContactList {
    // Constructor de la clase ContactList, recibe como parámetro el tamaño de la tabla hash
    constructor(size) {
      // Se crea un array vacío de tamaño size y se asigna a la propiedad table
      this.table = new Array(size);
      // Se inicializa la propiedad size a 0, para contabilizar el número de contactos almacenados
      this.size = 0;
      // Se asigna el tamaño de la tabla hash a la propiedad numBuckets
      this.numBuckets = size;
    }
  
    // Método hash que calcula el índice en la tabla hash donde se almacena un contacto
    hash(name) {
      let total = 0; // Se inicializa una variable total a 0
      // Se itera sobre cada caracter del nombre del contacto
      for (let i = 0; i < name.length; i++) {
        // Se suma el valor ASCII del caracter actual al total
        total += name.charCodeAt(i);
      }
      // Se devuelve el resultado del cálculo de hash, que es el módulo de la suma total entre el tamaño de la tabla hash
      return total % this.numBuckets;
    }
  
    // Método insert que agrega un nuevo contacto a la tabla hash
    insert(name, phone) {
      // Se calcula el índice en la tabla hash donde se almacena el contacto
      const index = this.hash(name);
      // Si el índice no está vacío, se asume que ya hay un contacto almacenado en ese índice
      if (!this.table[index]) {
        // En ese caso, se crea un array vacío en ese índice para almacenar los contactos
        this.table[index] = [];
      }
      // Se agrega un nuevo contacto al array del índice correspondiente
      this.table[index].push([name, phone]);
      // Se incrementa la propiedad size para contabilizar el nuevo contacto
      this.size++;
    }
  
    // Método get que devuelve el número de teléfono de un contacto por su nombre
    get(name) {
      // Se calcula el índice en la tabla hash donde se almacena el contacto
      const index = this.hash(name);
      // Se obtiene el array de contactos del índice calculado
      const CONTACTS = this.table[index];
      // Si hay contactos en ese índice, se busca el contacto con nombre igual al pasado como parámetro y se devuelve su número de teléfono
      if (CONTACTS) {
        return CONTACTS.find((contact) => contact[0] === name)[1];
      } else {
        // Si no hay contactos en ese índice, se devuelve null
        return null;
      }
    }
  
    // Método retrieveAll que devuelve todos los contactos almacenados en la tabla hash
    retrieveAll() {
      // Se utiliza Object.values para obtener todos los valores del objeto table (los arrays de contactos)
      return Object.values(this.table).flat();
    }
  
    // Método delete que elimina un contacto por su nombre
    delete(name) {
      // Se calcula el índice en la tabla hash donde se almacena el contacto
      const INDEX = this.hash(name);
      // Si hay contactos en ese índice, se filtra el array para eliminar los contactos con nombre igual al pasado como parámetro
      if (this.table[INDEX]) {
        this.table[INDEX] = this.table[INDEX].filter((contact) => contact[0] !== name);
        // Se decrementa la propiedad size para contabilizar la eliminación del contacto
        this.size--;
        // Se devuelve el nombre del contacto eliminado
        return name;
      } else {
        // Si no hay contactos en ese índice, se devuelve null
        return null;
      }
    }
  }