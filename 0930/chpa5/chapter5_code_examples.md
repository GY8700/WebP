# 5장: CSS3 고급 활용 (배치, 스타일 응용, 애니메이션 및 변환) 예제 소스 코드 모음

이 문서는 웹프로그래밍 5장에 등장하는 예제 5-1부터 예제 5-14까지의 전체 소스 코드를 깃허브(GitHub)에 번호별 단일 파일로 손쉽게 올리실 수 있도록 정돈한 모음집입니다.

---

### **예제 5-1: display 프로퍼티로 박스 유형 설정 (`ex5-01.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>display 프로퍼티</title>
    <style>
        div {
            border : 2px solid yellowgreen;
            color : blue;
            background : aliceblue;
        }
        span {
            border : 3px dotted red;
            background : yellow;
        }
    </style>
</head>
<body>
    <h3>인라인, 인라인 블록, 블록</h3>
    <hr>
    나는 <div style="display:none">div(none)</div>입니다.<br><br>
    나는 <div style="display:inline">div(inline)</div> 입니다.<br><br>
    나는 <div style="display:inline-block; height:50px">div(inline-block)</div> 입니다.<br><br>
    나는 <div>div<span style="display:block">span(block)</span> 입니다.</div>
</body>
</html>
```

---

### **예제 5-2: position : relative 상대 배치 (`ex5-02.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>relative 배치</title>
    <style>
        div {
            display : inline-block;
            height : 50px;
            width : 50px;
            border : 1px solid lightgray;
            text-align : center;
            color : white;
            background : red;
        }
        #down:hover {
            position : relative;
            left : 20px;
            top : 20px;
            background : green;
        }
        #up:hover {
            position : relative;
            right : 20px;
            bottom : 20px;
            background : green;
        }
    </style>
</head>
<body>
    <h3>상대 배치, relative</h3>
    h와 k 글자에 마우스를 올려 보세요
    <hr>
    <div>T</div>
    <div id="down">h</div>
    <div>a</div>
    <div>n</div>
    <div id="up">k</div>
    <div>s</div>
</body>
</html>
```

---

### **예제 5-3: position : absolute 절대 배치 (`ex5-03.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>절대 배치</title>
    <style>
        div {
            display : inline-block;
            position : absolute;
            border : 1px solid lightgray;
        }
        div > p {
            display : inline-block;
            position : absolute;
            height : 20px;
            width : 15px;
            background : lightgray;
        }
    </style>
</head>
<body>
    <h3>Merry Christmas!</h3>
    <hr>
    <p>예수님이 탄생하셨습니다.</p>
    <div>
        <img src="media/christmastree.png" width="200" height="200" alt="크리스마스 트리">
        <p style="left:50px; top:30px">M</p>
        <p style="left:100px; top:0px">E</p>
        <p style="left:100px; top:80px">R</p>
        <p style="left:150px; top:110px">R</p>
        <p style="left:30px; top:130px">Y</p>
    </div>
</body>
</html>
```

---

### **예제 5-4: position : fixed 고정 배치 (`ex5-04.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>고정 배치</title>
    <style>
        #fixed {
            position : fixed;
            bottom : 10px;
            right : 10px;
            width : 100px;
            padding : 5px;
            background : red;
            color : white;
        }
    </style>
</head>
<body>
    <h3>Merry Christmas!</h3>
    <hr>
    <img src="media/christmastree.png" width="300" height="300" alt="크리스마스 트리">
    <div id="fixed">예수님이 탄생하셨습니다.</div>
</body>
</html>
```

---

### **예제 5-5: float : right로 유동 배치 (`ex5-05.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>float 배치</title>
    <style>
        #float {
            float : right;
            border : 1px dotted black;
            width : 8em;
            padding : 0.25em;
            margin : 1em;
        }
    </style>
</head>
<body>
    <h3>학기말 공지</h3>
    <hr>
    <div>
        <p id="float">24일은 피아니스트 조성진의 크리스마스 특별 연주가 있습니다.</p>
        <p>이제 곧 겨울 방학이 시작됩니다. 학기 중 못다한 Java, C++ 프로그래밍 열심히 하기 바랍니다. 인턴을 준비하는 학생들은 프로젝트 개발에 더욱 힘쓰세요. 그럼 다음 학기에 만나요.</p>
    </div>
</body>
</html>
```

---

### **예제 5-6: z-index로 카드 쌓기 (`ex5-06.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>z-index 프로퍼티</title>
    <style>
        div { position : absolute; }
        img { position : absolute; }
        #spadeA { z-index : -3; left : 10px; top : 20px; }
        #spade2 { z-index : 2; left : 40px; top : 30px; }
        #spade3 { z-index : 3; left : 80px; top : 40px; }
        #spade7 { z-index : 7; left : 120px; top : 50px; }
    </style>
</head>
<body>
    <h3>z-index 프로퍼티</h3>
    <hr>
    <div>
        <img id="spadeA" src="media/spade-A.png" width="100" height="140" alt="스페이드A">
        <img id="spade2" src="media/spade-2.png" width="100" height="140" alt="스페이드2">
        <img id="spade3" src="media/spade-3.png" width="100" height="140" alt="스페이드3">
        <img id="spade7" src="media/spade-7.png" width="100" height="140" alt="스페이드7">
    </div>
</body>
</html>
```

---

### **예제 5-7: visibility 프로퍼티로 텍스트 숨기기 (`ex5-07.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>visibility 프로퍼티</title>
    <style>
        span { visibility : hidden; }
    </style>
</head>
<body>
    <h3>다음 빈 곳에 숨은 단어?</h3>
    <hr>
    <ul>
        <li>I (<span>love</span>) you.</li>
        <li>CSS is Cascading (<span>Style</span>) Sheet.</li>
        <li>응답하라 (<span>1988</span>).</li>
    </ul>
</body>
</html>
```

---

### **예제 5-8: overflow 프로퍼티 활용 (`ex5-08.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>overflow 프로퍼티</title>
    <style>
        p {
            width : 15em;
            height : 3em;
            border : 1px solid lightgray;
        }
        .hidden { overflow : hidden; }
        .visible { overflow : visible; }
        .scroll { overflow : scroll; }
    </style>
</head>
<body>
    <h3>overflow 프로퍼티</h3>
    <hr>
    <p class="hidden">overflow에 hidden 값을 적용하면 박스를 넘어가는 내용이 잘려 보이지 않습니다.</p><br>
    <p class="visible">overflow에 visible 값을 적용하면 콘텐츠가 박스를 넘어 가사도 출력됩니다.</p><br>
    <p class="scroll">overflow에 scroll 값을 적용하면 박스에 스크롤바를 붙여 출력합니다.</p>
</body>
</html>
```

---

### **예제 5-9: 리스트로 내비게이션 메뉴 만들기 (`ex5-09.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>리스트로 메뉴 만들기</title>
    <style>
        #menubar {
            background : olive;
            height : 50px;
        }
        #menubar ul {
            margin : 0;
            padding : 0;
            width : 560px;
        }
        #menubar ul li {
            display : inline-block;
            list-style-type : none;
            padding : 0px 15px;
        }
        #menubar ul li a {
            color : white;
            text-decoration : none;
        }
        #menubar ul li a:hover {
            color : violet;
        }
    </style>
</head>
<body>
    <nav id="menubar">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Espresso</a></li>
            <li><a href="#">Cappuccino</a></li>
            <li><a href="#">Cafe Latte</a></li>
            <li><a href="#">F.A.Q</a></li>
        </ul>
    </nav>
</body>
</html>
```

---

### **예제 5-10: 마우스가 올라오면 행의 배경색이 변하는 표 만들기 (`ex5-10.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>표 응용 1</title>
    <style>
        table {
            border-collapse : collapse;
        }
        thead, tfoot {
            background : darkgray;
            color : yellow;
        }
        tbody tr:nth-child(even) {
            background : aliceblue;
        }
        tbody tr:hover {
            background : pink;
        }
    </style>
</head>
<body>
    <h3>1학기 성적</h3>
    <hr>
    <table>
        <thead>
            <tr><th>이름</th><th>HTML</th><th>CSS</th></tr>
        </thead>
        <tfoot>
            <tr><th>합</th><th>310</th><th>249</th></tr>
        </tfoot>
        <tbody>
            <tr><td>황기태</td><td>80</td><td>70</td></tr>
            <tr><td>이재문</td><td>95</td><td>99</td></tr>
            <tr><td>이병은</td><td>85</td><td>90</td></tr>
            <tr><td>김남윤</td><td>50</td><td>40</td></tr>
        </tbody>
    </table>
</body>
</html>
```

---

### **예제 5-11: 스타일로 폼 꾸미기 (`ex5-11.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>폼 꾸미기</title>
    <style>
        input[type=text], input[type=email] {
            color : red;
        }
        input:hover, textarea:hover {
            background : aliceblue;
        }
        input:focus, textarea:focus {
            font-size : 120%;
        }
        label {
            display : block;
            margin-bottom : 5px;
        }
        label span {
            float : left;
            width : 90px;
            text-align : right;
            padding-right : 10px;
        }
    </style>
</head>
<body>
    <h3>CONTACT US</h3>
    <hr>
    <form>
        <label>
            <span>Name</span><input type="text" placeholder="Elvis">
        </label>
        <label>
            <span>Email</span><input type="email" placeholder="elvis@graceland.com">
        </label>
        <label>
            <span>Comment</span><textarea placeholder="메시지를 남겨주세요"></textarea>
        </label>
        <label>
            <span></span><input type="submit" value="submit">
        </label>
    </form>
</body>
</html>
```

---

### **예제 5-12: 애니메이션 만들기 (`ex5-12.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>애니메이션</title>
    <style>
        @keyframes bomb {
            from { font-size : 500%; }
            to { font-size : 100%; }
        }
        h3 {
            animation-name : bomb;
            animation-duration : 3s;
            animation-iteration-count : infinite;
        }
    </style>
</head>
<body>
    <h3>꽝!</h3>
    <hr>
    <p>꽝! 글자가 3초동안 500%에서 시작하여 100%로 바뀌는 애니메이션입니다. 무한 반복합니다.</p>
</body>
</html>
```

---

### **예제 5-13: 전환(transition) 효과 만들기 (`ex5-13.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>전환 효과</title>
    <style>
        span {
            transition : font-size 2s, transform 2s;
            display : inline-block;
        }
        span:hover {
            font-size : 500%;
            transform : rotate(360deg);
        }
    </style>
</head>
<body>
    <h3>마우스를 올려보세요</h3>
    <hr>
    <p>마우스를 올리면 글자가 2초 동안 500%로 커지고 360도 회전합니다.</p>
    <span>HOVER ME</span>
</body>
</html>
```

---

### **예제 5-14: 다양한 변환(transform) 사례 (`ex5-14.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>다양한 변환 사례</title>
    <style>
        div {
            display : inline-block;
            padding : 5px;
            color : white;
            background : olivedrab;
        }
        div#rotate { transform : rotate(20deg); }
        div#skew { transform : skew(0deg, -20deg); }
        div#translate { transform : translateY(100px); }
        div#scale { transform : scale(3,1); }

        div#rotate:hover { transform : rotate(80deg); }
        div#skew:hover { transform : skew(0deg, -60deg); }
        div#translate:hover { transform : translate(50px, 100px); }
        div#scale:hover { transform : scale(4,2); }
        div#scale:active { transform : scale(1,5); }
    </style>
</head>
<body>
    <h3>다양한 Transform</h3>
    아래는 회전(rotate), 기울임(skew), 이동(translate), 확대/축소(scale)가 적용된 사례이다. 또한 마우스를 올리면 추가적 변환이 일어난다.
    <hr>
    <div id="rotate">rotate 20 deg</div>
    <div id="skew">skew(0,-20deg)</div>
    <div id="translate">translateY(100px)</div>
    <div id="scale">scale(3,1)</div>
</body>
</html>
```
