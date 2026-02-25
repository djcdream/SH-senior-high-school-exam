// Toggle solution visibility
function toggleSolution(solId) {
    const solution = document.getElementById(solId);
    if (!solution) return;
    const btn = solution.previousElementSibling;

    if (solution.classList.contains('show')) {
        solution.classList.remove('show');
        if (btn) btn.textContent = '查看解答';
    } else {
        solution.classList.add('show');
        if (btn) btn.textContent = '隐藏解答';
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // 如果是外部链接（不以 # 开头），则允许默认跳转
        if (!targetId.startsWith('#')) {
            return;
        }

        e.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to all sections and boxes
document.querySelectorAll('.section, .content-box, .operation-box, .example-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add hover effect to operation boxes
document.querySelectorAll('.operation-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 35px rgba(99, 102, 241, 0.4)';
    });

    box.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.3)';
    });
});

// Interactive complex number calculator (bonus feature)
function createCalculator() {
    const calculatorHTML = `
        <div class="calculator-box">
            <h3>复数计算器</h3>
            <div class="calc-input">
                <label>第一个复数 (a + bi):</label>
                <div class="complex-input">
                    <input type="number" id="real1" placeholder="实部 a">
                    <span>+</span>
                    <input type="number" id="imag1" placeholder="虚部 b">
                    <span>i</span>
                </div>
            </div>
            <div class="calc-operation">
                <select id="operation">
                    <option value="add">加法 (+)</option>
                    <option value="sub">减法 (-)</option>
                    <option value="mul">乘法 (×)</option>
                </select>
            </div>
            <div class="calc-input">
                <label>第二个复数 (c + di):</label>
                <div class="complex-input">
                    <input type="number" id="real2" placeholder="实部 c">
                    <span>+</span>
                    <input type="number" id="imag2" placeholder="虚部 d">
                    <span>i</span>
                </div>
            </div>
            <button onclick="calculate()" class="calc-btn">计算</button>
            <div id="calc-result" class="calc-result"></div>
        </div>
    `;

    // Add calculator styles
    const calculatorStyles = `
        .calculator-box {
            background: var(--bg-tertiary);
            padding: 30px;
            border-radius: 15px;
            margin-top: 30px;
            border: 2px solid var(--accent-secondary);
        }

        .calculator-box h3 {
            color: var(--accent-highlight);
            margin-bottom: 20px;
            text-align: center;
        }

        .calc-input {
            margin-bottom: 20px;
        }

        .calc-input label {
            display: block;
            margin-bottom: 8px;
            color: var(--text-secondary);
        }

        .complex-input {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .complex-input input {
            flex: 1;
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            background: var(--bg-primary);
            color: var(--text-primary);
            font-size: 1rem;
        }

        .complex-input span {
            color: var(--accent-primary);
            font-weight: bold;
        }

        .calc-operation select {
            width: 100%;
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            background: var(--bg-primary);
            color: var(--text-primary);
            font-size: 1rem;
            cursor: pointer;
        }

        .calc-btn {
            width: 100%;
            padding: 12px;
            background: var(--accent-primary);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .calc-btn:hover {
            background: var(--accent-secondary);
            transform: scale(1.02);
        }

        .calc-result {
            margin-top: 20px;
            padding: 15px;
            background: var(--bg-primary);
            border-radius: 8px;
            border-left: 4px solid var(--success);
            display: none;
        }

        .calc-result.show {
            display: block;
            animation: fadeIn 0.3s ease;
        }
    `;

    // Add styles to document
    const style = document.createElement('style');
    style.textContent = calculatorStyles;
    document.head.appendChild(style);

    // Add calculator to examples section
    const examplesSection = document.getElementById('examples');
    const calculatorDiv = document.createElement('div');
    calculatorDiv.innerHTML = calculatorHTML;
    examplesSection.appendChild(calculatorDiv);
}

// Calculator function
function calculate() {
    const real1 = parseFloat(document.getElementById('real1').value) || 0;
    const imag1 = parseFloat(document.getElementById('imag1').value) || 0;
    const real2 = parseFloat(document.getElementById('real2').value) || 0;
    const imag2 = parseFloat(document.getElementById('imag2').value) || 0;
    const operation = document.getElementById('operation').value;

    let resultReal, resultImag, resultText;

    switch (operation) {
        case 'add':
            resultReal = real1 + real2;
            resultImag = imag1 + imag2;
            break;
        case 'sub':
            resultReal = real1 - real2;
            resultImag = imag1 - imag2;
            break;
        case 'mul':
            resultReal = real1 * real2 - imag1 * imag2;
            resultImag = real1 * imag2 + imag1 * real2;
            break;
        default:
            return;
    }

    // Format result
    if (resultImag >= 0) {
        resultText = `${resultReal.toFixed(2)} + ${resultImag.toFixed(2)}i`;
    } else {
        resultText = `${resultReal.toFixed(2)} - ${Math.abs(resultImag).toFixed(2)}i`;
    }

    // Display result
    const resultDiv = document.getElementById('calc-result');
    resultDiv.innerHTML = `<strong>结果：</strong> ${resultText}`;
    resultDiv.classList.add('show');
}

// Add keyboard navigation (Global)
document.addEventListener('keydown', function(e) {
    // Press 'H' to toggle all solutions
    if (e.key === 'h' || e.key === 'H') {
        const solutions = document.querySelectorAll('.solution');
        if (solutions.length > 0) {
            solutions.forEach(sol => {
                sol.classList.toggle('show');
                // Sync button text
                const btn = sol.previousElementSibling;
                if (btn && btn.classList.contains('solution-btn')) {
                    if (sol.classList.contains('show')) {
                        btn.textContent = '隐藏解答';
                    } else {
                        btn.textContent = '查看解答';
                    }
                }
            });
        }
    }
});

// Initialize calculator when page loads
document.addEventListener('DOMContentLoaded', function() {
    // 检测当前页面是否为第十章复数页面
    // 检查条件：URL包含 chapter10.html 或页面标题包含"复数"
    const isChapter10 = window.location.href.includes('chapter10.html') || 
                        document.title.includes('复数');
    
    // 检查是否存在 examples 部分（确保有挂载点）
    const examplesSection = document.getElementById('examples');

    if (isChapter10 && examplesSection) {
        createCalculator();
        
        // 仅在复数页面显示特定的控制台消息
        console.log('%c🧮 复数教学网站', 'color: #6366f1; font-size: 24px; font-weight: bold;');
        console.log('%c欢迎使用高中数学复数教学网站！', 'color: #8b5cf6; font-size: 14px;');
        console.log('%c提示：按 "H" 键可以切换所有解答的显示', 'color: #a78bfa; font-size: 12px;');
    }
});
