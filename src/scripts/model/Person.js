
export default class Person {

    constructor(name,
                height,
                picture = 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png'){
        this._name = name;
        this._height = height;
        this._picture = picture;
    }

    get name() {
        return this._name;
    }

    get height() {
        return this._height;
    }

    get picture() {
        return this._picture;
    }
}