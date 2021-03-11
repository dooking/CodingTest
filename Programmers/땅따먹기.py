def solution(land):
    row = 0
    canAnswer = -1
    for col in range(4):
        prevCol = col
        summary = land[0][col]
        for row in range(len(land)):
            if(row == len(land)-1):
                continue
            nextRow = []
            index = 0
            for i in range(row+1,row+2):
                for j in range(4):
                    if (j!=prevCol):
                        nextRow.append([land[i][j],index])
                        index += 1
            nextRow.sort(key=lambda x: x[0])
            [maxNum, maxIndex] = nextRow[-1]
            prevCol = maxIndex
            # print(col,row, summary,nextRow)
            summary += maxNum
        canAnswer= max(canAnswer,summary)
    return canAnswer



print(solution([[1,2,3,5],[5,6,7,100],[4,3,2,1]]))