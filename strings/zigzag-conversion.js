const convert = (s, numRows) => {
  let row = 0;
  let down = true;
  let str = s.split('');
  let res = [];
  for (let i = 0; i < numRows; i++) {
    res[i] = '';
  }

  for (let i = 0; i < str.length; i++) {
    res[row] += str[i];
    if (down) {
      row++;
    } else {
      row--;
    }

    if (row === numRows - 1) {
      down = false;
    }

    if (row === 0) {
      down = true;
    }
  }

  let resString = '';
  res.forEach(item => (resString += item));
  
  return resString;
};

// https://leetcode.com/problems/zigzag-conversion
convert('PAYPALISHIRING', 4);
