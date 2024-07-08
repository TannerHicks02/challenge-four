document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const message = document.getElementById('message');
    
    if (username === '' || title === '' || content === '') {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
        
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push({ username, title, content });
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        
        window.location.href = 'blog.html';
    }
});