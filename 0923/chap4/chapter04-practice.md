# 4장 CSS3로 웹 페이지 꾸미기 — 실습문제

---

## 1. 다음 HTML 소스에 태그 이름 셀렉터로 스타일 시트를 사용하여 브라우저 출력과 같게 하라.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>태그 셀렉터 만들기</title>
  </head>
  <body>
    <h3>소연제</h3>
    <hr />
    <p>
      저는 체조 선수 소연재입니다. <span>음악</span>을 들으면서 책읽기를
      좋아합니다. <span>김치 찌개</span>와 <span>막국수 </span> 무척 좋아합니다.
    </p>
  </body>
</html>
```

**정답:**

```css
h3 {
  color: purple;
}

hr {
  height: 5px;
  background-color: grey;
}

span {
  color: blue;
  font-size: 20px;
}
```

---

## 2. 다음 HTML 소스에 태그 이름 셀렉터로 스타일 시트를 사용하여 브라우저 출력과 같게 하라.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>텍스트 꾸미기</title>
  </head>
  <body>
    <h3>테스트와 폰트</h3>
    <hr />
    <p>
      AliceBlue 바탕색에 Brown 색의 "Lucida Console" 폰트로 10px 크기이고
      <span>저는 이보다 1.5배 큽니다.</span>
    </p>
  </body>
</html>
```

**정답:**

```css
h3 {
  color: brown;
  font-family: "Lucida Console";
  font-size: 10px;
}

span {
  color: brown;
  font-size: 1.5em;
}
```

---

## 3. 다음과 같이 색 이름, 색 코드, 색을 보여주는 테이블을 작성하라.

| 이름        | 코드    | 색  |
| ----------- | ------- | --- |
| Brown       | #A52A2A |     |
| Blueviolet  | #8A2BE2 |     |
| DarkOrange  | #FF8C00 |     |
| DeepSkyBlue | #00BFFF |     |
| Gold        | #FFD700 |     |
| OliveDrab   | #6B8E23 |     |

**정답:**

| 이름        | 코드    | RGB 값            |
| ----------- | ------- | ----------------- |
| Brown       | #A52A2A | rgb(165, 42, 42)  |
| Blueviolet  | #8A2BE2 | rgb(138, 43, 226) |
| DarkOrange  | #FF8C00 | rgb(255, 140, 0)  |
| DeepSkyBlue | #00BFFF | rgb(0, 191, 255)  |
| Gold        | #FFD700 | rgb(255, 215, 0)  |
| OliveDrab   | #6B8E23 | rgb(107, 142, 35) |

---

## 4. HTML 태그를 수정하여 말고 셀렉터와 스타일 시트를 삽입하여 다음과 같이 출력되게 하라.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>셀렉터 만들기</title>
  </head>
  <body class="main">
    <h3 class="headline">클래스 셀렉터</h3>
    <hr />
    <div class="hlp">도움말</div>
    <p class="help">!!경고 메시지!!</p>
    <p id="hot">도움을 댓글!</p>
  </body>
</html>
```

**정답:**

```css
.main {
  /* body의 메인 클래스 스타일 */
}

.headline {
  /* h3 제목 스타일 */
}

.hlp {
  /* div의 도움말 상자 스타일 */
}

.help {
  /* p의 도움말 메시지 스타일 */
}

#hot {
  /* p의 긴급 정보 스타일 */
}
```

---

## 5. HTML 태그를 수정하여 말고 셀렉터와 스타일 시트를 삽입하여 다음과 같이 출력되게 하라.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>셀렉터</title>
  </head>
  <body class="main">
    <h3>얼굴</h3>
    <hr />
    <div id="center"><strong>박인희</strong></div>
    <div class="indent">
      <p><em>길</em>을 걷고 산들 무엇하리</p>
      <p><strong>꽃</strong>이 내가 아니듯 내가</p>
      <p><strong>꽃</strong>이 될 수 없는 지금...</p>
    </div>
  </body>
</html>
```

**정답:**

```css
#center {
  text-align: center;
}

.indent p {
  margin-left: 2em;
}

em {
  color: red;
}

strong {
  color: red;
}
```

---

## 6. 아래와 같이 HTML 페이지를 작성하여 초록색에 링크와 마우스를 올리면 빨강과 violet 색으로 바뀌는 HTML 페이지를 작성하라.

```html
<a href="http://www.naver.com">site</a>
```

(1) 링크의 텍스트 색을 파란색 파란색으로 하고 밑줄을 없이도록 셀렉터와 스타일 시트를 작성하라.
(2) 마우스를 올리면 금자의 색이 green으로 바뀌고 마우스가 내려와도 원래색으로 돌아가지 않는다.
(3) www.naver.com을 방문하고 난 후 링크 색이 violet이 되도록 셀렉터와 스타일 시트를 작성하라.

**정답:**

```css
a {
  color: blue;
  text-decoration: none;
}

a:hover {
  color: green;
}

a:visited {
  color: violet;
}
```

---

## 7. <div> 태그를 이용하여 카드의 뒷면을 출력하고, 마우스를 올리면 카드의 앞면이 보이게 하는 HTML 페이지를 작성하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>카드 뒤집기</title>
    <style>
      .card-container {
        width: 150px;
        height: 200px;
        position: relative;
        cursor: pointer;
      }

      .card {
        width: 100%;
        height: 100%;
        background-image: url("card-back.jpg");
        background-size: cover;
        transition: all 0.3s;
      }

      .card-container:hover .card {
        background-image: url("card-front.jpg");
      }
    </style>
  </head>
  <body>
    <div class="card-container">
      <div class="card"></div>
    </div>
  </body>
</html>
```

---

## 8. <img> 태그로 이미지를 출력하고, 액자 모양의 이미지 테두리를 만들어라. 테두리의 두께는 15px, 패딩은 5px로 하여 테두리와 이미지 사이에 공간이 있게 하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>이미지 테두리 만들기</title>
    <style>
      .frame {
        border: 15px solid #8b7355;
        padding: 5px;
        display: inline-block;
      }

      .frame img {
        display: block;
      }
    </style>
  </head>
  <body>
    <div class="frame">
      <img src="sunset.jpg" alt="일몰 사진" />
    </div>
  </body>
</html>
```

**설명:**

- `border: 15px`: 테두리 두께 15px
- `padding: 5px`: 테두리와 이미지 사이 간격 5px
- `display: inline-block`: 이미지 크기만큼 박스 생성

---

## 9. 다음 페이지를 작성하라. Most Visited Pages 테스트를 text-shadow로 구성하고, 이미지에 마우스를 올리면 box-shadow를 이용하여 박스 그림자가 보이게 하라.

**정답:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>text-shadow와 box-shadow</title>
    <style>
      h2 {
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
        font-size: 28px;
        color: #333;
      }

      .thumbnail {
        border: 2px solid #ccc;
        padding: 5px;
        transition: box-shadow 0.3s;
      }

      .thumbnail:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      }
    </style>
  </head>
  <body>
    <h2>Most Visited Pages</h2>
    <div class="thumbnail">
      <img src="naver.jpg" alt="네이버" />
    </div>
    <div class="thumbnail">
      <img src="amazon.jpg" alt="아마존" />
    </div>
  </body>
</html>
```

**설명:**

- `text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5)`: x 오프셋 3px, y 오프셋 3px, 블러 5px, 반투명 검정색
- `box-shadow`: hover 상태에서 박스 주변에 그림자 표시
- `transition`: 부드러운 애니메이션 효과
