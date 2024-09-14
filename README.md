# clicker 3

## 0.2.2

добавлен редкий атрибут базовый
(значение к базе, база 3, прирост 2/3 + (lvl)^1.3/3)

добавлен обычный тарибут волосатый
(значение урона следующему противнику, база 6, прирост 3/4 + (lvl)^1.3/4)

распределение редкостей изменено:
- обычный (с 65% до 70%)
- редкий (с 28% до 24%)
- эпический (с 7% до 6%)

## 0.2.1b

криты теперь многут сработать многократно, если шанс выше 100%

атрибут зазубренный: уменьшено стартовое значение (с 20% до 5%)

базовый шанс крита увеличен до 10%

## 0.2.1a

числа тперь отображаются точнее

атрибут ядовитый: переработан, урон остался тем же, но наноситься быстрее

значения префиксов теперь имеют больший разброс (с 40% - 140% до 10% - 150%)

## 0.2.1

изменено отображение чисел

улучшение базового урона теперь чаще повышает значение за уровень (с 2^i \* 10 до Math.floor(1.7^i \* 8))

добавлен эпический атрибут двойной 
(% шанс на повторную атаку, база 3%, присрост 1/2 + lvl/2)

атрибут плоский: уменьшен прирост (0.25 + lvl^1.5/4\*3 до 3/4 + lvl^1.3/4)

добавлено предупреждение при попытке закрыть вкладку

## 0.2.0a

атрибут плоский: уменьшен прирост (с 0.25 + 1.4^(lvl-1)/4\*3 до 0.25 + (lvl)^1.5/4\*3)

атрибут бронебойный: изменена редкость (с обычный на редкий)

атрибут бронебойный: уменьшено стартовое значение (с 3 до 2)

атрибут бронебойный: уменьшен прирост (с 0.5 + lvl^1.5\*0.5 до 2/3 + lvl^1.2/3)

атрибут подготовленый: уменьшено стартовое значение (с 4 до 3)

## 0.2

прирост здоровья увеличен (с enemyid^1.3\*6 + 50 до enemyid^1.4\*(6 + 2\*prestige) + (50 + 20\*prestige))

добавлена система престижа, при престиже повышается здоровье врагов, сбрасывается их id, золото и уровень прокачки базы

стоимость престижа 1000000\*1.8^prestige

исправлен атрибут бронебойный, теперь отнимающиеся значение ровно всегда равно прибавленному 

## 0.1.3b

исправлена ошибка из-за которой яд продолжал наносить урон следующему противнику

изменён генератор префикса у статов (с 80%-120% на 40%-140% и плотность распределение с f(x)=1 на f(x)=1/2√x)

добавленно отображение префикса радом с статами

## 0.1.3a

именена стоимть предмотов в сферах (с 10 до 10 + количесво^2 \* 10)

## 0.1.3

добавленна система логов

## 0.1.2

увеличена базовая награда от здоровья противника (с 25% до 100%)

теперь нету награды за урон

таперь есть награда за урон от клика (10%)

## 0.1.1a

атрибут ядовитый теперь не продолжает действовать на нового противник

атрибут ядовитый теперь завит от базового урона в момент наложения эффекта, а не от базы в момент нанесения урона

стоимость улучшения увеличена (с 7+3\*lvl до 11+4\*lvl)

## 0.1.1

добавлен редкий атрибут ядовитый
(% урона от базы 2 раза, раз в 3 секунды)

добавлен обычный атрибут толстый
(фиксированая доп награда при убийстве)

добавлен эпический атрибут богатый
(% доп награда от макс здоровья врага)

увеличен разброс базовых значений атрибута
(с 85%-115% до 80%-120%)

прирост атрибута плоский увеличен 
(с 0.5 + 1.4^(lvl-1)/2 до 0.25 + 1.4^(lvl-1)/4\*3)

прирост атрибута жадный уменьшен
(с 0.5 + lvl\*0.5 до 3/4 + lvl/4) 

начальное значение атрибута жадный уменьшено
(с 2 до 1.5)

прирост атрибута бронебойный увеличен
(с 0.75 + lvl^1.5\*0.25 до 0.5 + lvl^1.5\*0.5) 

увеличено время длительности усиления от бронебойный
(с 2 секунд до 3 секунд)


распределение редкостей изменено:
- обычный (с 70% до 65%)
- редкий (с 24% до 28%)
- эпический (с 6% до 7%)
