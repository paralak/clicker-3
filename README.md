# clicker 3
 
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

## 0.1.1a
атрибут ядовитый теперь не продолжает действовать на нового противник

атрибут ядовитый теперь завит от базового урона в момент наложения эффекта, а не от базы в момент нанесения урона

стоимость улучшения увеличена (с 7+3\*lvl до 11+4\*lvl)

## 0.1.2
увеличена базовая награда от здоровья противника (с 25% до 100%)

теперь нету награды за урон

таперь есть награда за урон от клика (10%)

## 0.1.3

добавленна система логов

## 0.1.3a

именена стоимть предмотов в сферах (с 10 до 10 + количесво^2 \* 10)

## 0.1.3b

исправлена ошибка из-за которой яд продолжал наносить урон следующему противнику

изменён генератор префикса у статов (с 80%-120% на 40%-140% и плотность распределение с f(x)=1 на f(x)=1/2√x)

добавленно отображение префикса радом с статами
