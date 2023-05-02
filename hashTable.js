class HashTable {
    constructor(size) {
       this.table = new Array(size);
       this.size = size;
    }

    hashFunction(key= '') {
        let total = 0 ;
        for(let i = 0 ; i < key.length ; i++) {
            total = total + key.charCodeAt(i);
        }
        return total % this.table.length ;
    }

    set(key , value) {
        let index = this.hashFunction(key);
        this.table[index] = [key,value]
        console.log(index);
    }

    get(key) {
        let index = this.hashFunction(key);
        console.log(this.table[index])
        return this.table[index];
    }
}

let hTable = new HashTable(50);
hTable.set('ssk' ,'silpa');
hTable.get('ssk');
