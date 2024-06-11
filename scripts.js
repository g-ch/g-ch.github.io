document.addEventListener('DOMContentLoaded', function() {
    // Handle abstract folding only on the index page
    if (document.querySelector('#selected-papers')) {
        document.querySelectorAll('.abstract').forEach(function(abstract) {
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Show More';
            toggleButton.addEventListener('click', function() {
                if (abstract.classList.contains('open')) {
                    abstract.classList.remove('open');
                    toggleButton.textContent = 'Show More';
                } else {
                    abstract.classList.add('open');
                    toggleButton.textContent = 'Show Less';
                }
            });
            abstract.parentNode.appendChild(toggleButton);
        });
    }

    // The following code is for the publications page
    if (document.querySelector('.publications')) {
        const publicationsContainer = document.querySelector('.publications');
        const publications = Array.from(document.querySelectorAll('.publication'));

        // Sort publications by year and month in ascending order (earliest year and month first)
        publications.sort((a, b) => {
            const yearDiff = a.getAttribute('data-year') - b.getAttribute('data-year');
            return yearDiff !== 0 ? yearDiff : a.getAttribute('data-month') - b.getAttribute('data-month');
        });

        // Add continuous sequence numbers, larger numbers for more recent papers
        publications.reverse().forEach((pub, index) => {
            const sequenceNumber = document.createElement('span');
            sequenceNumber.textContent = `[${publications.length - index}]`;
            sequenceNumber.classList.add('sequence-number');
            pub.querySelector('.sequence-number').replaceWith(sequenceNumber);
        });

        // Group publications by year and append to the container in descending order
        const years = [...new Set(publications.map(pub => pub.getAttribute('data-year')))].sort((a, b) => b - a);
        years.forEach(year => {
            const yearSection = document.createElement('div');
            yearSection.classList.add('year-section');
            const yearHeading = document.createElement('h3');
            yearHeading.textContent = year;
            yearHeading.style.textAlign = 'center';
            yearSection.appendChild(yearHeading);

            publications
                .filter(pub => pub.getAttribute('data-year') === year)
                .forEach(pub => {
                    yearSection.appendChild(pub);
                });

            publicationsContainer.appendChild(yearSection);
        });
    }
});
