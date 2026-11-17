# 10장 예제 소스 코드 모음 (윈도우와 브라우저 관련 객체)

본 문서는 웹프로그래밍 10장(윈도우와 브라우저 관련 객체)에 나오는 예제 10-1부터 예제 10-12까지의 소스 코드를 깃허브(GitHub) 업로드용으로 정리한 문서입니다.

---

### **예제 10-1: window.open()으로 윈도우 열기 (`ex10-01.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>윈도우 열기</title>
    <script>
        function load(URL) {
            window.open(URL, "myWin", "left=300,top=300,width=400,height=300");
        }
    </script>
</head>
<body>
    <h3>window.open()으로 윈도우 열기</h3>
    <hr>
    <a href="javascript:load('http://graceland.com')">엘비스 프레슬리 홈 페이지</a><br>
    <a href="javascript:load('http://universalorlando.com')">유니버설 올랜드 홈 페이지</a><br>
    <a href="javascript:load('http://disneyworld.com')">디즈니월드 홈 페이지</a><br>
</body>
</html>
```

---

### **예제 10-2: window의 close()로 윈도우 닫기 (`ex10-02.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>윈도우 닫기</title>
    <script>
        let newWin = null;
        function load(URL) {
            newWin = window.open(URL, "myWin", "left=300,top=300,width=400,height=300");
        }
        function closeNewWindow() {
            if(newWin == null || newWin.closed)
                return;
            else
                newWin.close();
        }
    </script>
</head>
<body>
    <h3>window의 close()로 윈도우 닫기</h3>
    <hr>
    <a href="javascript:load('http://disneyworld.com')">새 윈도우 열기(디즈니월드)</a><br>
    <a href="javascript:window.close()">현재 윈도우 닫기</a><br>
    <a href="javascript:closeNewWindow()">새 윈도우 닫기</a>
</body>
</html>
```

---

### **예제 10-3: setTimeout()로 웹 페이지 자동 연결 (`ex10-03.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>setTimeout() 활용</title>
    <script>
        let timerID = null;
        function startTimer(time) {
            timerID = setTimeout("load('http://naver.com')", time);
            document.getElementById("img").title = "타이머 작동 시작...";
        }
        function cancelTimer() {
            if(timerID != null)
                clearTimeout(timerID);
        }
        function load(url) {
            window.location = url;
        }
    </script>
</head>
<body>
    <h3>5초 후 네이버로 자동 이동</h3>
    <hr>
    <img id="img" src="media/apple.png" alt="이미지" onmouseover="startTimer(5000)" onmouseout="cancelTimer()">
    <p>이미지 위에 마우스를 올리면 5초 후 네이버 사이트로 이동합니다. 마우스를 떼면 취소됩니다.</p>
</body>
</html>
```

---

### **예제 10-4: setInterval()로 텍스트 회전 (`ex10-04.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>setInterval()로 텍스트 회전</title>
    <script>
        let timerID = null;
        function startRotate() {
            let span = document.getElementById("span");
            timerID = setInterval("doRotate()", 200);
            span.onclick = function(e) {
                clearInterval(timerID);
            };
        }
        function doRotate() {
            let span = document.getElementById("span");
            let str = span.innerHTML;
            let firstChar = str.substr(0, 1);
            let remains = str.substr(1, str.length - 1);
            str = remains + firstChar;
            span.innerHTML = str;
        }
    </script>
</head>
<body onload="startRotate()">
    <h3>텍스트가 회전합니다. 클릭하면 중지합니다.</h3>
    <hr>
    <div><span id="span" style="background-color:yellow">자동으로 회전하는 텍스트입니다. </span></div>
</body>
</html>
```

---

### **예제 10-5: 윈도우의 위치와 크기 조절 (`ex10-05.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>윈도우의 위치와 크기 조절</title>
</head>
<body>
    <h3>윈도우의 위치와 크기 조절</h3>
    <hr>
    <button onclick="window.moveBy(-10, 0)">left</button>
    <button onclick="window.moveBy(10, 0)">right</button>
    <button onclick="self.moveBy(0, -10)">up</button>
    <button onclick="moveBy(0, 10)">down</button>
    <button onclick="resizeBy(10, 10)">+</button>
    <button onclick="resizeBy(-10, -10)">-</button>
</body>
</html>
```

---

### **예제 10-6: 웹 페이지의 자동 스크롤 (`ex10-06.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>웹 페이지의 자동 스크롤</title>
    <script>
        function startScroll(interval) {
            setInterval("autoScroll()", interval);
        }
        function autoScroll() {
            window.scrollBy(0, 10);
        }
    </script>
</head>
<body onload="startScroll(1000)">
    <h3>자동 스크롤 페이지</h3>
    <hr>
    <h3>꿈길(이동순)</h3>
    꿈길에<br>발자취가 있다면<br>님의 집 창밖<br>그 돌계단 길이 이미 오래 전에<br>모래가 되고 말았을 거예요<br><br>
    하지만<br>그 꿈길에서 자취 없다 하니<br>나는 그것이 정말 서러워요<br><br>
    이 밤도<br>나는 님의 집 창밖<br>그 돌계단 위에 홀로 서서<br>혹시라도 님의 목소리가 들려올까<br>고개 숙이고 엿들어요<br>
</body>
</html>
```

---

### **예제 10-7: 웹 페이지 프린트 (`ex10-07.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>웹 페이지 프린트</title>
</head>
<body>
    <h3>웹 페이지 프린트</h3>
    <hr>
    <p>window 객체의 print() 메소드를 호출하면 window 객체에 담겨 있는 웹 페이지가 프린트 됩니다.</p>
    <p><a href="javascript:window.print()">이곳을 누르면 프린트 됩니다.</a></p>
    <p><input type="button" value="프린트" onclick="window.print()"></p>
</body>
</html>
```

---

### **예제 10-8: onbeforeprint와 onafterprint 이벤트 활용 (`ex10-08.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>onbeforeprint, onafterprint</title>
    <script>
        window.onbeforeprint = showLogo;
        function showLogo() {
            let logoDiv = document.getElementById("logoDiv");
            logoDiv.style.display = "block";
        }
        window.onafterprint = hideLogo;
        function hideLogo() {
            let logoDiv = document.getElementById("logoDiv");
            logoDiv.style.display = "none";
        }
    </script>
</head>
<body>
    <h3>onbeforeprint, onafterprint 이벤트 예</h3>
    <hr>
    <div id="logoDiv" style="display:none">
        <img src="media/logo.png" alt="회사 로고">
    </div>
    <p>안녕하세요. 브라우저 윈도우에서는 보이지 않지만, 프린트시에는 회사 로고가 출력되는 예제를 보입니다.</p>
</body>
</html>
```

---

### **예제 10-9: location 객체로 웹 사이트 접속 (`ex10-09.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>window.location으로 웹 사이트 접속</title>
    <script>
        function load() {
            let select = document.getElementById("site");
            window.location = select.options[select.selectedIndex].value;
        }
    </script>
</head>
<body>
    <h3>window.location으로 웹 사이트 접속</h3>
    <hr>
    사이트 선택 :
    <select id="site">
        <option value="http://naver.com" selected>네이버</option>
        <option value="http://google.com">구글</option>
        <option value="http://microsoft.com">마이크로소프트</option>
    </select>
    <p><button onclick="load()">웹 사이트 접속</button></p>
</body>
</html>
```

---

### **예제 10-10: navigator로 브라우저 정보 출력 (`ex10-10.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>브라우저 정보 출력</title>
    <style>
        span { color : red; }
        div {
            border-color : yellowgreen;
            border-style : solid;
            padding : 5px;
        }
    </style>
    <script>
        function printNavigator() {
            let text = "<span>appCodeName</span>: " + navigator.appCodeName + "<br>";
            text += "<span>appName</span>: " + navigator.appName + "<br>";
            text += "<span>appVersion</span>: " + navigator.appVersion + "<br>";
            text += "<span>platform</span>: " + navigator.platform + "<br>";
            text += "<span>product</span>: " + navigator.product + "<br>";
            text += "<span>userAgent</span>: " + navigator.userAgent + "<br>";
            text += "<span>vendor</span>: " + navigator.vendor + "<br>";
            text += "<span>language</span>: " + navigator.language + "<br>";
            text += "<span>onLine</span>: " + navigator.onLine + "<br>";
            text += "<span>cookieEnabled</span>: " + navigator.cookieEnabled + "<br>";
            text += "<span>javaEnabled()</span>: " + navigator.javaEnabled() + "<br>";
            text += "<span>plugins.length</span>: " + navigator.plugins.length + "<br>";
            for(let j=0; j<navigator.plugins.length; j++) {
                text += "<span>plugin " + j + "</span>: " + navigator.plugins[j].name + "<br>";
            }
            document.getElementById("div").innerHTML = text;
        }
    </script>
</head>
<body onload="printNavigator()">
    <h3>navigator 객체 활용</h3>
    <hr>
    <div id="div"></div>
</body>
</html>
```

---

### **예제 10-11: 스크린 장치에 관한 정보 출력 (`ex10-11.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>스크린 장치 정보 출력</title>
    <style>
        span { color : red; }
        div {
            border-color : yellowgreen;
            border-style : solid;
            padding : 5px;
        }
    </style>
    <script>
        function printScreen() {
            let text = "<span>screen.width</span>: " + screen.width + "<br>";
            text += "<span>screen.height</span>: " + screen.height + "<br>";
            text += "<span>screen.availWidth</span>: " + screen.availWidth + "<br>";
            text += "<span>screen.availHeight</span>: " + screen.availHeight + "<br>";
            text += "<span>screen.colorDepth</span>: " + screen.colorDepth + "<br>";
            text += "<span>screen.pixelDepth</span>: " + screen.pixelDepth + "<br>";
            document.getElementById("div").innerHTML = text;
        }
    </script>
</head>
<body onload="printScreen()">
    <h3>스크린 장치에 관한 정보</h3>
    <hr>
    <div id="div"></div>
</body>
</html>
```

---

### **예제 10-12: history 객체 활용 (`ex10-12.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>history 객체 활용</title>
</head>
<body>
    <h3>history 객체 활용</h3>
    <hr>
    <button onclick="history.back()">back()</button>
    <button onclick="history.forward()">forward()</button>
    <button onclick="history.go(-1)">go(-1)</button>
</body>
</html>
```
