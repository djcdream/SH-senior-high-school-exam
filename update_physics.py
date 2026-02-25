#!/usr/bin/env python3
# Script to update physics chapter HTML files with correct titles

# Chapter mapping
chapters = {
    4: ("第四章 运动和力的关系", ["#newton1", "#newton2", "#newton3", "#examples"], ["牛顿第一定律", "实验探究", "牛顿第二定律", "例题练习"]),
    5: ("第五章 曲线运动", ["#projectile", "#circular", "#examples"], ["抛体运动", "圆周运动", "例题练习"]),
    6: ("第六章 万有引力与航天", ["#gravity", "#satellite", "#examples"], ["万有引力定律", "宇宙航行", "例题练习"]),
    7: ("第七章 机械能守恒定律", ["#work", "#power", "#energy", "#examples"], ["功", "功率", "机械能守恒", "例题练习"]),
    8: ("第八章 动量", ["#momentum", "#conservation", "#examples"], ["动量定理", "动量守恒", "例题练习"]),
    9: ("第九章 机械振动", ["#shm", "#pendulum", "#examples"], ["简谐运动", "单摆", "例题练习"]),
    10: ("第十章 机械波", ["#wave", "#interference", "#examples"], ["波的描述", "波的干涉", "例题练习"]),
    11: ("第十一章 静电场", ["#field", "#potential", "#examples"], ["电场强度", "电势", "例题练习"]),
    12: ("第十二章 恒定电流", ["#ohm", "#circuit", "#examples"], ["欧姆定律", "电路分析", "例题练习"]),
    13: ("第十三章 磁场", ["#field", "#lorentz", "#examples"], ["磁场", "洛伦兹力", "例题练习"]),
    14: ("第十四章 电磁感应", ["#faraday", "#lenz", "#examples"], ["法拉第定律", "楞次定律", "例题练习"]),
    15: ("第十五章 交变电流", ["#ac", "#transformer", "#examples"], ["交变电流", "变压器", "例题练习"]),
    16: ("第十六章 机械波和电磁波", ["#emwave", "#spectrum", "#examples"], ["电磁波", "电磁波谱", "例题练习"]),
    17: ("第十七章 光", ["#reflection", "#interference", "#examples"], ["光的反射折射", "光的干涉", "例题练习"]),
    18: ("第十八章 热学", ["#molecular", "#thermodynamics", "#examples"], ["分子动理论", "热力学定律", "例题练习"]),
    19: ("第十九章 原子结构", ["#atom", "#bohr", "#examples"], ["原子结构", "玻尔模型", "例题练习"]),
    20: ("第二十章 原子核", ["#nucleus", "#decay", "#examples"], ["原子核", "衰变", "例题练习"]),
    21: ("第二十一章 相对论简介", ["#special", "#general", "#examples"], ["狭义相对论", "广义相对论", "例题练习"]),
    22: ("第二十二章 量子力学初步", ["#quantum", "#uncertainty", "#examples"], ["量子论", "不确定性关系", "例题练习"])
}

print("Chapter mapping created successfully")
