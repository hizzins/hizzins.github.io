import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';


// 기본 문서의 형식을 지정
// 서버사이드에서 한번만 로드
// SPA에서 변경할 수 없는 부분
//  리소스 로드
// 뷰포트 설정
// title사용은 권장하지 않음. 각각의 페이지에서 사용.
// 클라이언트단의 첫 진입점을 다루는 파일 _app.js
export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous">
        </link>
      </Head>
      <body>
      <div id="root">
        <Main />
        <NextScript />
      </div>
      </body>
      </html>
    );
  }
}