// Basic Class Type 

type Words = {
    [key: string]: string;
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }

    add(word: Word) {
        if (this.words[word.key] === undefined) {
            this.words[word.key] = word.value;
            console.log(`${word.key}: ${word.value} is added`);
        }
    }

    get(key: string) {
        let result = "";

        if (this.words[key] === undefined) {
            result = `${key} is None.`;
            console.log(`${key} is None.`);
        }
        else {
            result = this.words[key];
            console.log(`GET - ${key}: ${this.words[key]}`);
        }

        return result;
    }

    delete(key: string) {
        let result = "";

        if (this.words[key] === undefined) {
            console.log("No data");
        }
        else {
            console.log(`${key}: ${this.words[key]} is deleted.`);
            delete this.words[key];
        }
    }

    update(key: string, value: string) {
        if (this.words[key] === undefined) {
            console.log("No data");
        }
        else {
            this.words[key] = value;
            console.log(`${key} is updated to ${this.words[key]}`);
        }
    }

    showAll() {
        Object.keys(dictionary["words"]).forEach((key) => {
            console.log(`${key}: ${this.words[key]}`);
        })
    }

    count() {
        const dictCount = Object.keys(dictionary["words"]).length;
        console.log(`dictionary's Count is ${dictCount}`);
    }
}

class Word {
    constructor(
        public key: string,
        public value: string
    ) { }
}

const dictionary = new Dict();

const kimchi = new Word("kimchi", "김치");
const apple = new Word("apple", "사과");
const grape = new Word("grape", "포도");
const sponge = new Word("sponge", "스폰지");
const strawberry = new Word("strawberry", "딸기");

dictionary.add(apple);
dictionary.add(kimchi);
dictionary.add(grape);
dictionary.add(sponge);
dictionary.add(strawberry);

dictionary.get("apple");

dictionary.update("apple", "new Apple2 Update");
dictionary.get("apple");

dictionary.delete("kimchi");
dictionary.get("kimchi");

dictionary.showAll();
dictionary.count();