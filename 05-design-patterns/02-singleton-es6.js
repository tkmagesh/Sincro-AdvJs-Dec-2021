class Spinner{
    static #instance
    #counter = 0
    static getInstance(){
        if (!Spinner.#instance)
            Spinner.#instance = new Spinner();
        return Spinner.#instance
    }
    constructor(){
        return Spinner.#instance;
    }
    increment(){
        return ++this.#counter;
    }
    decrement(){
        return --this.#counter;
    }
    
}