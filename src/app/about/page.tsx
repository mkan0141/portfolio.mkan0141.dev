const About = () => {
  return (
    <div className="mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl">
      <div>
        <h1 className="text-4xl font-bold">About</h1>
      </div>
      <div>
        <div className="mt-10">
          <h2 className="text-xl font-bold">私について</h2>
          <p className="mt-3">
            都内で働くWebエンジニア。仕事ではゲーム・Webアプリケーション・スマホアプリの開発をしています。
            <br />
            フロントエンド・バックエンド両方とも触りますが最近はよくフロントエンドを触っています。
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold">お仕事</h2>
          <p className="mt-3">
            都内で働くWebエンジニア。仕事ではゲーム・Webアプリケーション・スマホアプリの開発をしています。
            <br />
            フロントエンド・バックエンド両方とも触りますが最近はよくフロントエンドを触っています。
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold ">好きな食べ物</h2>
          <p className="mt-3">餃子・甘いもの全般(特に芋けんぴ)</p>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold">お仕事で触ったことがある</h2>
          <p className="mt-3">TypeScript・JavaScript・Dart・Perl・MySQL</p>
          <p>Vue2・Vue3・Flutter</p>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold">趣味で触ってる</h2>
          <p className="mt-3">Rust・Golang・C++</p>
          <p>React・Nextjs・Nuxt・Astro</p>
        </div>
      </div>
    </div>
  );
};

export default About;
