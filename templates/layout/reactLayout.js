module.exports = ({ body, title, initialState, reactBundlePath }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel='stylesheet' href='/css/layout.css' />
        <link rel='stylesheet' href='/css/article.css' />
        <link rel='stylesheet' href='/css/navbar.css' />
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
     <script src="${reactBundlePath}"></script>
     <script src="/js/script.js"></script>
    </html>
  `;
};
