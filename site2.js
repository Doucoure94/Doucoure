document.addEventListener('DOMContentLoaded', () => {
    const prefectures = [
        { name: 'Préfecture de Paris', url: 'https://www.prefecturedepolice.interieur.gouv.fr/demarches/les-titres-de-sejour-ressortissants-non-europeens' },
        { name: 'Préfecture des Bouches-du-Rhône', url: 'https://www.bouches-du-rhone.gouv.fr' },
        { name: 'Préfecture de Lyon', url: 'https://www.rhone.gouv.fr' },
        { name: 'Préfecture de Bobigny', url: 'https://www.rhone.gouv.fr' },
        { name: 'Préfecture de Nanterre', url: 'https://www.rhone.gouv.fr' },
        { name: 'Préfecture de Marseille', url: 'https://www.rhone.gouv.fr' },
        { name: 'Préfecture de Sarcelles', url: 'https://www.rhone.gouv.fr' },
        { name: 'Préfecture de Versaille', url: 'https://www.rhone.gouv.fr' },
        { name: 'Préfecture de Creteil', url: 'https://www.val-de-marne.gouv.fr/Vos-demarches/Etrangers-vos-demarches-dans-le-Val-de-Marne/Creteil' },
        { name: 'Préfecture de Melun', url: 'https://www.seine-et-marne.gouv.fr/Demarches/Toutes-les-demarches/Accueil-des-Etrangers' },

        // Ajoutez plus de préfectures ici
    ];

    const searchInput = document.getElementById('searchInput');
    const prefectureList = document.getElementById('prefectureList');

    function displayPrefectures(prefectures) {
        prefectureList.innerHTML = '';
        prefectures.forEach(prefecture => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = prefecture.url;
            a.textContent = prefecture.name;
            a.target = '_blank';
            li.appendChild(a);
            prefectureList.appendChild(li);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredPrefectures = prefectures.filter(prefecture => 
            prefecture.name.toLowerCase().includes(query)
        );
        displayPrefectures(filteredPrefectures);
    });

    // Afficher toutes les préfectures par défaut
    //displayPrefectures(name='Préfecture de Paris');
});
// site2.js
// site2.js
// site2.js
// site2.js
function toggleNav() {
    var nav = document.getElementById("navLinks");
    if (nav.className === "nav-links") {
        nav.className += " responsive";
    } else {
        nav.className = "nav-links";
    }
}



