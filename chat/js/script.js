// script.js

document.getElementById('filterForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    // Obter valores dos filtros
    const experienceFilter = document.getElementById('experience').value;
    const professionFilter = document.getElementById('profession').value;
    const qualitiesFilter = Array.from(document.querySelectorAll('input[name="qualities"]:checked')).map(input => input.value);

    // Obter todos os cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const profession = card.getAttribute('data-profession');
        const experience = parseInt(card.getAttribute('data-experience'));
        const qualities = card.getAttribute('data-qualities').split(',');

        // Verificar se o card atende aos filtros
        const experienceMatch = !experienceFilter || experience <= experienceFilter;
        const professionMatch = !professionFilter || profession.includes(professionFilter);
        const qualitiesMatch = qualitiesFilter.every(q => qualities.includes(q));

        // Exibir ou esconder card
        if (experienceMatch && professionMatch && qualitiesMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
