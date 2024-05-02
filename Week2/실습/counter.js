let cnt = 0; // 카운터 값 저장

const countElement = document.getElementById("count"); // 카운터 값 표시 요소에 접근

function increase() {
    cnt++; // 1 증가
    countElement.innerText = cnt.toString(); // 문자열로 변환하여 표시
}

function decrease() {
    cnt--; // 1 감소
    countElement.innerText = cnt.toString();
}

function reset() {
    cnt = 0; // 0으로 리셋
    countElement.innerText = cnt.toString();
}