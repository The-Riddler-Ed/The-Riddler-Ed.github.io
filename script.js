// 1. 设置页面上的当前时间
document.getElementById('current-time').textContent = new Date().toLocaleString('zh-CN');

// 2. 检查进度并更新进度条
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;
    
    // 从本地存储检查解开的谜题数量
    let solvedCount = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('riddle-') && key.endsWith('-solved')) {
            if (localStorage.getItem(key) === 'true') {
                solvedCount++;
            }
        }
    }
    
    // 计算百分比（假设总共有10个谜题）
    const totalRiddles = 10;
    const percentage = Math.floor((solvedCount / totalRiddles) * 100);
    
    // 创建进度条
    const filledBlocks = Math.floor(percentage / 10);
    const emptyBlocks = 10 - filledBlocks;
    const bar = '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);
    
    progressBar.textContent = `${bar} ${percentage}%`;
}

// 3. 使用纯JavaScript实现打字机效果
const typewriterTextEl = document.getElementById('typewriter-text');
if (typewriterTextEl) {
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

    // 启动打字机效果
    setTimeout(typeWriter, 500);
}

// 4. 倒计时效果
let countdownEl = document.getElementById('countdown');
if (countdownEl) {
    let totalSeconds = 24 * 60 * 60; // 24小时

    function updateCountdown() {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;
        
        countdownEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (totalSeconds > 0) {
            totalSeconds--;
            setTimeout(updateCountdown, 1000);
        } else {
            countdownEl.textContent = "00:00:00";
            countdownEl.style.animation = "none";
        }
    }
    
    setTimeout(updateCountdown, 2000);
}

// 5. 隐藏链接功能
document.addEventListener('DOMContentLoaded', function() {
    const hiddenLink = document.getElementById('hidden-link');
    
    if (hiddenLink) {
        // 点击事件
        hiddenLink.addEventListener('click', function() {
            window.location.href = 'puzzles/puzzle_001.html';
        });
        
        // 悬停效果
        hiddenLink.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px #39FF14';
            this.style.color = '#8F8';
        });
        
        hiddenLink.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
            this.style.color = '#39FF14';
        });
        
        console.log('隐藏链接已激活');
    }
    
    // 更新进度条
    updateProgressBar();
});