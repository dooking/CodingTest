def solution(skill, skill_trees):
    answer = 0
    for skill_tree in skill_trees:
        check = 0
        isCheck = True
        for skill_t in skill_tree:
            print(skill_tree,skill_t,skill.find(skill_t),check)
            if(skill_t in skill and skill.find(skill_t) != check):
                isCheck = False
                break
            elif(skill.find(skill_t) == check):
                check += 1
        if(isCheck or check == len(skill)):
            answer +=1

    return answer

print(solution("CBD",["BACDE","CBADF","AECB","BDA"]))