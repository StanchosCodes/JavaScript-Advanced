class List {
    constructor(workingList = []) {
        this.workingList = workingList.sort((a, b) => (a - b));
        this.size = this.workingList.length;
    }

    add(element) {
        this.workingList.push(element);
        this.workingList = this.workingList.sort((a, b) => (a - b));
        this.size++;
    }
    
    remove(index) {
        if (index < 0 || index >= this.workingList.length) {
            throw new Error("Index outside of bounds of the array!");
        }

        this.workingList.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (index < 0 || index >= this.workingList.length) {
            throw new Error("Index outside of bounds of the array!");
        }

        return this.workingList[index];
    }
}

let list = new List();

list.add(5);
list.add(6);
list.add(7);

console.log(list.size);
console.log(list.get(1));

list.remove(1);

console.log(list.size);

console.log(list.get(1));