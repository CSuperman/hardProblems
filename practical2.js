// i wanted to merge lists of images and dates into 1 sorted list.
// the use case was an image carousel sorted by date

class Node {
    constructor(date, imageLink) {
        this.date = date;
        this.imageLink = imageLink;
        this.next = null    // linked to next carousel button
        this.prev = null    // linked to previous carousel button
    }
}





function DoublyLinkedList(data) {
    const head = new Node(isValidDate(data[0].date) ? data[0].date : new Date(), data[0].imageLink);
    let current = head;

    for (let i = 1; i < data.length; i++) {
        const newNode = new Node(isValidDate(data[i].date) ? data[i].date : new Date(), data[i].imageLink);
        current.next = newNode;
        newNode.prev = current
        current = newNode;
    }

    return head;
}




function isValidDate(date) {
    if (date instanceof Date) {
        return true;
    } else {
        console.warn("Not a valid date.");
        return false;
    }
}




function mergeTwoLists(l1, l2) {
    const temp = new Node(null, null);
    let tail = temp;

    while (l1 && l2) {
        if (l1.date <= l2.date) {
            tail.next = l1
            l1.prev = tail;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2.prev = tail
            l2 = l2.next;
        }
        tail = tail.next;
    }

    tail.next = l1 || l2;
    (tail.next).prev = tail

    return temp.next;
}








function mergeNLists(lists) {
    if (lists.length === 0) return null; 
    if (lists.length === 1) return lists[0];

    const mid = Math.floor(lists.length / 2);
    const left = mergeNLists(lists.slice(0, mid))
    const right = mergeNLists(lists.slice(mid));
    return mergeTwoLists(left, right);
}






// testing



const list1 = DoublyLinkedList([
    { date: new Date("2024-01-02"), imageLink: "image1" },
    { date: new Date("2024-01-05"), imageLink: "image2" }
]);
const list2 = DoublyLinkedList([
    { date: new Date("2024-01-01"), imageLink: "image3" },
    { date: new Date("2024-01-04"), imageLink: "image4" }
]);
const list3 = DoublyLinkedList([
    { date: new Date("2024-01-03"), imageLink: "image5" }
]);

const mergedList = mergeNLists([list1, list2, list3]);

console.log("1 list (sorted by date):");
let current = mergedList;
while (current) {
    console.log(`Date: ${current.date}, Image Link: ${current.imageLink}`);
    current = current.next;
}
