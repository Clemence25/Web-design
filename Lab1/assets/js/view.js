const View = {
    todayField: document.getElementById("today"),
    wordsCountField: document.getElementById("words-count"),
    studyTimeField: document.getElementById("study-time"),
    wordInput: document.getElementById("word-input"),
    addWordBtn: document.getElementById("add-word"),

    renderDate() {
        if (this.todayField) {
            this.todayField.textContent = new Date().toLocaleDateString();
        }
    },

    renderWordsCount(count) {
        if (this.wordsCountField) {
            this.wordsCountField.textContent = count;
        }
    },

    renderStudyTime(time) {
        if (this.studyTimeField) {
            this.studyTimeField.textContent = time;
        }
    }
};
