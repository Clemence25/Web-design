const Model = {
    words: JSON.parse(localStorage.getItem("words")) || [],
    studyTime: parseInt(localStorage.getItem("studyTime")) || 0,
    startTime: Date.now(),

    addWord(word) {
        this.words.push(word);
        localStorage.setItem("words", JSON.stringify(this.words));
    },

    getWordsCount() {
        return this.words.length;
    },

    updateStudyTime() {
        const now = Date.now();
        this.studyTime += (now - this.startTime) / 3600000; // Переводимо в години
        this.startTime = now;
        localStorage.setItem("studyTime", this.studyTime);
    },

    getStudyTime() {
        return this.studyTime.toFixed(2);
    }
};
