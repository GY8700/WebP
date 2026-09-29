# 4장 CSS3 스타일 시트 기초 예제 소스 코드 모음

4장에 등장하는 **예제 4-1부터 예제 4-21까지의 모든 소스 코드**와 외부 CSS 파일(`mystyle.css`, `external.css`)입니다. 깃허브 업로드 시 해당 파일명으로 저장하시면 됩니다.

---

### **예제 4-1: HTML 태그로만 작성한 웹 페이지 (`ex4-01.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>스타일 없는 웹 페이지</title>
</head>
<body>
    <h3>CSS 스타일 맛보기</h3>
    <hr>
    <p>나는 <span>웹 프로그래밍</span>을 좋아합니다.</p>
</body>
</html>
```

---

### **예제 4-2: CSS3 스타일 시트로 꾸민 웹 페이지 (`ex4-02.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>스타일을 가진 웹 페이지</title>
    <style>
        /* CSS 스타일 시트 작성 */
        body { background-color : mistyrose; }
        h3 { color : purple; }
        hr { border : 5px solid yellowgreen; }
        span { color : blue; font-size : 20px; }
    </style>
</head>
<body>
    <h3>CSS 스타일 맛보기</h3>
    <hr>
    <p>나는 <span>웹 프로그래밍</span>을 좋아합니다.</p>
</body>
</html>
```

---

### **예제 4-3: <style> 태그로 스타일 시트 만들기 (`ex4-03.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>&lt;style&gt; 태그로 스타일 만들기</title>
    <style>
        body {
            background-color : linen;
            color : blueviolet;
            margin-left : 30px;
            margin-right : 30px;
        }
        h3 {
            text-align : center;
            color : darkred;
        }
    </style>
</head>
<body>
    <h3>소연재</h3>
    <hr>
    <p>저는 체조 선수 소연재입니다. 음악을 들으면서 책읽기를 좋아합니다. 김치 찌개와 막국수 무척 좋아합니다.</p>
</body>
</html>
```

---

### **예제 4-4: style 속성에 스타일 시트 만들기 (`ex4-04.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>&lt;style&gt; 속성에 스타일 만들기</title>
    <style>
        p { color : red; font-size : 15px; } /* 모든 p 태그에 적용 */
    </style>
</head>
<body>
    <h3>손 홍 민</h3>
    <hr>
    <p>오페라를 좋아하고</p>
    <p>엘비스 프레슬리를 좋아하고</p>
    <p style="color:blue">김치부침개를 좋아하고</p>
    <p style="color:magenta; font-size:30px">축구를 좋아합니다.</p>
</body>
</html>
```

---

### **예제 4-5: <link> 태그로 CSS3 파일 불러오기**

**`ex4-05.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>&lt;link&gt; 태그로 스타일 파일 불러오기</title>
    <link type="text/css" rel="stylesheet" href="mystyle.css">
</head>
<body>
    <h3>소연재</h3>
    <hr>
    <p>저는 체조 선수 소연재입니다. 음악을 들으면서 책읽기를 좋아합니다. 김치 찌개와 막국수 무척 좋아합니다.</p>
</body>
</html>
```

**`mystyle.css`**
```css
/* mystyle.css */
body {
    background-color : linen;
    color : blueviolet;
    margin-left : 30px;
    margin-right : 30px;
}
h3 {
    text-align : center;
    color : darkred;
}
```

---

### **예제 4-6: @import로 external/외부 CSS3 파일 불러오기 (`ex4-06.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>&lt;@import&gt;로 외부 스타일 불러오기</title>
    <style>
        @import url(mystyle.css);
    </style>
</head>
<body>
    <h3>소연재</h3>
    <hr>
    <p>저는 체조 선수 소연재입니다. 음악을 들으면서 책읽기를 좋아합니다. 김치 찌개와 막국수 무척 좋아합니다.</p>
</body>
</html>
```

---

### **예제 4-7: 부모 스타일 상속 (`ex4-07.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>부모 스타일 상속</title>
</head>
<body>
    <h3>부모 스타일 상속</h3>
    <hr>
    <p style="color:green">자식 태그는 부모의 스타일을 <em style="font-size:25px">상속</em>받는다.</p>
</body>
</html>
```

---

### **예제 4-8: 여러 스타일 시트가 중첩되는 경우**

**`ex4-08.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>스타일 합치기 및 오버라이딩</title>
    <link type="text/css" rel="stylesheet" href="external.css">
    <style>
        p { color : blue; font-size : 12px; }
    </style>
</head>
<body>
    <h3>p 태그에 중첩된 스타일</h3>
    <hr>
    <p>Hello, students!</p>
    <p style="font-size:25px">안녕하세요 교수님!</p>
</body>
</html>
```

**`external.css`**
```css
/* external.css */
p {
    background : mistyrose;
}
```

---

### **예제 4-9: 셀렉터 활용 (`ex4-09.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>셀렉터 만들기</title>
    <style>
        h3, li { /* 태그 이름 셀렉터 */
            color : brown;
        }
        div > div > strong { /* 자식 셀렉터 */
            background : yellow;
        }
        ul strong { /* 자손 셀렉터 */
            color : dodgerblue;
        }
        .warning { /* class 셀렉터 */
            color : red;
        }
        body.main { /* class 셀렉터 */
            background : aliceblue;
        }
        #list { /* id 셀렉터 */
            background : mistyrose;
        }
        #list span { /* 자손 셀렉터 */
            color : forestgreen;
        }
        h3:first-letter { /* 가상 클래스 셀렉터 */
            color : red;
        }
        li:hover { /* 가상 클래스 셀렉터 */
            background : yellowgreen;
        }
    </style>
</head>
<body class="main">
    <h3>Web Programming</h3>
    <hr>
    <div>
        <div>2학기 <strong>학습 내용</strong>입니다.</div>
        <ul id="list">
            <li><span>HTML5</span></li>
            <li><strong>CSS</strong></li>
            <li>JAVASCRIPT</li>
        </ul>
        <div class="warning">60점 이하는 F</div>
    </div>
</body>
</html>
```

---

### **예제 4-10: CSS3 색 활용 (`ex4-10.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>CSS3 색 활용</title>
    <style>
        div {
            margin-left : 30px;
            margin-right : 30px;
            margin-bottom : 10px;
            color : white;
        }
    </style>
</head>
<body>
    <h3>CSS3 색 활용</h3>
    <hr>
    <div style="background-color:deepskyblue">deepskyblue(#00BFFF)</div>
    <div style="background-color:brown">brown(#A52A2A)</div>
    <div style="background-color:fuchsia">fuchsia(#FF00FF)</div>
    <div style="background-color:darkorange">darkorange(#FF8C00)</div>
    <div style="background-color:#008B8B">darkcyan(#008B8B)</div>
    <div style="background-color:#6B8E23">olivedrab (#6B8E23)</div>
</body>
</html>
```

---

### **예제 4-11: 텍스트 꾸미기 (`ex4-11.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>텍스트 꾸미기</title>
    <style>
        h3 { text-align : right; }
        span { text-decoration : line-through; }
        strong { text-decoration : overline; }
        .p1 {
            text-indent : 3em;
            text-align : justify;
        }
        .p2 {
            text-indent : 1em;
            text-align : center;
        }
    </style>
</head>
<body>
    <h3>텍스트 꾸미기</h3>
    <hr>
    <p class="p1">HTML의 태그만으로 기존의 워드 프로세서와 같이 들여쓰기, 정렬, 공백, 간격 등과 세밀한 <span>텍스트 제어</span>를 할 수 없다.</p>
    <p class="p2">그러나, <strong>스타일 시트</strong>는 이를 가능하게 한다. 들여쓰기, 정렬에 대해서 알아본다.</p>
    <a href="http://www.naver.com" style="text-decoration:none">밑줄이 없는 네이버 링크</a>
</body>
</html>
```

---

### **예제 4-12: CSS3 폰트 활용 (`ex4-12.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>폰트</title>
    <style>
        body { font-family : "Times New Roman", Times, serif; }
        h3 { font : italic bold 40px consolas, sans-serif; }
    </style>
</head>
<body>
    <h3>Consolas font</h3>
    <hr>
    <p style="font-weight:900">font-weight 900</p>
    <p style="font-weight:100">font-weight 100</p>
    <p style="font-style:italic">Italic Style</p>
    <p style="font-style:oblique">Oblique Style</p>
    <p>현재 크기의 <span style="font-size:1.5em">1.5배</span> 크기로</p>
</body>
</html>
```

---

### **예제 4-13: <div>의 박스 모델 보이기 (`ex4-13.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>박스 모델</title>
    <style>
        body { background : ghostwhite; }
        span { background : deepskyblue; }
        div.box {
            background : yellow;
            border-style : solid;
            border-color : peru;
            margin : 40px;
            border-width : 30px;
            padding : 20px;
        }
    </style>
</head>
<body>
    <div class="box">
        <span>DIVDIVDIV</span>
    </div>
</body>
</html>
```

---

### **예제 4-14: 박스 모델 활용 (`ex4-14.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>박스 모델</title>
    <style>
        div {
            background : yellow;
            padding : 20px;
            border : 5px dotted red;
            margin : 30px;
        }
    </style>
</head>
<body>
    <h3>박스 모델</h3>
    <p>margin 30px, padding 20px, border 5px의 빨간색 점선</p>
    <hr>
    <div>
        <img src="media/mio.png" alt="고양이눈">
    </div>
</body>
</html>
```

---

### **예제 4-15: 다양한 테두리 선 스타일 (`ex4-15.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>다양한 테두리</title>
</head>
<body>
    <h3>다양한 테두리</h3>
    <hr>
    <p style="border: 3px solid blue">3픽셀 solid</p>
    <p style="border: 3px none blue">3픽셀 none</p>
    <p style="border: 3px hidden blue">3픽셀 hidden</p>
    <p style="border: 3px dotted blue">3픽셀 dotted</p>
    <p style="border: 3px dashed blue">3픽셀 dashed</p>
    <p style="border: 3px double blue">3픽셀 double</p>
    <p style="border: 15px groove yellow">15픽셀 groove</p>
    <p style="border: 15px ridge yellow">15픽셀 ridge</p>
    <p style="border: 15px inset yellow">15픽셀 inset</p>
    <p style="border: 15px outset yellow">15픽셀 outset</p>
</body>
</html>
```

---

### **예제 4-16: 다양한 둥근 모서리 테두리 (`ex4-16.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>둥근 모서리 테두리</title>
    <style>
        p {
            background : #90D000;
            width : 300px;
            padding : 20px;
        }
        #round1 { border-radius : 50px; }
        #round2 { border-radius : 0px 20px 40px 60px; }
        #round3 { border-radius : 0px 20px 40px; }
        #round4 { border-radius : 0px 20px; }
        #round5 { border-radius : 50px; border : 2px dotted black; }
    </style>
</head>
<body>
    <h3>둥근 모서리 테두리</h3>
    <hr>
    <p id="round1">반지름 50픽셀의 둥근 모서리</p>
    <p id="round2">반지름 0, 20, 40, 60 둥근 모서리</p>
    <p id="round3">반지름 0, 20, 40, 20 둥근 모서리</p>
    <p id="round4">반지름 0, 20, 0, 20 둥근 모서리</p>
    <p id="round5">반지름 50의 둥근 점선 모서리</p>
</body>
</html>
```

---

### **예제 4-17: 이미지 테두리 만들기 (`ex4-17.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>이미지 테두리 만들기</title>
    <style>
        p {
            background : yellow;
            width : 200px;
            height : 60px;
            padding : 10px;
            border : 20px solid lightgray;
        }
        #round { border-image: url("media/border.png") 30 round; }
        #repeat { border-image: url("media/border.png") 30 repeat; }
        #stretch { border-image: url("media/border.png") 30 stretch; }
    </style>
</head>
<body>
    <h3>이미지 테두리 만들기</h3>
    <hr>
    다음은 원본 이미지입니다.<br>
    <img src="media/border.png" alt="원본">
    <hr>
    <p>20x20 크기의 회색 테두리를 가진 P 태그</p>
    <p id="round">round 스타일 이미지 테두리</p>
    <p id="repeat">repeat 스타일 이미지 테두리</p>
    <p id="stretch">stretch 스타일 이미지 테두리</p>
</body>
</html>
```

---

### **예제 4-18: <div> 박스에 배경 꾸미기 (`ex4-18.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>배경 꾸미기</title>
    <style>
        div {
            background-color : skyblue;
            background-size : 100px 100px;
            background-image : url("media/spongebob.png");
            background-repeat : repeat-y;
            background-position : center center;
            width : 300px;
            height : 300px;
            color : violet;
            font-size : 20px;
        }
    </style>
</head>
<body>
    <h3>div 박스에 배경 꾸미기</h3>
    <hr>
    <div>SpongeBob is an over-optimistic sponge that annoys other characters.</div>
</body>
</html>
```

---

### **예제 4-19: text-shadow로 텍스트 그림자 만들기 (`ex4-19.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>텍스트 그림자</title>
    <style>
        div { font : normal 24px verdana; }
        .dropText { text-shadow : 3px 3px; }
        .redText { text-shadow : 3px 3px red; }
        .blurText { text-shadow : 3px 3px 5px skyBlue; }
        .glowEffect { text-shadow : 0px 0px 3px red; }
        .wordArtEffect {
            color : white;
            text-shadow : 0px 0px 3px darkBlue;
        }
        .threeDEffect {
            color : white;
            text-shadow : 2px 2px 4px black;
        }
        .multiEffect {
            color : yellow;
            text-shadow : 2px 2px 2px black, 0 0 25px blue, 0 0 5px darkblue;
        }
    </style>
</head>
<body>
    <h3>텍스트 그림자 만들기</h3>
    <hr>
    <div class="dropText">Drop Shadow</div>
    <div class="redText">Color Shadow</div>
    <div class="blurText">Blur Shadow</div>
    <div class="glowEffect">Glow Effect</div>
    <div class="wordArtEffect">WordArt Effect</div>
    <div class="threeDEffect">3D Effect</div>
    <div class="multiEffect">Multiple Shadow Effect</div>
</body>
</html>
```

---

### **예제 4-20: box-shadow로 박스 그림자 만들기 (`ex4-20.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>div 박스에 그림자 만들기</title>
    <style>
        .redBox { box-shadow : 10px 10px red; }
        .blurBox { box-shadow : 10px 10px 5px skyBlue; }
        .multiEffect {
            box-shadow : 2px 2px 2px black, 0 0 25px blue, 0 0 5px darkblue;
        }
        div {
            width : 150px;
            height : 70px;
            padding : 10px;
            border : 10px solid lightgray;
            background-image : url("media/spongebob.png");
            background-size : 150px 100px;
            background-repeat : no-repeat;
        }
    </style>
</head>
<body>
    <h3>박스 그림자 만들기</h3>
    <hr>
    <div class="redBox">뚱이와 함께</div><br>
    <div class="blurBox">뚱이와 함께</div><br>
    <div class="multiEffect">뚱이와 함께</div>
</body>
</html>
```

---

### **예제 4-21: 마우스 커서 (`ex4-21.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>마우스 커서</title>
</head>
<body>
    <h3>마우스 커서</h3>
    아래에 마우스를 올려 보세요. 커서가 변합니다.
    <hr>
    <p style="cursor: crosshair">십자 모양 커서</p>
    <p style="cursor: help">도움말 모양 커서</p>
    <p style="cursor: pointer">포인터 모양 커서</p>
    <p style="cursor: progress">프로그램 실행 중 모양 커서</p>
    <p style="cursor: n-resize">상하 크기 조절 모양 커서</p>
</body>
</html>
```
