document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postsContainer = document.getElementById('posts');
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
        
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        
        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${post.username}`;
        
        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(authorElement);
        
        postsContainer.appendChild(postElement);
    });
    
    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});