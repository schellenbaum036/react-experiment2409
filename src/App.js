import React, { useEffect, useRef } from "react";
import "./styles.css";

const App = () => {
  const titleRef = useRef(null);
  const itemRefs = useRef([]);
  const emojiRefs = useRef([]);

  useEffect(() => {
    const animateItems = () => {
      itemRefs.current.forEach((item, index) => {
        item.style.transform = `rotate(${Math.sin(Date.now() * 0.001 + index) * 10}deg)`;
        item.style.backgroundColor = `hsl(${(Date.now() * 0.1 + index * 90) % 360}, 70%, 60%)`;
      });
      requestAnimationFrame(animateItems);
    };

    const animateEmojis = () => {
      emojiRefs.current.forEach((emoji) => {
        const x =
          (Math.sin(Date.now() * 0.001 + parseInt(emoji.dataset.index)) + 1) *
          50;
        const y =
          (Math.cos(Date.now() * 0.002 + parseInt(emoji.dataset.index)) + 1) *
          50;
        emoji.style.left = `${x}%`;
        emoji.style.top = `${y}%`;
      });
      requestAnimationFrame(animateEmojis);
    };

    animateItems();
    animateEmojis();
  }, []);

  const reportItems = [
    { title: "できた", content: "Vercelアカウント作成、React公開準備" },
    { title: "学び", content: "Vercelの制限と英語リソースの重要性" },
    { title: "次にやること", content: "AIを活用したプログラミング実践" },
    { title: "babubabu", content: "9月の暑さと高温サウナ攻略" },
  ];

  const emojis = ["🤩", "🙌", "😇", "✨"];

  const reportContent = `【9/14　日報】
皆様お疲れ様です\u2757
本日の日報です\u2728
<span class="report-item-red">できた</span>
Reactをサーバー無しで公開できるサービスVercelのアカウントを作りました。
<span class="report-item-blue">学び</span>
本物のサーバーと全く同じの筈がないので、必ず何かしらの制限があるはず。しかしそこがまだ解読できていない\u{1F642}\u200D\u2195\uFE0F
無料で使える制限付きのコースでちょっと試してみようと思います（その名も「Hobby」プラン）。
目標としてはReactをHTML読み込み式ではなく、直接JavaScripと＆jsxをいじって公開すべきものを作れるようになり、それをVercelで公開\u{1F638}Vercelは英語版のみで、日本語サイトが存在しません。GitHubからリポジトリーを読み込む方法など、わかりやすくて簡潔な動画をYouTubeで探してみたらこちらも英語版\u{1F4A6}AIなしでは絶対にたどり着けなかったものが今目の前に\u{1F633}
<span class="report-item-cyan">次にやること</span>
AIすごいにつき、ライティング講座で学んだことをプログラミングとアプリ開発の世界で実践しまくる\u270C
<span class="report-item-pink">babubabu</span>
9月が恐ろしい速さで過ぎていきますね\u{1F4A8}その割にはまだまだ暑く、我が家は今も灼熱ハウスです\u{1F321}
夜になると涼しくなるのですが、家の中は昼間の熱が籠もるのでテーブルやベッドや枕に至るまで生温かいです。
中でもベッドが生暖かいのが一番こたえますね…そんな感じで朝からパッとしなかったので、今日は午前中ジムへ行ってきました\u{1F60A}
以前苦戦した高温サウナの床の攻略方法もわかったので、頭もリセットされてスッキリです\u2728

図解：今日のテーマは「興味が尽きない！時間が足りない！」です\u{1F60A}`;

  return (
    <div className="container">
      <h1 ref={titleRef} className="title">
        9/14 興味が尽きない！時間が足りない！
      </h1>
      <div className="diagram">
        <h2>図解</h2>
        <div className="diagram-grid">
          {reportItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="diagram-item"
            >
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        {emojis.flatMap((emoji, emojiIndex) =>
          Array(5)
            .fill()
            .map((_, index) => (
              <span
                key={`${emojiIndex}-${index}`}
                ref={(el) => emojiRefs.current.push(el)}
                className="floating-emoji"
                data-index={emojiIndex * 5 + index}
              >
                {emoji}
              </span>
            )),
        )}
      </div>
      <div className="report">
        <h2>日報</h2>
        <div
          className="report-content"
          dangerouslySetInnerHTML={{ __html: reportContent }}
        />
      </div>
    </div>
  );
};

export default App;
