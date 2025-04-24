// Simulating content loading
setTimeout(() => {
    document.querySelector('.skeleton-loader').style.display = 'none'; // Hide skeleton loader
    document.getElementById('content').style.display = 'block'; // Show content

    const content = document.getElementById('content');
    content.innerHTML = `<h2>Content Loaded!</h2><p>This is the content that was loaded after the skeleton loader was displayed.</p>`;
}, 3000); // Simulate 3 seconds delay for content loading
