from itertools import product
import sys
def solution(relation):
    answer = 0
    #relationT =[list(x) for x in zip(*relation)]
    relationT = list(zip(*relation))
    CandidateKey = []
    index = 0
    items = [0,1] 
    pCase = product(items,repeat=len(relation[0]))
    
    # 후보키의 길이가 1일 때 후보키 찾기
    for row in relationT:
        if(len(row) == len(set(row))):
            CandidateKey.append(index)
            answer += 1
        index += 1
        
    # 중복순열로 뽑은 모든 pCase에 대해 for문
    for p in pCase:
        pIndex = 0
        pList = []
        x = []
        pBool = True
        # 후보키의 길이가 1인 경우는 위에서 조사했으니 Pass
        if(p.count(1) <= 1):
            continue

        # pCase에서 1의 위치를 pList에 저장.
        # (0,0,1,1) -> pList : [2,3]
        for px in p:
            if(px == 1):
                pList.append(pIndex)
            pIndex += 1
        
        # pList와 CandidateKey 비교. 중복이면 pBool = False
        for i in CandidateKey:
            if(type(i) == int):
                if(i in pList):
                    pBool = False
                continue
            cnt = 0
            for j in i:
                for k in pList:
                    if(j==k):
                        cnt +=1
                    if(cnt >= len(i)):
                        pBool = False
                        break

        # 중복이 없으면 x에 relation의 튜플을 더해줌
        if(pBool == True):
            for i in pList:
                x.append(relationT[i])

        # 다 더한 x에서 중복값이 있는지 여부 조사. 없으면 answer += 1
        if(pBool == True and len(list(zip(*x))) == len(set(zip(*x)))):
            answer += 1
            CandidateKey.append(pList)

    return answer
print(solution([["a","b","c"],["1","b","c"],["a","b","4"],["a","5","c"]]))



from collections import Counter
from itertools import combinations

global answer
global candi
global row
global cols


def possible(r, col):
    for l in range(len(col)): # 최소성 만족하는지 확인
        minimum = combinations(col, l + 1)
        for m in minimum:
            if m in candi:
                return
    global answer
    rows = [tuple(r[i][j] for j in col) for i in range(row)] # 컬럼으로 tuple 뽑음
    num = Counter(rows) # 개수 세아리기
    for key in num:
        if num[key] > 1: # 중복되는 거 있으면 ㄴㄴ
            return

    candi.append(col) # 후보키 배열에 추가
    answer += 1


def solution(relation):
    global row
    global candi
    global answer
    global cols
    col = len(relation[0]) # 컬럼 개수
    cols = [i for i in range(len(relation[0]))] # 로 만든 배열 [0, 1, 2, 3] 
    row = len(relation) # tuple 개수
    answer = 0
    candi = [] # 후보키 담을 배열 
    for j in range(col):
        cases = combinations(cols, j + 1) # 길이별로 조합을 통해 후보키 후보 선택
        for case in cases:
            possible(relation, case)
    return answer