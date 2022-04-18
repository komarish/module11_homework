/*  Савенкова Марина, FR-92  */

const func = require('../src/func4');

//блок тестов для функции createAdder из тренажера
describe("Tests for createAdder function", () => {

    //проверяем, что createAdder возвращает функцию
    it("createAdder from 1 should be function", () => {
        expect(typeof(func.createAdder(1))).toBe("function");
    }),

    //тест для строки и числа в качестве входных параметров
    it("createAdder from '3' and 4 should be '34'", () => {
        expect(func.createAdder('3')(4)).toBe("34");
    }),

    //тест для чисел с плавающей точкой
    //используем toBeCloseTo из-за ошибки округления при операциях с дробными числами
    it("createAdder from 0.1 and 0.2 should be close to 0.3", () => {
        const a = 0.1;
        const b = 0.2;
        const sum = a + b;

        expect(func.createAdder(a)(b)).toBeCloseTo(sum);
    }),

    //тест для двух целых чисел
    it("createAdder from 3 and -4 should be -1", () => {
        expect(func.createAdder(3)(-4)).toBe(-1);
    }),

    //тест для функции, вызванной без параметров
    it("createAdder without parameters should be NaN", () => {
        expect(func.createAdder()()).toBeNaN();
    })

});

