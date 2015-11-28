
import Person from './Person';
export default class SuperHero extends Person{

    constructor(nickname, name, height, picture) {
        super(name, height, picture);
        this._nickname = nickname;
    }

    get nickname() {
        return this._nickname;
    }
}