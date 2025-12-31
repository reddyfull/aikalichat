export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<!-- Your full HTML content here -->
</html>`;
    
    return new Response(html, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  },
};
