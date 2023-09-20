class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    get(key) {
        const arrayIndex = this._hash(key);
        if (arrayIndex >= 0) {
            for (const item of this.data[arrayIndex]) {
                if (item[0] == key) {
                    return item[1];
                }
            }
        }
    }

    set(key, value) {
        const arrayIndex = this._hash(key);
        if (!this.data[arrayIndex]) {
            this.data[arrayIndex] = [];
        }
        this.data[arrayIndex].push([key, value]);
    }

    keys() {
        let keys = [];
        this.data.forEach(out_box => {
            out_box.forEach(in_box => {
                keys.push(in_box[0]);
            });
        });
        keys.sort();
        return keys;
    }
}


module.exports = HashTable;