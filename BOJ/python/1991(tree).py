class node:
    def __init__(self,value):
        self.value = value
        self.left = 0
        self.right = 0

class tree:
    def __init__(self):
        self.root = node(0)
    def insert(self,data):
        self.cur_node = self.root
        if(self.cur_node.value == 0):
            self.cur_node.value = data[0]
            self.cur_node.left = node(data[1])
            self.cur_node.right = node(data[2])
        else:
            self._insert(self.cur_node,data)
    def _insert(self,cur_node,data):
        if(type(cur_node) is not int and cur_node.value == data[0]):
            cur_node.left = node(data[1])
            cur_node.right = node(data[2])
        elif(type(cur_node) is not int and cur_node.value != data[0]):
            self._insert(cur_node.left,data)
            self._insert(cur_node.right,data)

def preorder(cur_node):
    if (type(cur_node) is not int) and cur_node.value !=0 and cur_node.value!='.':
        print(cur_node.value,end='')
        preorder(cur_node.left)
        preorder(cur_node.right)

def inorder(cur_node):
    if (type(cur_node) is not int) and cur_node.value !=0 and cur_node.value!='.':
        inorder(cur_node.left)
        print(cur_node.value,end='')
        inorder(cur_node.right)

def postorder(cur_node):
    if (type(cur_node) is not int) and cur_node.value !=0 and cur_node.value!='.':
        postorder(cur_node.left)
        postorder(cur_node.right)
        print(cur_node.value,end='')
        
n=int(input())
BST = tree()
for i in range(n):
    A = list(map(str,input().split()))
    BST.insert(A)
preorder(BST.root)
print('')
inorder(BST.root)
print('')
postorder(BST.root)