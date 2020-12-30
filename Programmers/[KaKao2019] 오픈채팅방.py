def solution(record):
    answer = []
    data = dict()
    for info in record:
        info_list = info.split(' ')
        if(info_list[0] == "Enter"):
            data[info_list[1]] = info_list[2]
        elif(info_list[0] == "Change"):
            data[info_list[1]] = info_list[2]
    for info in record:
        info_list = info.split(' ')
        if(info_list[0] == "Enter"):
            answer.append("{}님이 들어왔습니다.".format(data[info_list[1]]))
        elif(info_list[0] == "Leave"):
            answer.append("{}님이 나갔습니다.".format(data[info_list[1]]))
    return answer

a = solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])
