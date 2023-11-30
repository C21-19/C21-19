window.addEventListener('load', function(){
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0'; // Змінюємо прозорість на 0
    setTimeout(function() {
        preloader.style.display = 'none'; // Після зникнення змінюємо display на none
    }, 1000); // Час затримки прелоадера перед зникненням (в мілісекундах), відповідний до тривалості анімації
});