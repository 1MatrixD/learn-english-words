
class Word {
    count = 0;
    repeats = {};

    get words() {
        return _words.filter(_ => _.isRight != true || _.isBad == true);
    }

    get _random() {
        const words = this.words;

        const index = Math.floor(Math.random() * (words.length - 0 + 1));
        this.index = index;

        return words[index];
    }

    get random() {
        if (!this.repeats[this.count]) {
            return this._random;
        }

        return this.repeats[this.count];
    }

    get randomRu() {
        const words = [];

        while (words.length < 3) {
            words.push(this._random[1]);
        }

        return words;
    }

    right() {
        this.count++;
        return this.words[this.index].isRight = true;
    }

    bad() {
        this.createBadRepeats();
        this.count++;
        return this.words[this.index].isBad = true;
    }

    checkAntiDupe(eng, rus, step) {
        const [prev_eng, prev_rus, ...prev_other] = this.repeats[step - 1] || [];
        const [next_eng, next_rus, ...next_other] = this.repeats[step + 1] || [];

        if (eng == prev_eng && rus == prev_rus) {
            return false;
        }

        if (eng == next_eng && rus == next_rus) {
            return false;
        }

        return true;
    }

    createRepeats() {
        const words = this.words[this.index].slice(0, 2);

        [5, 15, 20, 30, 60].forEach(int => {
            let step = this.count + int;

            while (true) {
                if (!this.repeats[step] && this.checkAntiDupe(...words, step)) {
                    this.repeats[step] = words;
                    break;
                }

                step++;
            }
        })
    }

    createBadRepeats() {
        let step = this.count + 3;
        const words = this.words[this.index].slice(0, 2);

        while (true) {
            if (!this.repeats[step]) {
                if (!this.repeats[step] && this.checkAntiDupe(...words, step)) {
                    this.repeats[step] = words;
                    break;   
                }
            }

            step++;
        }
    }
}

const word = new Word();