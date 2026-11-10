# 9장 자바스크립트 이벤트 처리 예제 소스 코드 모음

이 문서는 9장에 등장하는 이벤트 처리 관련 예제 소스 코드(`ex9-01.html` ~ `ex9-21.html`)를 번호별로 정리한 문서입니다. 각 예제 코드를 복사하여 개별 HTML 파일로 저장하거나 깃허브(GitHub) 리포지토리에 올리실 수 있습니다.

---

### **예제 9-1: HTML 태그 내에 이벤트 리스너 작성 (`ex9-01.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>HTML 태그에 리스너 작성</title>
</head>
<body>
    <h3>HTML 태그에 리스너 작성</h3>
    <hr>
    <p onmouseover="this.style.backgroundColor='orchid'"
       onmouseout="this.style.backgroundColor='white'">
        마우스 올리면 orchid 색으로 변경
    </p>
</body>
</html>
```

---

### **예제 9-2: DOM 객체의 이벤트 리스너 프로퍼티에 리스너 등록 (`ex9-02.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>DOM 객체의 이벤트 리스너 프로퍼티에 함수 등록</title>
    <script>
        let p;
        function init() { // 문서가 완전히 로드되었을 때 호출
            p = document.getElementById("p");
            p.onmouseover = over; // over()를 onmouseover 리스너로 등록
            p.onmouseout = out;   // out()를 onmouseout 리스너로 등록
        }
        function over() {
            p.style.backgroundColor = "orchid";
        }
        function out() {
            p.style.backgroundColor = "white";
        }
    </script>
</head>
<body onload="init()">
    <h3>DOM 객체의 이벤트 리스너 프로퍼티에 함수 등록</h3>
    <hr>
    <p id="p">마우스 올리면 orchid 색으로 변경</p>
</body>
</html>
```

---

### **예제 9-3: `addEventListener()` 사용 (`ex9-03.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>addEventListener()를 이용한 리스너 등록</title>
    <script>
        let p;
        function init() { // 문서가 완전히 로드되었을 때 호출
            p = document.getElementById("p");
            p.addEventListener("mouseover", over); // 이벤트 리스너 등록
            p.addEventListener("mouseout", out);   // 이벤트 리스너 등록
        }
        function over() {
            p.style.backgroundColor = "orchid";
        }
        function out() {
            p.style.backgroundColor = "white";
        }
    </script>
</head>
<body onload="init()">
    <h3>addEventListener()를 이용한 리스너 등록</h3>
    <hr>
    <p id="p">마우스 올리면 orchid 색으로 변경</p>
</body>
</html>
```

---

### **예제 9-4: 익명 함수로 이벤트 리스너 작성 (`ex9-04.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>익명 함수로 이벤트 리스너 작성</title>
    <script>
        let p;
        function init() { // 문서가 완전히 로드되었을 때 호출
            p = document.getElementById("p");
            p.onmouseover = function () { // 익명 함수
                this.style.backgroundColor = "orchid";
            };
            p.addEventListener("mouseout", function () { // 익명 함수
                this.style.backgroundColor = "white";
            });
        }
    </script>
</head>
<body onload="init()">
    <h3>익명 함수로 이벤트 리스너 작성</h3>
    <hr>
    <p id="p">마우스 올리면 orchid 색으로 변경</p>
</body>
</html>
```

---

### **예제 9-5: 이벤트 리스너에서 이벤트 객체 전달받기 (`ex9-05.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>이벤트 객체 전달받기</title>
</head>
<body>
    <p id="p">이곳에 마우스를 올려 보세요</p>
    <button onclick="f(event)">클릭하세요</button>
    <script>
        function f(e) { // e는 현재 발생한 이벤트 객체
            alert(e.type);
        }
    </script>
</body>
</html>
```

---

### **예제 9-6: 이벤트 객체의 프로퍼티 출력 (`ex9-06.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>이벤트 객체 프로퍼티</title>
</head>
<body>
    <h3>이벤트 객체의 프로퍼티 출력</h3>
    <hr>
    <p id="p">이곳에 마우스를 올려 보세요</p>
    <button onclick="f(event)">클릭하세요</button>
    <script>
        function f(e) { // e는 현재 발생한 이벤트 객체
            let text = "type: " + e.type + "<br>" +
                       "target: " + e.target + "<br>" +
                       "currentTarget: " + e.currentTarget + "<br>" +
                       "defaultPrevented: " + e.defaultPrevented;
            let p = document.getElementById("p");
            p.innerHTML = text; // 이벤트 객체의 프로퍼티 출력
        }
    </script>
</body>
</html>
```

---

### **예제 9-7: 이벤트의 디폴트 행동 취소 (`ex9-07.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>이벤트의 디폴트 행동 취소</title>
    <script>
        function query() {
            let ret = confirm("네이버로 이동하시겠습니까?");
            return ret; // confirm()의 리턴 값은 true 또는 false
        }
        function noAction(e) {
            e.preventDefault(); // 이벤트의 디폴트 행동 강제 취소
        }
    </script>
</head>
<body>
    <h3>이벤트의 디폴트 행동 취소</h3>
    <hr>
    <a href="http://www.naver.com" onclick="return query()">네이버로 이동할 지 물어보는 링크</a>
    <hr>
    <form>
        <input type="checkbox">빵(체크 됨)<br>
        <input type="checkbox" onclick="noAction(event)">술(체크 안됨)
    </form>
</body>
</html>
```

---

### **예제 9-8: 이벤트 흐름 (`ex9-08.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>이벤트 흐름</title>
</head>
<body>
    <p style="color:blue">이것은 <span style="color:red" id="span">문장입니다.</span></p>
    <form>
        <input type="text" name="s">
        <input type="button" value="테스트" id="button">
        <hr>
    </form>
    <div id="div" style="color:green"></div>
    <script>
        let div = document.getElementById("div"); // 이벤트 메시지 출력 공간
        let button = document.getElementById("button");

        // body 객체에 캡쳐 리스너 등록 (캡쳐 단계)
        document.body.addEventListener("click", capture, true);

        // 타겟 객체에 버블 리스너 등록 (버블 단계)
        button.addEventListener("click", bubble, false);

        // body 객체에 버블 리스너 등록 (버블 단계)
        document.body.addEventListener("click", bubble, false);

        function capture(e) { // e는 이벤트 객체
            let obj = e.currentTarget; // 현재 이벤트를 받은 DOM 객체
            let tagName = obj.tagName; // 태그 이름
            div.innerHTML += "<br>capture 단계 : " + tagName + " 태그 " + e.type + "이벤트";
        }

        function bubble(e) { // e는 이벤트 객체
            let obj = e.currentTarget; // 현재 이벤트를 받은 DOM 객체
            let tagName = obj.tagName; // 태그 이름
            div.innerHTML += "<br>bubble 단계 : " + tagName + " 태그 " + e.type + "이벤트";
        }
    </script>
</body>
</html>
```

---

### **예제 9-9: `onclick` 리스너로 계산기 만들기 (`ex9-09.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>onclick</title>
    <script>
        function calculate() {
            let exp = document.getElementById("exp");
            let result = document.getElementById("result");
            result.value = eval(exp.value);
        }
    </script>
</head>
<body>
    <h3>onclick, 계산기 만들기</h3>
    <hr>
    계산하고자 하는 수식을 입력하고 계산 버튼을 눌러봐요.<br><br>
    <form>
        식 <input type="text" id="exp" value=""><br>
        값 <input type="text" id="result">
        <input type="button" value=" 계산 " onclick="calculate()">
    </form>
</body>
</html>
```

---

### **예제 9-10: 마우스 관련 이벤트 리스너 (`ex9-10.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>마우스 관련 리스너</title>
    <script>
        let width = 1; // 테두리 두께
        function down(obj) {
            obj.style.fontStyle = "italic";
        }
        function up(obj) {
            obj.style.fontStyle = "normal";
        }
        function over(obj) {
            obj.style.borderColor = "violet"; // 테두리 폭이 0일 때 색은 보이지 않는다.
        }
        function out(obj) {
            obj.style.borderColor = "lightgray";
        }
        function wheel(e, obj) { // e는 이벤트 객체
            if(e.wheelDelta < 0) { // 휠을 아래로 굴릴 때
                width--; // 폭 1 감소
                if(width < 0) width = 0; // 폭이 0보다 작아지지 않게
            } else { // 휠을 위로 굴릴 때
                width++; // 폭 1 증가
            }
            obj.style.borderStyle = "surround";
            obj.style.borderWidth = width + "px";
        }
    </script>
</head>
<body>
    <h3>마우스 관련 이벤트 리스너</h3>
    <hr>
    <div>마우스 관련 <span style="border:1px solid lightgray"
                       onmousedown="down(this)" onmouseup="up(this)"
                       onmouseover="over(this)" onmouseout="out(this)"
                       onwheel="wheel(event, this)">이벤트</span>가 발생합니다.</div>
</body>
</html>
```

---

### **예제 9-11: `onmousemove`와 마우스 위치 및 버튼 (`ex9-11.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>마우스 이벤트 객체의 프로퍼티</title>
    <style>
        div {
            background : skyblue;
            width : 250px;
        }
    </style>
</head>
<body>
    <h3>마우스 이벤트 객체의 프로퍼티와 onmousemove</h3>
    <hr>
    이미지 위에 마우스를 움직일 때 onmousemove 리스너가 실행되고, 마우스의 위치를 보여줍니다.<br><br>
    <img src="media/beach.png" onmousemove="where(event)"><br><br>
    <div id="div"></div>
    <script>
        let div = document.getElementById("div");
        function where(e) {
            let text = "버튼=" + e.button + "<br>";
            text += "(screenX, screenY)=" + e.screenX + "," + e.screenY + "<br>";
            text += "(clientX, clientY)=" + e.clientX + "," + e.clientY + "<br>";
            text += "(offsetX, offsetY)=" + e.offsetX + "," + e.offsetY + "<br>";
            text += "(x, y)=" + e.x + "," + e.y + "
";
            div.innerHTML = text;
        }
    </script>
</body>
</html>
```

---

### **예제 9-12: `oncontextmenu`로 컨텍스트 메뉴 금지 (`ex9-12.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>oncontextmenu</title>
    <script>
        function hideMenu() {
            alert("오른쪽 클릭<컨텍스트 메뉴>금지");
            return false;
        }
        document.oncontextmenu = hideMenu;
    </script>
</head>
<body>
    <h3>oncontextmenu에서 컨텍스트 메뉴 금지</h3>
    <hr>
    마우스 오른쪽 클릭은 금지됩니다. 아무곳이나 클릭해도 컨텍스트 메뉴를 볼 수 없습니다.
    <img src="media/beach2.png" alt="miami">
</body>
</html>
```

---

### **예제 9-13: `onload`에서 사이트 이전을 알리는 공고창 출력 (`ex9-13.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>HTML 문서의 onload</title>
</head>
<body onload="alert('이 사이트는 2022년 9월1일부터 
 www.js.co.kr로 옮겨지게 됩니다.')">
    <h3>HTML 문서의 로딩 완료, onload</h3>
    <hr>
    이 페이지는 onload 리스너의 사용 예를 보여줍니다. 이 페이지가 출력되고 난 바로 직후 onload 리스너를 통해 경고창을 출력합니다.
</body>
</html>
```

---

### **예제 9-14: 이미지 로딩 완료 후 이미지 크기 출력 (`ex9-14.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>이미지 로딩 완료</title>
    <script>
        function printImageSize(img) {
            let div = document.getElementById("div");
            div.innerHTML = "이미지 크기 : " + img.width + "x" + img.height;
        }
    </script>
</head>
<body>
    <h3>이미지 로딩 완료, onload</h3>
    <hr>
    <p>img 태그의 onload 리스너는 이미지 로딩이 완료된 직후 호출됩니다.</p>
    <img src="media/beach.png" onload="printImageSize(this)">
    <div id="div"></div>
</body>
</html>
```

---

### **예제 9-15: `new Image()`로 이미지 로딩 (`ex9-15.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>new Image()로 이미지 로딩</title>
    <script>
        // 미리 로딩해둘 이미지 이름 배열
        let files = [
            "media/Penguins.jpg",
            "media/Lighthouse.jpg",
            "media/Chrysanthemum.jpg",
            "media/Desert.jpg",
            "media/Hydrangeas.jpg",
            "media/Jellyfish.jpg",
            "media/Koala.jpg",
            "media/Tulips.jpg"
        ];
        let imgs = new Array();
        for(let i=0; i<files.length; i++) {
            imgs[i] = new Image(); // 이미지 객체 생성
            imgs[i].src = files[i]; // 이미지 로딩
        }

        // 다음 이미지 출력
        let next = 1;
        function change(img) {
            img.src = imgs[next].src; // 다음 이미지 출력
            next++;
            next %= imgs.length; // 다음 이미지 인덱스 계산
        }
    </script>
</head>
<body>
    <h3>new Image()로 이미지 로딩</h3>
    <hr>
    이미지를 클릭하면 다음 이미지를 보여줍니다.<br><br>
    <img src="media/Penguins.jpg" width="200" height="200" onclick="change(this)">
</body>
</html>
```

---

### **예제 9-16: `onfocus`와 `onblur`, 입력 없이 다른 창으로 갈 수 없음 (`ex9-16.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>onfocus와 onblur</title>
    <script>
        function checkFilled(obj) {
            if(obj.value == "") { // obj에 입력된 것이 없다면
                obj.focus(); // obj에 다시 포커스
            }
        }
    </script>
</head>
<body onload="document.getElementById('name').focus();">
    <h3>onfocus와 onblur</h3>
    <hr>
    <p>이름을 입력하지 않고 다른 창으로 이동할 수 없습니다.</p>
    <form>
        이름 <input type="text" id="name" onblur="checkFilled(this)"><p>
        학번 <input type="text">
    </form>
</body>
</html>
```

---

### **예제 9-17: 라디오버튼으로 이미지 변경 (`ex9-17.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>라디오 버튼과 onchange</title>
    <script>
        function findChecked() {
            let found = null;
            let kpop = document.getElementsByName("kpop");
            for(let i=0; i<kpop.length; i++) {
                if(kpop[i].checked == true)
                    found = kpop[i];
            }
            if(found != null)
                alert(found.value + "이 선택되었습니다.");
            else
                alert("선택된 것이 없습니다.");
        }
    </script>
</head>
<body>
    <h3>라디오 버튼을 클릭하면 alert() 창으로 알림</h3>
    <hr>
    <form>
        <input type="radio" name="kpop" value="BTS" checked onchange="findChecked()">BTS
        <input type="radio" name="kpop" value="BlackPink" onchange="findChecked()">BlackPink
        <input type="radio" name="kpop" value="AESPA" onchange="findChecked()">AESPA
    </form>
</body>
</html>
```

---

### **예제 9-18: 체크박스로 선택한 물품 계산 (`ex9-18.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>선택된 물품 계산하기</title>
    <script>
        let sum = 0;
        function calc(cBox) {
            if(cBox.checked)
                sum += parseInt(cBox.value);
            else
                sum -= parseInt(cBox.value);
            document.getElementById("sumtext").value = sum;
        }
    </script>
</head>
<body>
    <h3>물품을 선택하면 금액이 자동 계산됩니다</h3>
    <hr>
    <form>
        <input type="checkbox" name="hap" value="10000" onclick="calc(this)">모자 1만원
        <input type="checkbox" name="shose" value="30000" onclick="calc(this)">구두 3만원
        <input type="checkbox" name="bag" value="80000" onclick="calc(this)">명품가방 8만원<br>
        지불하실 금액 <input type="text" id="sumtext" value="0">
    </form>
</body>
</html>
```

---

### **예제 9-19: `select` 객체에서 선택한 과일 출력 (`ex9-19.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>select 객체에서 선택한 과일출력</title>
    <script>
        function drawImage() {
            let sel = document.getElementById("fruits");
            let img = document.getElementById("fruitimage");
            img.src = sel.options[sel.selectedIndex].value;
        }
    </script>
</head>
<body onload="drawImage()">
    <h3>select 객체에서 선택한 과일 출력</h3>
    <hr>
    과일을 선택하면 이미지가 출력됩니다.<p>
    <form>
        <select id="fruits" onchange="drawImage()">
            <option value="media/strawberry.png">딸기</option>
            <option value="media/banana.png" selected>바나나</option>
            <option value="media/apple.png">사과</option>
        </select>
        <img id="fruitimage" src="media/banana.png" alt="과일 이미지">
    </form>
</body>
</html>
```

---

### **예제 9-20: 키 이벤트 리스너와 이벤트 객체의 프로퍼티 (`ex9-20.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>키 이벤트</title>
    <script>
        function whatKeyDown(e) {
            let str = "";
            let div = document.getElementById("div");
            div.innerHTML = ""; // div 객체 내용 초기화
            str += "e.key = " + e.key + "<br>";
            str += "e.code = " + e.code + "<br>";
            div.innerHTML = str; // div 객체에 html 문자열 출력
        }
    </script>
</head>
<body>
    <h3>키 리스너와 키 이벤트 객체의 프로퍼티</h3>
    <hr>
    텍스트 창에 키를 눌러 보세요. Alt, Shift, Ctrl 키도 가능합니다.<br>
    <input type="text" id="text" onkeydown="whatKeyDown(event)">
    <div id="div" style="background-color:skyblue; width:250px; height:50px"></div>
</body>
</html>
```

---

### **예제 9-21: 키 이벤트 응용 – 상하좌우키로 셀 이동 (`ex9-21.html`)**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>키 이벤트 응용</title>
    <style>
        td { width:50px; height:50px; border:1px solid orchid; }
    </style>
    <script>
        let tds;
        let prevIndex = 0, index = 0;

        window.onload = function () { // 웹 페이지의 로딩 완료 시 실행
            tds = document.getElementsByTagName("td");
            tds[index].style.backgroundColor = "orchid";
        }

        window.onkeydown = function (e) {
            switch(e.key) {
                case "ArrowDown":
                    if(Math.floor(index/3) >= 2) return; // 맨 아래 셀인 경우
                    index += 3;
                    break;
                case "ArrowUp":
                    if(Math.floor(index/3) < 1) return; // 맨 위 셀인 경우
                    index -= 3;
                    break;
                case "ArrowLeft":
                    if(index%3 == 0) return; // 맨 왼쪽 셀인 경우
                    index--;
                    break;
                case "ArrowRight":
                    if(index%3 == 2) return; // 맨 오른쪽 셀인 경우
                    index++;
                    break;
                default:
                    return;
            }
            tds[index].style.backgroundColor = "orchid";
            tds[prevIndex].style.backgroundColor = "white";
            prevIndex = index;
        }
    </script>
</head>
<body>
    <h3>상하좌우 키로 셀 이동하기</h3>
    <hr>
    <table>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
    </table>
</body>
</html>
```
