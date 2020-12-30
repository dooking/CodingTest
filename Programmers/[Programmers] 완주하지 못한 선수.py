import collections

def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    print(list(answer))
    return list(answer)[0]
#print(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))
