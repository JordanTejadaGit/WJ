async function init() {

  miro.board.ui.openModal(
    {
      url: "../bottom.html",
      width: 320,
      height: 40,
      fullscreen: false
    }
  )
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({url: 'app.html'});
  });
}

init();
