// Hashtable - UserList

class UserList {
    constructor(size) {
        this.table = new Array(size);
        this.size = 0;
        this.numBuckets = size;
    }

    hash(user) {
        let total = 0;

        for (let i = 0; i < user.length; i++) {
            total += user.charCodeAt(i);
        }
        return total % this.numBuckets;
    }

    insert(user, password) {
        const INDEX = this.hash(user);

        if (!this.table[INDEX]) {
            this.table[INDEX] = [];
        }
        this.table[INDEX].push([user, password]);
        this.size++;
    }

    get(user) {
        const INDEX = this.hash(user);
        const USERS = this.table[INDEX];

        return USERS?.find((user) => user[0] === user)?.[1];
    }

    retrieveAll() {
        return Object.keys(this.table).flat();
    }

    delete(user) {
        const INDEX = this.hash(user);

        if (this.table[INDEX]) {
            this.table[INDEX] = this.table[INDEX].filter((user) => user[0] !== user); 
            this.size--;
            return user;
        } else {
            return null;
        }
    }
}

const USER_LIST = new UserList(10);

// Insert method
USER_LIST.insert("Tom", "1234");
USER_LIST.insert("Jerry", "5678");
console.log(USER_LIST.table);

// Get method
USER_LIST.get("Tom");
USER_LIST.get("Bob");
console.log(USER_LIST.table);

// RetrieveAll method
USER_LIST.retrieveAll();
console.log(USER_LIST.table);

// Delete method
USER_LIST.delete("Tom");
console.log(USER_LIST.table);