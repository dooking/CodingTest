answer = [[]]
wall = []


def check(n):
    ans = True
    for frame in answer:
        x, y, a = frame
        if a == 0:  # 기둥
            if y == 0:
                continue
            if [x, y, 1] in answer or (x > 0 and [x - 1, y, 1] in answer) or [x, y - 1, 0] in answer:
                continue
            return False
        else:  # 보
            if [x, y - 1, 0] in answer or (x < n and [x + 1, y - 1, 0] in answer):
                continue
            if 0 < x < n and [x - 1, y, 1] in answer and [x + 1, y, 1] in answer:
                continue
            return False
    return ans


def solution(n, build_frame):
    global wall
    global answer
    answer = []
    for frame in build_frame:
        if frame[3] == 1:  # 설치
            answer.append([frame[0], frame[1], frame[2]])
            if not check(n):
                answer.remove([frame[0], frame[1], frame[2]])
        else:
            answer.remove([frame[0], frame[1], frame[2]])
            if not check(n):
                answer.append([frame[0], frame[1], frame[2]])

    answer.sort(key=lambda x: (x[0], x[1], x[2]))

    return answer