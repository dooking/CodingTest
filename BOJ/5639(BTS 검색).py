class node:
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None
class tree:
    def __init__(self):
        self.root = None
    def insert(self,data):
        if(self.root == None):
            self.root = node(data)
        else:
            self._insert(self.root,data)
    def _insert(self,cur_node,data):
        if(data < cur_node.value):
            if(cur_node.left == None):
                cur_node.left = node(data)
            else:
                self._insert(cur_node.left,data)
        else:
            if(cur_node.right == None):
                cur_node.right = node(data)
            else:
                self._insert(cur_node.right,data)
    def postorder(self):
        if(self.root != None):
            self._postorder(self.root)
            
    def _postorder(self,cur_node):
        if(cur_node!=None and cur_node.value != ''):
            self._postorder(cur_node.left)
            self._postorder(cur_node.right)
            print(cur_node.value,end='')
    def height(self):
        if(self.root != None):
            return self._height(self.root,0)
        else:
            return 0
    def _height(self,cur_node,height_value):
        if(cur_node == None):
            return height_value
        left_height=self._height(cur_node.left,height_value + 1)
        right_height=self._height(cur_node.right,height_value + 1)
        return max(left_height,right_height)

BTS = tree()
N = int(input())
for i in range(N):
    a=int(input())
    BTS.insert(a)
print(BTS.height())