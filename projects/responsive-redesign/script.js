document.addEventListener('DOMContentLoaded', function() {
                                // navbar   
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // change mobile menu when hamburger is clicked
    hamburgerButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // hamburger to X animation
        const spans = hamburgerButton.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && 
            !hamburgerButton.contains(event.target) && 
            mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            
            // Reset hamburger icon
            const spans = hamburgerButton.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            
            // Reset hamburger icon
            const spans = hamburgerButton.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

                        // new materials section
    // get all category buttons and material categories
    const categoryButtons = document.querySelectorAll('.category-btn');
    const materialCategories = document.querySelectorAll('.material-category');
    
    // add click event listeners to each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            materialCategories.forEach(materialCategory => {
                materialCategory.classList.remove('active');
            });
            
            document.getElementById(`${category}-materials`).classList.add('active');
        });
    });
    
    // // add functionality to next buttons
    // const nextButtons = document.querySelectorAll('.next-btn');
    // nextButtons.forEach(button => {
    //     button.addEventListener('click', function() {
    //         const materialCategory = this.closest('.material-category');
            
    //         const materialItems = materialCategory.querySelector('.material-items');
            
    //         materialItems.scrollBy({
    //             left: 300,
    //             behavior: 'smooth'
    //         });
    //     });
    // });
});