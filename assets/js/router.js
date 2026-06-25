
document.addEventListener('DOMContentLoaded', async () => {
  async function loadComponent(id, url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();
      document.getElementById(id).innerHTML = html;
    } catch (error) {
      console.error('Error loading component ' + url + ':', error);
      document.getElementById(id).innerHTML = `<p style="color:red; padding:20px;">Error loading ${url}. Make sure you are using a local server (e.g., Live Server) and not opening the file directly via file://</p>`;
    }
  }

  // Load header, home, and footer components
  await loadComponent('header-container', 'components/header.html');
  await loadComponent('home-container', 'components/home.html');
  await loadComponent('footer-container', 'components/footer.html');
  
  console.log('All components loaded via router.');
  window.dispatchEvent(new Event('componentsLoaded'));
});
