<h1>Тестовое задание на позицию Программист-стажер</h1> 

<h2>1. Инкапсуляция, наследжование и полиморфизм.</h2>
1.1. **Инкапсуляция** - это принцип, заключающийся в сокрытии данных и методов класса от внешнего мира, предоставляя доступ к ним только через определённые интерфейсы.

***Пример:***
```C#
public class Car
{
    private string _model;
    private int _year;

    public Car(string model, int year)
    {
        _model = model;
        _year = year;
    }

    public string GetModel()
    {
        return _model;
    }

    public int GetYear()
    {
        return _year;
    }
}
```
> В этом примере поля `_model` и `_year` являются частными (`private`), то есть доступны только внутри класса `Car`. Внешний код может получить к ним доступ только через методы `GetModel` и `GetYear`. Это обеспечивает контроль над доступом к данным

1.2. **Наследование** - это механизм, позволяющий создавать новые классы (дочерние классы) на основе существующих (родительских классов). Дочерний класс наследует все поля и методы родительского класса, и может добавить свои собственные.

***Пример:***
```C#
public class Vehicle
{
    public string Brand;

    public void Start()
    {
        Console.WriteLine("Vehicle started");
    }
}

public class Car : Vehicle
{
    public string Model;

    public void Drive()
    {
        Console.WriteLine("Car is driving");
    }
}
```
> В этом примере класс `Car` наследует от класса `Vehicle`. Класс `Car` наследует поле `Brand` и метод `Start` от класса `Vehicle` и добавляет поле `Model` и метод `Drive`.

1.3. **Полиморфизм** - это способность объектов разных классов отвечать на один и тот же вызов метода по-разному.

***Пример:***
```C#
public class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("Animal sound");
    }
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Bark!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}
```
> В этом примере класс `Animal` имеет виртуальный метод `MakeSound`, который может быть переопределён в дочерних классах. Классы `Dog` и `Cat` переопределяют этот метод.

<h2>2. Восстановление предыдущей версии кода в Git</h2>

``` Git bash
git log
git checkout <commit_hash>
git revert <commit_hash>
git reset --hard <commit_hash>
```

<h2>3. Функция проверки палиндрома</h2>
Реализована функция на нескольких языках программирования:

1. JavaScript.
<p>Работоспособность фуннкции можно проверить на веб-странице. Код метода:</p>

```JavaScript
function checkPalindrome() {
    const textInput = document.getElementById('text-input').value;
    const cleanedText = textInput.replace(/\s/g, '').toLowerCase();
    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');
  
    const resultElement = document.getElementById('result');
    if (isPalindrome) {
      resultElement.textContent = `Текст "${textInput}" является палиндромом.`;
    } else {
      resultElement.textContent = `Текст "${textInput}" не является палиндромом.`;
    }
  }
```

2. Python.
<p>Исполняемый файл находится в папке "3-d stage". Там же находится файл с тестовыми входными данными. Код исполняемого файла представлен ниже:</p>

``` Python
def readLinesFromFile(path: str):
    with open(path, 'r') as file:
        return [line.strip() for line in file.readlines()]
    

def isPolyndrom(text: str):
    return text == text[::-1]


tests = readLinesFromFile('./3-d stage/test.txt')
for i in range(0, len(tests)):
    test = tests[i]
    print(f"{i}. {test} - {isPolyndrom(test)}")
```

3. C#
<p>Код метода на C#:</P>

```C#
static void Main(string[] args)
{
    string strInput = Console.ReadLine();
    if (IsPolindrom(strInput)) Console.WriteLine("Полиндром");
    else Console.WriteLine("Не полиндром");
}

static bool IsPolindrom(string str)
{
    string temp = str.Replace(" ", "").ToLower();
    return temp == new string(temp.ToCharArray().Reverse().ToArray());
}
```

<h2>4. Опыт в IT и GitHub</h2>
[Сайт-проект от HTMLacademy] (https://youngplant.github.io/SpaceZ/)

> В качестве заключительного этапа обучения на платформе HTMLacademy необходимо было реализовать задание - верстка веб-сайт по шаблону. Обучение на платформре было прдложено школой.

[Creatives] (https://youngplant.github.io/SomeNew/)

> Для прохождения стажировки в одной компании, необходимо было выполнить ряд тестовых заданий, в которые входили: разработка любого двухуровневого сатйа, два веб-приложения на Django - для заметок, подсчет коммитов каждого committer. (доступ к веб-приложениям не имеется).

<h3>Опыт в IT:</h3>
1. Проходил отборочные этапы в Школа 21, в течение месяца (изучен ЯП C и получены навыки использования GitHub при разработке);
2. Пройдены курсы на платформах: Stepik (Верстка сайтов и языки программирования (C#, Python))  и Kodland (Python Продвинутый).
