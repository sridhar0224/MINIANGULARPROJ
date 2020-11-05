export class Songss {
    /* title: string;
    done: boolean;
    createdDate: Date;

    constructor(title: string, done: boolean, createdDate: Date) {
        this.title = title;
        this.done = done;
        this.createdDate = createdDate;
    } */

    constructor(private _title: string, public Duration: string, public Genre: string, public id?: number) {}

    get title() {
        return this._title;
    }

    set title(title: string) {
        // encapsulation checks
        this._title = title;
    }
}

export class Songdelete {
    /* title: string;
    done: boolean;
    createdDate: Date;

    constructor(title: string, done: boolean, createdDate: Date) {
        this.title = title;
        this.done = done;
        this.createdDate = createdDate;
    } */

    constructor(private _title: string) {}

    get title() {
        return this._title;
    }

    set title(title: string) {
        // encapsulation checks
        this._title = title;
    }
}