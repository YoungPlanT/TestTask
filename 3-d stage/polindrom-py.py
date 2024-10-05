def readLinesFromFile(path: str):
    with open(path, 'r') as file:
        return [line.strip() for line in file.readlines()]
    

def isPolyndrom(text: str):
    return text == text[::-1]


tests = readLinesFromFile('./3-d stage/test.txt')
for i in range(0, len(tests)):
    test = tests[i]
    print(f"{i}. {test} - {isPolyndrom(test)}")
