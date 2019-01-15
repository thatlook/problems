/* 
Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if all of the characters in s can be replaced to form t and vice versa.

Input: string, string
Output: boolean
Constraints: none
Exceptions: 2 diff characters should not map to one
*/

function isIsomorphic(s, t) {
  // create dict
  const d = {};
  for (let i = 0; i < s.length; i++) {
    if (!d[s[i]]) {
      if (Object.values(d).includes(t[i])) {
        return false;
      }
      d[s[i]] = t[i];
    }
  }

  // recreate t
  let newT = '';
  for (let i = 0; i < s.length; i++) {
    newT += d[s[i]];
  }

  if (newT === t) {
    return true;
  }
  return false;
}

module.exports = isIsomorphic;
