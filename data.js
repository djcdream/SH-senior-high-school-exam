// 章节数据配置
const chapters = [
    {
        id: 'chapter1',
        title: '第一章 集合与函数',
        desc: '集合表示法、函数三要素、单调性与奇偶性、基本初等函数（幂、指、对）',
        link: 'chapter1.html'
    },
    {
        id: 'chapter2',
        title: '第二章 三角函数',
        desc: '任意角和弧度制、三角函数定义、诱导公式、三角恒等变换',
        link: 'chapter2.html'
    },
    {
        id: 'chapter3',
        title: '第三章 平面向量',
        desc: '向量线性运算、数量积及其坐标表示',
        link: 'chapter3.html'
    },
    {
        id: 'chapter4',
        title: '第四章 数列',
        desc: '等差数列与等比数列的通项公式及前n项和',
        link: 'chapter4.html'
    },
    {
        id: 'chapter5',
        title: '第五章 不等式',
        desc: '一元二次不等式解法、基本不等式及其应用',
        link: 'chapter5.html'
    },
    {
        id: 'chapter6',
        title: '第六章 解析几何',
        desc: '直线与圆的方程、位置关系、圆锥曲线（椭圆、双曲线、抛物线）',
        link: 'chapter6.html'
    },
    {
        id: 'chapter7',
        title: '第七章 立体几何',
        desc: '空间几何体表面积与体积、点线面位置关系',
        link: 'chapter7.html'
    },
    {
        id: 'chapter8',
        title: '第八章 概率与统计',
        desc: '随机抽样方法、古典概型与几何概型',
        link: 'chapter8.html'
    },
    {
        id: 'chapter9',
        title: '第九章 导数及其应用',
        desc: '导数定义与计算、利用导数研究函数单调性与极值',
        link: 'chapter9.html'
    },
    {
        id: 'chapter10',
        title: '第十章 复数',
        desc: '复数的概念、分类、四则运算及几何意义',
        link: 'chapter10.html'
    },
    {
        id: 'chapter11',
        title: '第十一章 参数方程与极坐标',
        desc: '常见曲线参数方程、极坐标与直角坐标互化',
        link: 'chapter11.html'
    }
];

// 进度管理工具
const ProgressManager = {
    // 获取所有进度
    getAllProgress() {
        return JSON.parse(localStorage.getItem('mathLearningProgress')) || {};
    },

    // 获取单章进度状态 (unstarted, in-progress, completed)
    getChapterStatus(chapterId) {
        const progress = this.getAllProgress();
        return progress[chapterId] || 'unstarted';
    },

    // 更新章节状态
    updateStatus(chapterId, status) {
        const progress = this.getAllProgress();
        progress[chapterId] = status;
        localStorage.setItem('mathLearningProgress', JSON.stringify(progress));
        // 触发自定义事件以便 UI 更新
        window.dispatchEvent(new Event('progressUpdated'));
    },

    // 计算总进度百分比
    calculateTotalProgress() {
        const progress = this.getAllProgress();
        const total = chapters.length;
        let completed = 0;

        // 只统计已完成的章节
        Object.values(progress).forEach(status => {
            if (status === 'completed') completed++;
        });

        return Math.round((completed / total) * 100);
    },

    // 获取进行中的章节数量
    getInProgressCount() {
        const progress = this.getAllProgress();
        let count = 0;
        Object.values(progress).forEach(status => {
            if (status === 'in-progress') count++;
        });
        return count;
    },

    // 获取已完成的章节数量
    getCompletedCount() {
        const progress = this.getAllProgress();
        let count = 0;
        Object.values(progress).forEach(status => {
            if (status === 'completed') count++;
        });
        return count;
    },

    // 重置所有进度
    resetAllProgress() {
        localStorage.removeItem('mathLearningProgress');
        window.dispatchEvent(new Event('progressUpdated'));
    }
};

// 创建 MathProgressManager 作为别名，保持向后兼容
const MathProgressManager = ProgressManager;
