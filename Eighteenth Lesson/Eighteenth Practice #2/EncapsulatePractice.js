class Instagram {
    constructor(username, age) {
        this._username = username;
        this._age = age;
        this._followers = [];
        this._messages = [];
    }

    addFollower(follower) {
        this._followers.push(follower);
        console.log(`${follower.username} has been added to ${this.username} followers`);
    }

    sendDirectMessage(directMessage, follower) {
        this._messages.push(directMessage);
        follower._messages.push(directMessage);
        console.log(`${this.username} sent a direct message to ${follower.username}`);
    }

    showDirectMessages() {
        return this._messages;
    }

    get username() {
        return this._username;
    }

    set username(newUserName) {
        this._username = newUserName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge >= 0 && newAge >= 18) {
            this._age = newAge;
        } else {
            throw new Error("You must be at least 18 years old");
        }
    }
}

const INSTAGRAM = new Instagram("Josh", 17);
INSTAGRAM.age = 20;
console.log(INSTAGRAM.age);