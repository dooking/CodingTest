def solution(strings, n):
    result = sorted(strings,key=lambda x:x[n])
    setString = [value[n] for value in strings ]
    print(len(setString), len(list(set(setString))))
    if(len(setString) == len(list(set(setString)))):
        result = sorted(result)
    return result


solution(["abce", "abcd", "cdx"],2)