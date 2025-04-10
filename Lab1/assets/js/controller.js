const Controller = {
    init() {
        View.renderDate();
        View.renderWordsCount(Model.getWordsCount());
        View.renderStudyTime(Model.getStudyTime());

        setInterval(() => {
            Model.updateStudyTime();
            View.renderStudyTime(Model.getStudyTime());
        }, 60000); // Оновлення кожну хвилину

        if (View.addWordBtn) {
            View.addWordBtn.addEventListener("click", this.addWord);
        }
    },

    addWord() {
        const word = View.wordInput.value.trim();
        if (word) {
            Model.addWord(word);
            View.renderWordsCount(Model.getWordsCount());
            View.wordInput.value = "";
        }
    }
};