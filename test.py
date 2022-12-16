def solution(s, times):
    answer = [1,1]
    #[year, month, day, hour, minutes, second]
    start = list(map(int, s.split(":")))
    end = list(map(int, s.split(":")))

    for t in times:
        splited_t = list(map(int,t.split(":")))
        save_date = saving_date_calculator(end, splited_t)

        if is_over_a_day(end, save_date):
            answer[0] = 0
        end = save_date

    answer[1] = day_calculator(start, end)

    return answer

def saving_date_calculator(before_save, save_date):
    minutes, second = my_divmod(0, before_save[5], save_date[3], 60)
    hour, minutes = my_divmod(minutes, before_save[4], save_date[2], 60)
    day, hour = my_divmod(hour, before_save[3], save_date[1], 24)
    month, day = my_divmod(day, before_save[2], save_date[0], 30)
    year, month = my_divmod(month, before_save[1], 0, 12)
    year += before_save[0]
    return [year, month, day, hour, minutes, second]
    
def my_divmod(target, before, after, num):
    a, b = divmod(target + before + after, num)
    return [a,b]

def is_over_a_day(before_save, save_date):
    return True if save_date[2] - before_save[2] > 1 else False

def day_calculator(start,end):
    year = end[0] - start[0]
    month = end[1] - start[1]
    day = end[2] - start[2]
    return 360*year + 30*month + day + 1

print(solution("2020:12:30:23:59:0", []))