module.exports = ({ content }) => {
  return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="icon" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df6euho-43e72823-7377-4bd3-9b60-ef1d7bd05966.png/v1/fit/w_600,h_1281,strp/gold_ball_by_ace_zeroartic_df6euho-300w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGY2ZXVoby00M2U3MjgyMy03Mzc3LTRiZDMtOWI2MC1lZjFkN2JkMDU5NjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0sNTQIule0HQkZQdpZ-j852VnnsDYJW9umNBZnzCGog" />
          <title>Pokémart</title>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
          <link href="/css/main.css" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
        </head>
  
        <body class="admin">
          <header>
            <nav class="navbar navbar-bottom">
              <div class="container navbar-container">
                <div>
                  <a href="/admin/products">
                    <h3 class="title"><img class="shop-logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df6euho-43e72823-7377-4bd3-9b60-ef1d7bd05966.png/v1/fill/w_1280,h_1281,strp/gold_ball_by_ace_zeroartic_df6euho-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGY2ZXVoby00M2U3MjgyMy03Mzc3LTRiZDMtOWI2MC1lZjFkN2JkMDU5NjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0sNTQIule0HQkZQdpZ-j852VnnsDYJW9umNBZnzCGog" /> Admin Panel</h3>
                  </a>
                </div>
                <div class="navbar-item">
                  <div class="navbar-buttons">
                    <div class="navbar-item">
                      <a href="/admin/products"><i class="fa fa-star"></i> Products</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div class="container">
            ${content}
          </div>
        </body>
      </html>
    `;
};
