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
        let experienceMatch = true;
        let professionMatch = true;
        let qualitiesMatch = true;

        // Filtro de Experiência
        if (experienceFilter) {
            experienceMatch = experience <= parseInt(experienceFilter); // Compara o número de anos de experiência
        }

        // Filtro de Profissão
        if (professionFilter) {
            professionMatch = profession === professionFilter; // A profissão do card deve ser exata
        }

        // Filtro de Qualidades
        if (qualitiesFilter.length > 0) {
            qualitiesMatch = qualitiesFilter.every(q => qualities.includes(q)); // Verifica se todas as qualidades estão presentes no card
        }

        // Exibir ou esconder card
        if (experienceMatch && professionMatch && qualitiesMatch) {
            card.style.display = 'block'; // Exibe o card
        } else {
            card.style.display = 'none'; // Esconde o card
        }
    });
});
