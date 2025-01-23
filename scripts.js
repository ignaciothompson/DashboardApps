document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const appCards = document.getElementById('app-cards');
            data.apps.forEach(app => {
                console.log("http://localhost:" + app.port);
                const card = document.createElement('div');
                card.className = 'col-md-4';
                card.innerHTML = `
                    <div class="card text-center" id="app-${app.id}" onclick="window.location.href='http://localhost:${app.port}'">
                        <div class="card-body">
                            <img src="${app.icon}" alt="${app.name} icon" class="img-fluid" style="height: 50px;">
                            <h5 class="card-title mt-2">${app.name}</h5>
                            <p class="card-text">Port: ${app.port}</p>
                        </div>
                    </div>
                `;
                appCards.appendChild(card);
            });
        });
});
