function store() {
    this.products = [
        new product(0, "Apple iPhone 7", ["Экран (4.7, IPS, 1334x750)", "Apple A10 Fusion", "основная камера: 12 Мп, фронтальная камера: 7 Мп", "RAM 2 ГБ", "32 ГБ встроенной памяти"], 950),
        new product(1, "Huawei P9", ["Экран (5.2, IPS, 1920x1080)", "HiSilicon Kirin 955 (4 ядра 2.5 ГГц + 4 ядра 1.8 ГГц)", " Две основные камеры: 12 Мп + 12 Мп, фронтальная камера: 8 Мп", "RAM 3 ГБ", "32 ГБ встроенной памяти + microSD/SDHC (до 32 ГБ)"], 690),
        new product(2, "LG G5", ["5.3 IPS, сенсорный емкостный, Multi-touch", "Qualcomm MSM8996 Snapdragon 820 (2.2 ГГц)", "Двойная основная камера: 16 и 8 Мп", "RAM 4 ГБ", "32 ГБ встроенной памяти"], 505),
        new product(3, "Microsoft Lumia 950 XL Dual Sim", ["Экран (5.7, AMOLED, 2560х1440)", "Qualcomm Snapdragon 810 (2.0 ГГц)", "основная камера: 20 Мп, фронтальная камера: 5 Мп", "RAM 3 ГБ", "32 ГБ встроенной памяти + microSD/SDHC (до 200 ГБ)"], 460),
        new product(4, "Motorola MOTO X Force (XT1580)", ["Экран (5.4, IPS, 2560x1440)", "Qualcomm Snapdragon 810 (2.0 ГГц)", "основная камера: 21 Мп, фронтальная камера: 5 Мп", "RAM 3 ГБ", "32 ГБ встроенной памяти + microSD/SDHC (до 2 ТБ)"], 692),
        new product(5, "Samsung Galaxy A7 2016 Duos", ["Экран (5.5, Super AMOLED, 1920x1080)", "Восьмиядерный Samsung Exynos 7 (1.6 ГГц)", "основная камера: 13 Мп, фронтальная камера: 5 Мп", "RAM 3 ГБ", "16 ГБ встроенной памяти + microSD/SDHC (до 128 ГБ)"], 490),
        new product(6, "Samsung Galaxy S7 32GB", ["Экран (5.1, Super AMOLED, 2560х1440)", "Exynos 8890 Octa (Quad 2.3 ГГц + Quad 1.6 ГГц)", "камера 12 Мп + фронтальная 5 Мп", "RAM 4 ГБ", "32 ГБ встроенной памяти + microSD (до 200 ГБ)"], 670)
    ];
}
store.prototype.getProduct = function (id) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id)
            return this.products[i];
    }
    return null;
}
