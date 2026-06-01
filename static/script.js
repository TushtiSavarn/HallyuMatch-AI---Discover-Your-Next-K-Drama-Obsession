const form = document.getElementById('kdramaForm');
const titleInput = document.getElementById('kdramaTitle');
const suggestionsList = document.getElementById('suggestions');
const recommendationsDiv = document.getElementById('recommendations');

const modal = document.getElementById('dramaModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');


// =========================
// Modal Close Events
// =========================

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


// =========================
// Autocomplete
// =========================

titleInput.addEventListener('input', function () {

    const query = titleInput.value.trim();

    if (query.length < 2) {

        suggestionsList.innerHTML = '';
        return;
    }

    fetch(`/autocomplete?q=${query}`)

        .then(response => response.json())

        .then(data => {

            suggestionsList.innerHTML = '';

            data.forEach(suggestion => {

                const li = document.createElement('li');

                li.textContent = suggestion;

                li.addEventListener('click', () => {

                    titleInput.value = suggestion;
                    suggestionsList.innerHTML = '';

                });

                suggestionsList.appendChild(li);

            });

        })

        .catch(error => {

            console.error(error);

        });

});


// =========================
// Form Submit
// =========================

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const title = titleInput.value.trim();

    if (!title) return;

    recommendationsDiv.innerHTML = `

        <div class="loading">
            Finding your next K-Drama obsession...
        </div>

    `;

    fetch('/recommend', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            title: title
        })

    })

    .then(response => response.json())

    .then(data => {

        recommendationsDiv.innerHTML = '';

        // Error Message

        if (data.message) {

            recommendationsDiv.innerHTML = `

                <div class="error-message">
                    ${data.message}
                </div>

            `;

            return;
        }

        // Recommendation Cards

        data.forEach(drama => {

            const card = document.createElement('div');

            card.classList.add('recommendation');

            card.innerHTML = `

                <img
                    src="${drama.Poster}"
                    alt="${drama.Name}"
                    class="poster"
                >

                <div class="card-content">

                    <h3 class="title">
                        ${drama.Name}
                    </h3>

                    <div class="meta-grid">

                        <div class="meta-item">
                            <i data-lucide="star"></i>
                            <span>${drama.Score}</span>
                        </div>

                        <div class="meta-item">
                            <i data-lucide="heart"></i>
                            <span>${drama.Similarity}% Match</span>
                        </div>

                        <div class="meta-item">
                            <i data-lucide="tv"></i>
                            <span>${drama.Episode}</span>
                        </div>

                        <div class="meta-item">
                            <i data-lucide="broadcast"></i>
                            <span>${drama.Network}</span>
                        </div>

                    </div>

                    <div class="genre">
                        <i data-lucide="film"></i>
                        ${drama.Genre}
                    </div>

                    <p class="synopsis">
                        ${drama.Sinopsis.substring(0, 150)}...
                    </p>

                    <button class="details-btn">
                        View Details
                    </button>

                </div>

            `;

            const detailsBtn = card.querySelector('.details-btn');

            detailsBtn.addEventListener('click', () => {

                modalBody.innerHTML = `

                    <div class="modal-drama">

                        <img
                            src="${drama.Poster}"
                            alt="${drama.Name}"
                            class="poster"
                        >

                        <h2>
                            ${drama.Name}
                        </h2>

                        <div class="modal-meta">

                            <p>
                                <strong> Rating:</strong>
                                ${drama.Score}
                            </p>

                            <p>
                                <strong> Match:</strong>
                                ${drama.Similarity}%
                            </p>

                            <p>
                                <strong> Episodes:</strong>
                                ${drama.Episode}
                            </p>

                            <p>
                                <strong>  Network:</strong>
                                ${drama.Network}
                            </p>

                            <p>
                                <strong> Genre:</strong>
                                ${drama.Genre}
                            </p>

                        </div>

                        <h3>
                            Synopsis
                        </h3>

                        <p class="modal-synopsis">
                            ${drama.Sinopsis}
                        </p>

                    </div>

                `;

                modal.style.display = 'block';

                lucide.createIcons();

            });

            recommendationsDiv.appendChild(card);

        });

        lucide.createIcons();

    })

    .catch(error => {

        console.error(error);

        recommendationsDiv.innerHTML = `

            <div class="error-message">
                Something went wrong. Please try again.
            </div>

        `;

    });

});