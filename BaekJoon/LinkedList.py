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
    def desc(self):
        cur_node = self.head
        while cur_node:
            print(cur_node.data)
            cur_node=cur_node.next
    def delete(self,data):
        if(self.head.data == data):
            temp = self.head
            self.head = self.head.next
            del temp
        else:
            cur_node = self.head
            while cur_node.next.data != data:
                  cur_node = cur_node.next
            print(cur_node.data)        
            temp = cur_node.next
            cur_node.next = cur_node.next.next
            del temp