document.addEventListener('DOMContentLoaded', function() {
    var associations = [
        {
            name: "CIMADE",
            address: "25 rue Fessart 75019 Paris",
            phone: "01 42 45 65 07",
            email: "infos@lacimade.org"
        },
        {
            name: "DOULA ASSOCIATION",
            address: "4 chemin des fourches 93380 Pierrefitte-sur-Seine",
            phone: "+33 6 95 30 88 74",
            email: "sorona.toure@associationdoula.com<br>abdoulaye.diallo@associationdoula.com",
        },
        {
            name: "GROUPE D'INFORMATION ET DE SOUTIEN DES IMMIGRES (GISTI)",
            address: "3 Villa Marcès, 75011 Paris",
            phone:"Tell: 01 42 09 10 80 Fax: 01 43 14 60 69",
            email: "gisti@gisti.org.org"
        },
        {
            name: "GROUPE ACCUEIL ET SOLIDARITE (GAS)",
            address: "17, place Maurice Thorez, 94800",
            phone: "Tell: 01 42 11 07 95",
            email: "association@gas.asso.fr"
        },
        {
            name: "Croix-Rouge française",
            address: "1 Rue DE BEAUJOLAIS, 75001 PARIS",
            phone: "01 42 61 59 67",
            email: "donateurs@croix-rouge.fr"
        }
    ];

    var associationsList = document.getElementById('associations-list');

    associations.forEach(function(association) {
        var li = document.createElement('li');
        li.className = 'association-item';
        li.innerHTML = `
            <h3>${association.name}</h3>
            <div class="association-details">
                <p><strong>Adresse:</strong> ${association.address}</p>
                <p><strong>Téléphone:</strong> ${association.phone}</p>
                <p><strong>Email:</strong> <a href="mailto:${association.email}">${association.email}</a></p>
                ${association.additionalContacts ? `<p><strong>Contacts additionnels:</strong> ${association.additionalContacts}</p>` : ''}
            </div>
        `;
        li.addEventListener('click', function() {
            var details = li.querySelector('.association-details');
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });
        associationsList.appendChild(li);
    });
});
