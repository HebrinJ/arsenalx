/***
 *  Вся техника делится на группы.
 *  Каждая группа делиться на типы.
 *  Группы и типы указываются отдельными полями в JSON или БД
 *  И группы и типы могут пополняться
 */

export enum UnitGroup {
    ARMOR = "ARMOR", // Бронетехника
    AIRCRAFT = "AIRCRAFT", //Авиация
    NAVAL = "NAVAL", // Флот
    MISSILE = "MISSILE", // Ракетное вооружение
}

export enum UnitTypes {
    // Типы группы ARMOR

    BBM = "BBM", // Бронемашины
    TANK = "TANK", // Танки
    SAU = "SAU", // Самоходные орудия
    ACV = "ACV", // БТР, БМП
    MLRS = "MLRS", // Системы РСЗО

    // Типы группы Авиация

    FIGHTER = "FIGHTER", // Истребители
    STURM = "STURM", // Штурмовики
    BOMBER = "BOMBER", // Бомбардировщики
    SUPPORT_PLANE = "SUPPORT_PLANE", // Вспомогательные самолеты
    ATTACK_HELICOPTER = "ATTACK_HELICOPTER", // Ударные вертолеты
    SUPPORT_HELICOPTER = "SUPPORT_HELICOPTER", // Вспомогательные вертолеты
    DRONE = "DRONE", // Беспилотные аппараты
}