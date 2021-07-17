
//array solution
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let length1 = l1.length;
  let length2 = l2.length;
  let i = 0;
  let j = 0;
  let result = [];
  while (i < length1 || j < length2) {
    let num1 = 0;
    let num2 = 0;
    let res = 0;
    if (i < length1) {
      num1 = l1[i];
    }
    if (j < length2) {
      num2 = l2[j];
    }
    res = num1 + num2 + carry;
    if (res >= 10) {
      carry = parseInt(res / 10);
      res = res % 10;
    } else {
      carry = 0;
    }
    result.push(res);
    i++;
    j++;
  }
  if (carry > 0) {
    result.push(carry);
  }
  return result;
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));


var addTwoNumbersLinkedList = function(l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while(l1!==null||l2!==null||sum>0){

      if(l1!==null){
          sum = sum + l1.val;
          l1 = l1.next;
      }
      if(l2!==null){
          sum = sum + l2.val;
          l2 = l2.next;
      }
      if(sum>=10){
          carry = 1;
          sum = sum - 10;
      }

      head.next = new ListNode(sum);
      head = head.next;

      sum = carry;
      carry = 0;

  }

  return List.next;
};