var person = {
    _firstname: "Albert",
    _lastname: "Einstein",
    set lastName(lastname) {
        this._lastname = lastname;
    },
    set firstName(firstname) {
        this._firstname = firstname;
    },
    get fullName() {
        return this._firstname + ' ' + this._lastname;
    }
};

person.lastName = 'Newton';
person.firstName = 'Isaac';

console.log(person.fullName);