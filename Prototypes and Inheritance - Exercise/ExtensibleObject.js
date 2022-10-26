function extensibleObject() {

    return {
        extend(template) {
            for (let prop in template) { // itterate over the object's properties
                if (typeof(template[prop]) === 'function') { // checking if the object's property is a function
                    Object.getPrototypeOf(this)[prop] = template[prop]; // assign it to the object's (this) prototype
                }
                else {
                    this[prop] = template[prop]; // assign it to the object itself (this)
                }
            }
        }
    }

}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}

myObj.extend(template);