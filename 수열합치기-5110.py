class Node:
    def __init__(self,data,next=None):
        self.data = data
        self.next = None
class NodeMgmt:
    def __init__(self,data):
        self.head = Node(data)
    def add(self,data):
        if(self.head == None):
            self.head = Node(data)
        else:
            cur_node = self.head
            while cur_node.next:
                cur_node = cur_node.next
            cur_node.next = Node(data)
    def _add(self,list):
        seq1 = self.head
        seq2 = list.head
        cnt = 0 
        while seq1.next:
            if(cnt ==0 ):
                if(seq1.data > seq2.data):
                    seq2

            seq1 = seq1.next

# main 함수
T = int(input())
for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    # 빈 LinkedList 생성
    Seq1 = NodeMgmt()
    # LinkedList 입력받기
    for i in map(int, input().split()):
        Seq1.append(i)

    for _ in range(M - 1):
        # 빈 LinkedList 생성
        Seq2 = NodeMgmt()
        # LinkedList 입력받기
        for j in map(int, input().split()):
            Seq2.append(j)
        # Seq1에 Seq2 삽입
        Seq1.insertlist(Seq2)
    
    print('#{} {}'.format(test_case, Seq1.my_result()))