import { createServer } from 'http';

let server = createServer((req, res) => {
  switch (req.url) {
    case '/': {
      let html = createPage('Homge');
      res.end(html);
      break;
    }

    case 'page-1': {
      let html = createPage('Page 1');
      res.end(html);
      break;
    }
  }
});

server.listen(3000);

function createPage(title) {
  return `
  <!DOCTYPE html>
    <html lang=en>
      <head>
        <meta charset=UTF-8 />
        <link rel="favicon"  href="https://remix.run/favicon.ico" />
        <title>${title}</title>
      </head>
      <body>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/page-1">Page 1</a></li>
        </ul>
        <h1>${title}</h1>
        <hr/>
        ${Array.from({ length: 1000 })
          .map(() => '<div>Lorem Ipsum</div>')
          .join('\n')}
      </body>
    </html>
  `;
}
