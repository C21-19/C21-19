$(document).ready(function() {
  // Вибрати всі елементи <p> та змінити їх текст на "Змінений текст"
  $('#task1 p').text('Змінений текст');

  // Вибрати елемент з ідентифікатором task1 та додати йому клас highlight
  $('#task1').addClass('highlight');

  // Вибрати всі елементи <li> та додати їм клас list-item
  $('#task2 li').addClass('list-item');
});