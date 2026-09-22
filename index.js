// 定义一个函数，用来生成随机数并更新网页
function updateMetrics() {
    // 1. 随机生成应力值：范围在 100.000 到 500.000 之间，保留3位小数
    let randomStress = (Math.random() * 400 + 100).toFixed(3);
    // 找到对应的网页元素，并替换它的内容
    document.getElementById('stress-value').textContent = randomStress + ' su';

    // 2. 随机生成过载率：范围在 50.0% 到 180.0% 之间，保留1位小数
    let randomOverload = (Math.random() * 130 + 50).toFixed(1);
    let overloadElement = document.getElementById('overload-value');
    overloadElement.textContent = randomOverload + '%';

    // 3. 如果过载率超过 100%，让文字变红闪烁（增加警告效果）
    if (randomOverload > 100) {
        overloadElement.style.color = '#A71930'; // 深红色（Nature 警示红）
        overloadElement.style.animation = 'blink 1s infinite'; // 添加闪烁动画
    } else {
        overloadElement.style.color = '#1B365D'; // 如果没超载，变回深蓝色
        overloadElement.style.animation = 'none'; // 取消闪烁
    }
}

// 页面加载后立刻执行一次
updateMetrics();

// 设置定时器：每隔 2000 毫秒（2秒）自动执行一次 updateMetrics 函数
setInterval(updateMetrics, 2000);