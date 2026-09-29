# Open Challenge 04 — 컴퓨터 기술 소개 웹 페이지 : CSS3로 모양 꾸미기

## 4.html

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>컴퓨터 기술 소개</title>
    <link href="4.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <header>
      <h1>스마트폰</h1>
      <p>
        스마트폰은 컴퓨터를 결합한 무선 휴대전화기이다. PC에서 실행되는
        운영체제보다 작게 만든 모바일 운영체제를 탑재하여 인터넷 검색, 전자우편,
        간단한 문서 편집, 카메라, 오디오 및 비디오 재생 등 PC의 기능을 거의 모두
        갖추고 있다.
      </p>
      <audio controls>
        <source src="smartphone.mp3" type="audio/mpeg" />
        오디오를 지원하지 않습니다.
      </audio>
    </header>

    <nav>
      <h2>목차</h2>
      <ul>
        <li><a href="#history">역사</a></li>
        <li><a href="#android">안드로이드</a></li>
        <li><a href="#iphone">아이폰</a></li>
        <li><a href="#sample">샘플</a></li>
      </ul>
    </nav>

    <section>
      <article>
        <h2 id="history">
          <a href="https://ko.wikipedia.org/wiki/스마트폰" target="_blank"
            >역사</a
          >
        </h2>
        <p>
          최초의 스마트폰은 사이먼(Symon)으로 추정된다. IBM사가 1992년에
          설계하여 그 해에 미국 네바다 주의 라스베이거스에서 열린 컴덱스에서
          컨셉 제품으로 전시되었다.
        </p>
      </article>

      <article>
        <h2 id="android">
          <a
            href="https://ko.wikipedia.org/wiki/안드로이드_(운영체제)"
            target="_blank"
            >안드로이드</a
          >
        </h2>
        <p>
          안드로이드(영어: Android)는 휴대 전화를 비롯한 휴대용 장치를 위한
          운영체제와 미들웨어, 사용자 인터페이스 그리고 표준 응용 프로그램(웹
          브라우저, 이메일 클라이언트, 단문 메시지 서비스(SMS), 멀티미디어
          메시지 서비스(MMS)등)을 포함하고 있는 소프트웨어 스택이자 모바일 운영
          체제이다.
        </p>
      </article>

      <article>
        <h2 id="iphone">
          <a href="https://en.wikipedia.org/wiki/IPhone" target="_blank"
            >아이폰</a
          >
        </h2>
        <p>
          아이폰(영어: iphone)은 2007년 1월 9일, 애플이 발표한 휴대 전화
          시리즈이다. 미국 샌프란시스코에서 열린 맥월드 2007에서 애플의 창업자
          중 한명인 스티브 잡스가 발표했다.
        </p>
      </article>

      <article>
        <h2 id="sample">샘플</h2>
        <table>
          <caption>
            스마트폰샘플
          </caption>
          <tr>
            <td>
              <img src="phone1.jpg" width="100" height="180" alt="갤럭시" />
            </td>
            <td>
              <img src="phone2.jpg" width="100" height="180" alt="아이폰" />
            </td>
            <td>
              <img
                src="phone3.jpg"
                width="100"
                height="180"
                alt="안드로이드폰"
              />
            </td>
            <td>
              <img src="phone4.jpg" width="100" height="180" alt="윈도우폰" />
            </td>
            <td>
              <img src="phone5.jpg" width="100" height="180" alt="루미아" />
            </td>
          </tr>
        </table>
      </article>
    </section>

    <footer>
      <p><a href="survey4.html">설문조사</a></p>
      <p>Copyright 2022 by Kitae</p>
    </footer>
  </body>
</html>
```

### 4.css

```css
/* 전체 스타일 */
body {
  background-color: aliceblue;
}

/* 헤더 스타일 */
header {
  border: 1px solid black;
  padding: 20px;
}

/* h1 스타일 */
h1 {
  color: brown;
  text-align: center;
  border-bottom: 1px solid black;
  padding: 10px;
}

/* 링크 스타일 */
a {
  color: teal;
  text-decoration: none;
}

/* 링크 hover 상태 */
a:hover {
  color: blue;
  text-shadow: 2px 2px 5px gray;
}

/* h2 스타일 */
h2 {
  border-bottom: 1px solid teal;
  padding-bottom: 5px;
}

/* 네비게이션 스타일 */
nav {
  background-color: lightyellow;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 20px;
}

/* 푸터 스타일 */
footer {
  background-color: #f0f0f0;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  border-top: 2px solid black;
}

/* 테이블 스타일 */
table {
  border-collapse: collapse;
  margin: 20px 0;
}

table,
td,
tr {
  border: 1px solid #ccc;
  text-align: center;
}

/* 섹션과 아티클 스타일 */
section {
  padding: 20px;
  background-color: white;
  margin: 10px;
  border-radius: 5px;
}

article {
  margin-bottom: 20px;
  padding: 10px;
}
```

### survey4.html

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>소프트웨어 기술 선호도에 관한 설문</title>
    <link href="survey4.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <header>
      <h1>설문지</h1>
      <p>소프트웨어 기술에 대한 의견을 듣습니다. 많은 참여 부탁드립니다.</p>
      <hr />
    </header>

    <section>
      <form action="http://www.webprogramming.co.kr/submit" method="post">
        <article>
          <label>학년</label><br />
          <input type="radio" name="grade" value="1" checked />1학년
          <input type="radio" name="grade" value="2" />2학년
          <input type="radio" name="grade" value="3" />3학년
          <input type="radio" name="grade" value="4" />4학년
        </article>

        <article>
          <label>성별</label><br />
          <input type="radio" name="gender" value="male" />남
          <input type="radio" name="gender" value="female" />여
        </article>

        <article>
          <label>관심 분야</label><br />
          <select name="field">
            <option value="mobile">모바일 소프트웨어</option>
            <option value="web">웹 소프트웨어</option>
            <option value="ai">인공지능</option>
            <option value="game">게임</option>
            <option value="security">정보 보안</option>
          </select>
        </article>

        <article>
          <label>진로</label><br />
          <input type="checkbox" name="career" value="dev" checked />개발
          <input type="checkbox" name="career" value="plan" />기획
          <input type="checkbox" name="career" value="sales" />영업
          <input type="checkbox" name="career" value="startup" />창업
        </article>

        <article>
          <fieldset>
            <legend>남기고 싶은 말</legend>
            <textarea
              name="comment"
              rows="6"
              cols="50"
              placeholder="글을 남겨주세요"
            ></textarea>
          </fieldset>
        </article>

        <article>
          <input type="submit" value="제출" />
          <input type="reset" value="다시 작성" />
        </article>
      </form>
    </section>

    <footer>
      <hr />
      <p>Copyright 2022 by Kitae</p>
    </footer>
  </body>
</html>
```

### survey4.css

```css
/* 전체 스타일 */
body {
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

/* 헤더 스타일 */
header {
  background-color: aliceblue;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}

header h1 {
  color: brown;
  text-align: center;
  margin: 0 0 10px 0;
}

header p {
  text-align: center;
  color: #333;
}

/* 섹션 스타일 */
section {
  background-color: white;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 폼 아티클 스타일 */
article {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fafafa;
  border-left: 3px solid teal;
}

article label {
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 8px;
}

/* 입력 필드 스타일 */
input[type="radio"],
input[type="checkbox"] {
  margin-right: 5px;
}

input[type="text"],
input[type="email"],
select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
}

/* 텍스트에어리어 스타일 */
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-family: Arial, sans-serif;
  resize: vertical;
}

/* 필드셋 스타일 */
fieldset {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 3px;
  background-color: white;
}

legend {
  padding: 0 10px;
  font-weight: bold;
  color: #333;
}

/* 버튼 스타일 */
input[type="submit"],
input[type="reset"] {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 3px;
  background-color: teal;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}

input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: darkcyan;
  text-shadow: 1px 1px 2px gray;
}

/* 푸터 스타일 */
footer {
  text-align: center;
  padding: 20px;
  color: #666;
  margin-top: 30px;
  border-top: 2px solid #ddd;
}

footer p {
  margin: 5px 0;
}
```
