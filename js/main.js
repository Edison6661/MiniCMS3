// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('postForm');
  const container = document.getElementById('postsContainer');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const post = { title, content, date: new Date().toISOString() };

      const posts = JSON.parse(localStorage.getItem('posts') || '[]');
      posts.unshift(post);
      localStorage.setItem('posts', JSON.stringify(posts));

      window.location.href = 'posts.html';
    });
  }

  if (container) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    if (posts.length === 0) {
      container.innerHTML = '<p>Поки що постів немає.</p>';
    } else {
      posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><small>${new Date(post.date).toLocaleString()}</small>`;
        container.appendChild(div);
      });
    }
  }
});