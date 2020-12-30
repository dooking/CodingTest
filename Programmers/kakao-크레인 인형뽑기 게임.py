def solution(board, moves):
    transpose_borad = list(map(list, zip(*board)))
    answer_list = []
    answer = 0
    for move in moves:   
        for i in range(len(board)):
            doll = transpose_borad[move-1][i]
            if(doll !=0):
                if(len(answer_list) != 0 and answer_list[-1] == doll):
                    answer_list.pop()
                    answer += 2
                else:
                    answer_list.append(doll)
                transpose_borad[move-1][i] = 0
                break
    return answer

print(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]))