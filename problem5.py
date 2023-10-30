# linked list problem

head = [1, 2, 3, 4, 5]

// node definition
class Node(object):
  def __init__(self, val=0, next=None):
    self.val = value
    self.next = next

# removing the nth node from the end

class Answer(object)
  def Nthend(self, head, nth):
    point1 = point2 = head  # fast and slow pointers
    for _ in range(nth):
      point1 = point1.next
    if not point1:
      return head.next
    while point1.next:
      point1 = point1.next
      point2 = point2.next
    point2.next = point2.next.next
    return head

# don't forget moewtest cases


# output: [1, 2, 3, 5]
