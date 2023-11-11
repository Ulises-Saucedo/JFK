document.addEventListener('DOMContentLoaded', function() {
    let notice_container = document.querySelector('.notice__container');
    notice_container.style.display = 'none';

    let searchInput = document.querySelector('.searchTerm');
    let searchButton = document.getElementById('searchButton');
    show_news()

    searchInput.addEventListener('keydown', function (event) {
        if (searchInput.keyCode === 13 || event.key === 'Enter') {
            const search = searchInput.value;
            if (searchInput.value) {
                fetchNews('handlers/show_news.php', 'POST', `search=${search}`);
            } else {
                show_news();
            }
        }
    })

    searchButton.addEventListener('click', function() {
        const search = searchInput.value;
        if (searchInput.value) {
            fetchNews('handlers/show_news.php', 'POST', `search=${search}`);
        } else {
            show_news();
        }
    });

    function show_news() {
        fetchNews('handlers/show_all_news.php', 'GET');
    }

    function fetchNews(url, method, body = null) {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        };

        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                if (!response.error) {
                    const news = response;
                        const template = news.map(new_s => `
                        <div class="notice-card">
                            <div class="additional">
                                <img src="../../../src/images/logo copia.svg" alt="Logo">
                                ${new_s.permissions ? ` <button class="btn-borrar card-boton" data-id="${new_s.id}">Borrar</button>
                                                        <button class="btn-editar card-boton" data-id="${new_s.id}">Editar</button>`: ''}
                            </div>
                            <div class="general">
                                <h2>${new_s.name}</h2>
                                <p class="card__description">${new_s.description}</p>
                            </div>
                        </div>`).join('');
                        
                        notice_container.style.display = 'block';
                        notice_container.innerHTML = template;
                    }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-borrar')) {
            const id = e.target.getAttribute('data-id');
    
            fetch('handlers/news_delete.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `id=${id}`
            })
            .then(response => response.text())
            .then(result => {
                show_news();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });

    let modal = document.getElementById('mainModal')
    const openModal = () => {
        modal.showModal();
    }
    const closeModal = () => {
        modal.close()
    }
    document.querySelector('.cerrar-modal').addEventListener('click', function () {
        closeModal();
    })
    document.addEventListener('click', function (e) {
        if(e.target.classList.contains('btn-editar')){
            const id = e.target.getAttribute('data-id');
            document.getElementById('id').value=id;
            openModal();
        }
    })
})  