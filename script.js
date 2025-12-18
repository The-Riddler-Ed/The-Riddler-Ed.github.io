// 1. 设置页面上的当前时间
document.getElementById('current-time').textContent = new Date().toLocaleString('zh-CN');

// 2. 使用纯JavaScript实现打字机效果
const typewriterTextEl = document.getElementById('typewriter-text');
const textToType = [
    '> 亲爱的解谜者：',
    '<br>> 当你看到这段文字时，游戏已经进入下一阶段。',
    '<br>> 黑色是画布，绿色是线索，闪烁的是边界。',
    '<br>> <br>> 我留下的不是问题，而是镜子。',
    '<br>> 你能从中照见的，才是真正的谜底。',
    '<br>> <br>> 第一个答案，就藏在这行文字的轨迹里。'
];
let lineIndex = 0;
let charIndex = 0;
const typingDelay = 70;
const lineDelay = 500;

function typeWriter() {
    if (lineIndex >= textToType.length) {
        // 所有行打完，显示最终文本（去掉光标）
        typewriterTextEl.innerHTML = textToType.join('');
        return;
    }

    const currentLine = textToType[lineIndex];

    if (charIndex <= currentLine.length) {
        // 打字阶段：显示已打完的字+光标
        typewriterTextEl.innerHTML = textToType.slice(0, lineIndex).join('') + currentLine.substring(0, charIndex) + '_';
        charIndex++;
        setTimeout(typeWriter, typingDelay);
    } else {
        // 一行打完，暂停后准备打下一行
        charIndex = 0;
        lineIndex++;
        setTimeout(typeWriter, lineDelay);
    }
}

// 3. 启动打字机效果
setTimeout(typeWriter, 500); // 页面加载后延迟半秒开始

// 4. 简单的倒计时效果（示例：从10分钟开始）
let countdownEl = document.getElementById('countdown');
let totalSeconds = 10 * 60; // 10分钟

function updateCountdown() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    countdownEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (totalSeconds > 0) {
        totalSeconds--;
        setTimeout(updateCountdown, 1000);
    } else {
        countdownEl.textContent = "00:00:00";
        countdownEl.style.animation = "none";
    }
}
// 页面加载后启动倒计时
setTimeout(updateCountdown, 2000);
document.getElementById('hidden-link').addEventListener('click', function() {
    window.location.href = 'puzzles/puzzle_001.html';
});