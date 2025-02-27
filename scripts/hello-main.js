// 省份和城市数据
const cityData = {
    "广东省": ["广州市", "深圳市", "珠海市", "佛山市"],
    "浙江省": ["杭州市", "宁波市", "温州市", "绍兴市"],
    "江苏省": ["南京市", "苏州市", "无锡市", "常州市"],
    "山东省": ["济南市", "青岛市", "烟台市", "潍坊市"],
};

// 加载城市下拉框
function loadCities() {
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("city");

    // 清空城市下拉框
    citySelect.innerHTML = '<option value="">请选择城市</option>';
    citySelect.disabled = true;

    // 获取选择的省份
    const selectedProvince = provinceSelect.value;
    if (selectedProvince) {
        // 填充城市下拉框
        const cities = cityData[selectedProvince];
        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
        citySelect.disabled = false;
    }
}

// 显示更多城市
function showMoreCities() {
    const modal = document.getElementById("cityModal");
    modal.style.display = "flex";
}

function showMoreZjCities() {
}

function showMoreJsCities() {
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById("cityModal");
    modal.style.display = "none";
}

// 跳转到城市页面
function redirectToCity(cityName) {
    window.location.href = `https://example.com/city/${cityName}`;
}
