document.addEventListener("DOMContentLoaded", function () {

   // Ініціалізація початкового масиву словникових слів
    let vocabulary = [
      { word: "enable", partOfSpeech: "verb", pronunciation: "iˈnāb(ə)l", meaning: "to make something possible" },
      { word: "slight", partOfSpeech: "adjective", pronunciation: "slīt", meaning: "small, not very important" },
      { word: "major", partOfSpeech: "adjective", pronunciation: "ˈmājər", meaning: "important, serious, or significant" },
      { word: "affect", partOfSpeech: "verb", pronunciation: "əˈfek(t)", meaning: "to change something/ have an effect on something" },
      { word: "harmful", partOfSpeech: "adjective", pronunciation: "ˈhärmf(ə)l", meaning: "causing or likely to cause harm" },
      { word: "damage", partOfSpeech: "verb", pronunciation: "ˈdamɪdʒ", meaning: "inflict physical harm on (something) so as to impair its value, usefulness, or normal function" },
      { word: "beneficial", partOfSpeech: "adjective", pronunciation: "ˌbɛnɪˈfɪʃl", meaning: "resulting in good; favourable or advantageous" },
      { word: "dispute", partOfSpeech: "noun", pronunciation: "dɪˈspjuːt, ˈdɪspjuːt", meaning: "a disagreement or argument" },
      { word: "mentoring", partOfSpeech: "verb", pronunciation: "ˈmɛntɔː", meaning: "advise or train (someone, especially a younger colleague)" },
      { word: "consumer", partOfSpeech: "noun", pronunciation: "kənˈsjuːmə", meaning: "a person who purchases goods and services for personal use" }
    ];

     // Функція для виводу словника у таблицю
    function renderTable() {
      const tbody = document.querySelector("#dataTable tbody");
      tbody.innerHTML = ""; 
      vocabulary.forEach(function(item) {
        const tr = document.createElement("tr");
        
        const tdWord = document.createElement("td");
        tdWord.textContent = item.word;
        tr.appendChild(tdWord);
        
        const tdPart = document.createElement("td");
        tdPart.textContent = item.partOfSpeech;
        tr.appendChild(tdPart);
        
        const tdPron = document.createElement("td");
        tdPron.textContent = item.pronunciation;
        tr.appendChild(tdPron);
        
        const tdMeaning = document.createElement("td");
        tdMeaning.textContent = item.meaning;
        tdMeaning.style.transform = "translate(64px)";
        tr.appendChild(tdMeaning);
        
        tbody.appendChild(tr);
      });
    }

    renderTable();

// Обробка кліку по кнопці "Save" для додавання нового слова
    document.getElementById("saveWordBtn").addEventListener("click", function () {
      const word = document.getElementById("wordInput").value.trim();
      const partOfSpeech = document.getElementById("partInput").value.trim();
      const pronunciation = document.getElementById("pronunciationInput").value.trim();
      const meaning = document.getElementById("meaningInput").value.trim();

      if (word && partOfSpeech && pronunciation && meaning) {
        vocabulary.push({ word, partOfSpeech, pronunciation, meaning });
        renderTable();
        document.getElementById("addWordForm").reset();
        const modalEl = document.getElementById("addWordModal");
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
      }
    });

    // Коли модальне вікно закривається — очищаємо форму
    document.getElementById("addWordModal").addEventListener("hidden.bs.modal", function () {
      document.getElementById("addWordForm").reset();
    });
  });