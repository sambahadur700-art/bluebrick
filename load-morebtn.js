
// Additional JavaScript for Load More functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    let currentFilter = 'sale';
    
    // Update the filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            currentFilter = button.getAttribute('data-filter');
            
            // Update load more button link
            updateLoadMoreLink();
        });
    });
    
    // Function to update the load more button link
    function updateLoadMoreLink() {
        let link = '';
        switch(currentFilter) {
            case 'sale':
                link = 'sale02.html';
                break;
            case 'rent':
                link = 'rent02.html';
                break;
            case 'offplan':
                link = 'offplan02.html';
                break;
            default:
                link = 'sale02.html';
        }
        
        // Make the button a link
        loadMoreBtn.innerHTML = `<a href="${link}" style="color: inherit; text-decoration: none;">Load More</a>`;
    }
    
    // Initialize the load more button link
    updateLoadMoreLink();
});