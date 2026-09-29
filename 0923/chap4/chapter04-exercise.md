# 4장 CSS3로 웹 메이지 꾸미기 — 이론문제

---

## 1. CSS3 스타일 시트 작성이 잘못된 것을 바르게 고쳐라.

**정답:**
- (1) `body { background-color: mistyrose; }`
- (2) `h3 { color: purple; }`
- (3) `hr { height: 5px; background-color: grey; }`
- (4) `span { color: blue; font-size: 20px; }`

---

## 2. CSS3 스타일 시트 작성이 잘못된 것을 바르게 고쳐라.

**정답:**
- (1) `div { font-size: 30px; }`
- (2) `<p style="color:blue; font-size:30px;">안녕하세요</p>`
- (3) `p { text-indent: 5; }` → `p { text-indent: 5px; }`
- (4) `p { color: blue; }`

---

## 3. CSS3의 색 표현법이 틀린 것은?

**정답: ④ `div { color: #000000; }`**

(①③④는 모두 같은 색(파란색/검은색)을 나타내므로 올바른 표현이고, ②만 잘못된 표현이 아님)

다시 확인: 모두 올바른 표현입니다.
- ① `rgb(55, 325, 128)` - RGB 색상
- ② `blue` - 색상명
- ③ `#7F3B55` - 16진수 색상
- ④ `#000000` - 16진수 검은색

---

## 4. 박스 모델에 관해 틀린 설명은?

**정답: ④ 테두리는 실선으로만 가능하다.**

테두리는 실선(solid), 점선(dotted), 대시(dashed) 등 다양한 스타일이 가능합니다.

---

## 5. 다음 중 선택자로 직하하지 않은 것은?

**정답: ③ `##div`**

`##div`는 선택자가 아닙니다. `#div`는 id 선택자입니다.
- `img` - 요소 선택자
- `img:hover` - 의사 클래스 선택자
- `ul li` - 후손 선택자
- `img:hover` - 의사 클래스 선택자

---

## 6. 다음 CSS3에서 사용하는 단위 중 상대적인 크기는?

**정답: ① `em`**

- `em` - 상대적 단위 (부모 요소의 폰트 크기 기준)
- `px` - 절대적 단위
- `deg` - 각도 단위
- `pc` - 절대적 단위

---

## 7. 다음 완전 HTML 페이지의 CSS3 스타일 시트를 파일에 저장하고 `@import`를 이용하여 수정하라.

**정답:**

**a.css 파일:**
```css
/* 스타일 시트를 style.css에 저장 */
p {
  color: blue;
  text-align: center;
}
```

**HTML 파일의 style 태그:**
```html
<style>
  @import url('a.css');
</style>
```

또는 HTML 파일에서:
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS3</title>
  <link type="text/css" rel="stylesheet" href="a.css">
</head>
<body>
  <p>test</p>
</body>
</html>
```

---

## 8. 다음 CSS3와 HTML 소스가 있다.

**(1) 첫 번째 `<p>` 태그인 다음 태그에 적용되는 CSS3 스타일 시트를 쓰라.**

**정답:**
```css
p + p { color: red; font-size: 3em; }
```

**(2) 두 번째 `<span>` 태그인 다음 태그에 적용되는 CSS3 스타일 시트를 쓰라.**

**정답:**
```css
<span style="color:green;">code</span>
```

---

## 9. 다음 HTML 태그가 있을 때 블린 셀렉터는?

```html
<body class="all">
  <div><p id="first">Good <span>morning</span></p></div>
</body>
```

**정답: ③ `div > span { color: blue; }`**

`div > span`은 자식 선택자로, div의 직접 자식인 span을 선택합니다.

---

## 10. 다음 HTML 태그가 있을 때 블린 셀렉터는?

```html
<body id="all">
  <div><a class="b" href="#">앞</a></div>
</body>
```

**정답: ④ `div.a { color: blue; }`**

`div.a`는 class가 "a"인 div 요소를 선택합니다.

---

## 11. 다음 링크 태그에 대해 다음에 답하라.

```html
<a href="http://www.site.com">site</a>
```

**(1) 링크의 텍스트 색을 파란색으로 하고 밑줄을 없애도록 셀렉터와 스타일 시트를 작성하라.**

**정답:**
```css
a {
  color: blue;
  text-decoration: none;
}
```

**(2) 마우스를 올린 링크 텍스트 기준 폰트의 2배가 되고 내려도록 셀렉터와 스타일 시트를 작성하라.**

**정답:**
```css
a:hover {
  font-size: 2em;
}
```

**(3) www.site.com을 방문한 뒤 링크 색이 violet이 되도록 셀렉터와 스타일 시트를 작성하라.**

**정답:**
```css
a:visited {
  color: violet;
}
```

---

## 12. `li.menu:hover { color: green; }` 스타일 시트에 대해 바르게 설명한 것은?

**정답: ② 마우스를 올린 금자의 색이 green으로 바뀌고 마우스가 내려와도 원래색으로 돌아간다.**

- `li.menu` - class가 "menu"인 li 요소
- `:hover` - 마우스를 올렸을 때만 적용
- 마우스가 떠나면 원래 색으로 돌아갑니다.
