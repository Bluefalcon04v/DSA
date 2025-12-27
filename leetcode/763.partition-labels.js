/*
763. Partition Labels
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.
Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
Return a list of integers representing the size of these parts.

Example 1:
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Example 2:
Input: s = "eccbbbbdec"
Output: [10]

*/
function partitionLabels(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = [i, i];
    } else {
      map[s[i]][1] = i;
    }
  }

  let arr = Object.values(map);
  arr.sort((a, b) => a[0] - b[0]);
  let mergeArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] < mergeArr[mergeArr.length - 1][1]) {
      mergeArr[mergeArr.length - 1][1] = Math.max(
        mergeArr[mergeArr.length - 1][1],
        arr[i][1]
      );
    } else {
      mergeArr.push(arr[i]);
    }
  }

  let result = [];

  for (let i = 0; i < mergeArr.length; i++) {
    result.push(1 + (mergeArr[i][1] - mergeArr[i][0]));
  }

  return result;
}
console.log(partitionLabels("ababcbacadefegdehijhklij"));
