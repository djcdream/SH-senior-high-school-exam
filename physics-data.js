// 物理章节数据配置
const physicsChapters = [
    {
        id: 'physics1',
        title: '第一章 运动的描述',
        desc: '参考系、时间和位移、速度、加速度、运动图像',
        link: 'physics1.html'
    },
    {
        id: 'physics2',
        title: '第二章 匀变速直线运动的研究',
        desc: '实验：探究小车速度随时间变化的规律、匀变速直线运动的速度与位移、自由落体运动',
        link: 'physics2.html'
    },
    {
        id: 'physics3',
        title: '第三章 相互作用——力',
        desc: '重力、弹力、摩擦力、力的合成与分解、共点力的平衡',
        link: 'physics3.html'
    },
    {
        id: 'physics4',
        title: '第四章 运动和力的关系',
        desc: '牛顿第一定律、实验：探究加速度与力、质量的关系、牛顿第二定律、牛顿第三定律',
        link: 'physics4.html'
    },
    {
        id: 'physics5',
        title: '第五章 曲线运动',
        desc: '曲线运动、运动的合成与分解、抛体运动、圆周运动',
        link: 'physics5.html'
    },
    {
        id: 'physics6',
        title: '第六章 万有引力与航天',
        desc: '行星的运动、万有引力定律、万有引力理论的成就、宇宙航行',
        link: 'physics6.html'
    },
    {
        id: 'physics7',
        title: '第七章 机械能守恒定律',
        desc: '功、功率、重力势能、动能和动能定理、机械能守恒定律、实验：验证机械能守恒定律',
        link: 'physics7.html'
    },
    {
        id: 'physics8',
        title: '第八章 动量',
        desc: '动量、动量定理、动量守恒定律、实验：验证动量守恒定律',
        link: 'physics8.html'
    },
    {
        id: 'physics9',
        title: '第九章 机械振动',
        desc: '简谐运动、简谐运动的图像、单摆、实验：用单摆测定重力加速度',
        link: 'physics9.html'
    },
    {
        id: 'physics10',
        title: '第十章 机械波',
        desc: '波的形成和传播、波的图像、波的干涉和衍射、多普勒效应',
        link: 'physics10.html'
    },
    {
        id: 'physics11',
        title: '第十一章 静电场',
        desc: '电荷、库仑定律、电场强度、电势能和电势、电势差、电容器与电容',
        link: 'physics11.html'
    },
    {
        id: 'physics12',
        title: '第十二章 恒定电流',
        desc: '电源和电流、电动势、欧姆定律、串联电路和并联电路、焦耳定律、电阻定律',
        link: 'physics12.html'
    },
    {
        id: 'physics13',
        title: '第十三章 磁场',
        desc: '磁场、磁感应强度、安培力、洛伦兹力、带电粒子在匀强磁场中的运动',
        link: 'physics13.html'
    },
    {
        id: 'physics14',
        title: '第十四章 电磁感应',
        desc: '电磁感应现象、法拉第电磁感应定律、楞次定律、互感和自感',
        link: 'physics14.html'
    },
    {
        id: 'physics15',
        title: '第十五章 交变电流',
        desc: '交变电流的产生、描述交变电流的物理量、电感和电容对交变电流的影响、变压器',
        link: 'physics15.html'
    },
    {
        id: 'physics16',
        title: '第十六章 机械波和电磁波',
        desc: '电磁振荡、电磁场和电磁波、电磁波的发射和接收、电磁波谱',
        link: 'physics16.html'
    },
    {
        id: 'physics17',
        title: '第十七章 光',
        desc: '光的反射和折射、全反射、光的干涉、光的衍射、光的偏振',
        link: 'physics17.html'
    },
    {
        id: 'physics18',
        title: '第十八章 热学',
        desc: '分子动理论、温度、内能、热力学第一定律、热力学第二定律',
        link: 'physics18.html'
    },
    {
        id: 'physics19',
        title: '第十九章 原子结构',
        desc: '电子的发现、原子的核式结构模型、氢原子光谱、玻尔的原子模型',
        link: 'physics19.html'
    },
    {
        id: 'physics20',
        title: '第二十章 原子核',
        desc: '原子核的组成、放射性元素的衰变、探测射线的方法、核力与结合能、核聚变与核裂变',
        link: 'physics20.html'
    },
    {
        id: 'physics21',
        title: '第二十一章 相对论简介',
        desc: '相对论的诞生、狭义相对论的基本原理、狭义相对论的主要结论、广义相对论简介',
        link: 'physics21.html'
    },
    {
        id: 'physics22',
        title: '第二十二章 量子力学初步',
        desc: '量子论的诞生、光的粒子性、粒子的波动性、不确定性关系',
        link: 'physics22.html'
    }
];

// 物理进度管理工具
const PhysicsProgressManager = {
    STORAGE_KEY: 'physicsLearningProgress',

    // 获取所有进度
    getAllProgress() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {};
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
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
        // 触发自定义事件以便 UI 更新
        window.dispatchEvent(new Event('physicsProgressUpdated'));
    },

    // 计算总进度百分比
    calculateTotalProgress() {
        const progress = this.getAllProgress();
        const total = physicsChapters.length;
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
        localStorage.removeItem(this.STORAGE_KEY);
        window.dispatchEvent(new Event('physicsProgressUpdated'));
    }
};
