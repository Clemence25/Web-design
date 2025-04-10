document.addEventListener("DOMContentLoaded", function () {
  
  // Оновлюємо елемент todayDate на сьогоднішню дату
  const todayDateEl = document.getElementById("todayDate");
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  todayDateEl.textContent = new Date().toLocaleDateString('en-US', options);

  // Функція оновлення прогресу виконаних завдань у Todo List
  function updateTodoProgress() {
    const todoList = document.getElementById("todoList");
    const checkboxes = todoList.querySelectorAll('input[type="checkbox"]');
    const total = checkboxes.length;
    let completed = 0;
    checkboxes.forEach(chk => {
      if (chk.checked) {
        completed++;
        chk.closest("li").style.textDecoration = "line-through";
      } else {
        chk.closest("li").style.textDecoration = "none";
      }
    });
    const percent = total ? Math.round((completed / total) * 100) : 0;
    document.getElementById("completedTasksValue").textContent = percent + "%";
    document.getElementById("completedTasksProgressBar").style.width = percent + "%";
    document.getElementById("completedTasksProgressBar").setAttribute("aria-valuenow", percent);
  }

  // Призначаємо обробники зміни для існуючих чекбоксів
  const todoList = document.getElementById("todoList");
  if (todoList) {
    const checkboxes = todoList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(chk => {
      chk.addEventListener("change", updateTodoProgress);
    });
  }

 // Обробка кліка за кнопкою Generate Report
  const generateReportBtn = document.getElementById("generateReportBtn");
  generateReportBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const todayDate = todayDateEl.textContent;
    const timeStudying = document.getElementById("timeStudyingValue").textContent;
    const vocabularyCount = document.getElementById("vocabularyCount").textContent;
    const completedTasks = document.getElementById("completedTasksValue").textContent;
    const report = `Report Generated:
Today: ${todayDate}
Time Studying: ${timeStudying}
Completed Tasks: ${completedTasks}
Words in Vocabulary: ${vocabularyCount}`;
    alert(report);
  });

  // Обробка додавання нового завдання
  const addTaskBtn = document.getElementById("addTaskBtn");
  addTaskBtn.addEventListener("click", function () {
    const newTaskText = document.getElementById("newTaskInput").value.trim();
    if (newTaskText === "") {
      alert("Please enter a task description.");
      return;
    }
    
    // Створюємо новий елемент списку (li)
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
      <div class="row g-0 align-items-center">
        <div class="col me-2">
          <h6 class="mb-0"><strong>${newTaskText}</strong></h6>
          <span class="text-xs">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        <div class="col-auto">
          <div class="form-check">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label"></label>
          </div>
        </div>
      </div>
    `;
    // Додаємо обробник зміни для нового чекбоксу
    li.querySelector('input[type="checkbox"]').addEventListener("change", updateTodoProgress);
    // Додаємо елемент до списку
    document.getElementById("todoList").appendChild(li);
    // Очищаємо поле введення
    document.getElementById("newTaskInput").value = "";
    // Оновлюємо прогрес
    updateTodoProgress();
  });
});