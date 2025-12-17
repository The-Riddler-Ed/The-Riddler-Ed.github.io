// 1. 设置页面上的当前时间
document.getElementById('current-time').textContent = new Date().toLocaleString('zh-CN');

// 2. 初始化打字机效果
const typewriter = new typewriterEffect.Typewriter(document.getElementById('typewriter-text'), {
    loop: false, // 不循环，只打一次
    delay: 70, // 打字速度（毫秒/字）
    cursor: '_' // 光标的样式
});

// 3. 开始播放打字机序列
typewriter
    .typeString('> 亲爱的解谜者：')
    .pauseFor(500)
    .typeString('<br>> 当你看到这段文字时，游戏已经进入下一阶段。')
    .pauseFor(300)
    .typeString('<br>> 黑色是画布，绿色是线索，闪烁的是边界。')
    .pauseFor(500)
    .typeString('<br>> <br>> 我留下的不是问题，而是镜子。')
    .pauseFor(400)
    .typeString('<br>> 你能从中照见的，才是真正的谜底。')
    .pauseFor(600)
    .typeString('<br>> <br>> 第一个答案，就藏在这行文字的轨迹里。')
    .start();

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
        countdownEl.style.animation = "none"; // 倒计时结束时停止闪烁
    }
}
// 页面加载后启动倒计时
setTimeout(updateCountdown, 2000); // 延迟2秒启动，让用户先看到文字