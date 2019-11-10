
var debug = true;

const audio = new Audio();
console.log("chat alart");

audio.src = chrome.extension.getURL('sound.mp3');
audio.volume = 0.1;
/*
$(() => {
  $('#chat-log').on('append', () => {
    console.log("chat!");
    audio.play();
  });
});
*/

$(() => {
  {
    //const target = document.getElementById('mobage-game-container');
    const target = document.getElementById('general-chat');
    //const target = document.getElementById('chat-activenotice');
  //console.log(target);

  // オブザーバインスタンスを作成
  const observer = new MutationObserver((mutations) => {
    //console.log(mutations);
    mutations.forEach(record => {
      //console.log(record);
      if(Array.from(record.addedNodes)
        .filter(node => node.classList && node.classList.contains('lis-log')).length > 0)
        audio.play();
        //console.log(document.getElementById('pop-chat'));
    });
  });

  // オブザーバの設定
  const config = { subtree: true, childList: true };

  // 対象ノードとオブザーバの設定を渡す
  observer.observe(target, config);
  }
/*
  {
  const target = document.getElementById('pop-chat');
  //console.log(target);

  // オブザーバインスタンスを作成
  const observer = new MutationObserver((mutations) => {
    console.log(mutations);
  });

  // オブザーバの設定
  const config = { subtree: false, childList: true };

  // 対象ノードとオブザーバの設定を渡す
  observer.observe(target, config);
}
*/
});
