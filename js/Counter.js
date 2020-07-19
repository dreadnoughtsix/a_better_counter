class Counter {
    constructor() {
        this._totalCount = 0;
        this._maxCount = 0;
    }

/**
 * @param {integer} increment The integer added to the total count
 */
    addCount(increment) {
        this._totalCount = this._totalCount + increment;
    }

/**
 * @param {integer} decrement The integer subtracted from the total count
 */
    subtractCount(decrement) {
        this._totalCount = this._totalCount - decrement;
    }
/**
 * @return {integer} The current count of the Counter instance
 */
    // Return the total count
    getCount() {
        return this._totalCount;
    }

    /**
     * @param {integer} max The maximum value the counter is restricted to
     */
    setMaxCount(max) {
        this._maxCount = max;
    }

    /**
     * @return {integer} The current maximum of the counter
     */
    getMaxCount() {
        return this._maxCount;
    }
}