   def KeysforRooms(self, rooms: List[List[int]]) -> bool:
        Roomz=len(rooms)
        visitList=[1]*roomz
        que=[0]
        while que:
            queued=que.pop(0)
            if visitList[c]==1:
                queuedRooms=rooms[queued]
                que.extend(queued)
            visitList[c]=0
        if sum(visitList)==0:
            print("Yes, you can visit all rooms")
            return True
        else:
            print("No, you cannot visit all rooms")
            return False
