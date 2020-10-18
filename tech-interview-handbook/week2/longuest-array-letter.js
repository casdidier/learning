const characterReplacement = function (s, k) {
  const n = s.length;
  const charCount = new Array(26);
  charCount.fill(0);

  let windowStart = 0;
  let maxLength = Number.MIN_VALUE;
  let maxCount = 0;

  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    const currentCharIdx = s.charCodeAt(windowEnd) - 65;
    charCount[currentCharIdx]++;
    maxCount = Math.max(maxCount, charCount[currentCharIdx]);

    // num of chars we need to change < k
    // length-maxCount = num Operations
    while ((windowEnd - windowStart + 1) - maxCount > k) {
      const leftChar = s.charCodeAt(windowStart) - 65;
      charCount[leftChar]--;
      windowStart++;
    }
    maxLength = (maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
