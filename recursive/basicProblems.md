1. LINEAR RECURSION
   Pattern: f(n) → f(n-1)
   Use: counting, sums, digit problems

   Build-up:

   - Print 1 → N, N → 1
   - Sum 1 → N
   - Sum of digits

   LeetCode:

   - 509 Fibonacci Number
   - 231 Power of Two
   - 342 Power of Four

==================================================

2. TAIL RECURSION (Accumulator)
   Pattern: f(n, acc) → f(n-1, acc)
   Use: optimized recursion, iteration-like

   Build-up:

   - Factorial (accumulator)
   - Array sum (index + acc)

   LeetCode:

   - 206 Reverse Linked List
   - 724 Find Pivot Index

==================================================

3. HEAD / POST-ORDER RECURSION
   Pattern:
   f(n-1) → work
   or
   work → f(n-1)

   Use: forward / backward output

   Build-up:

   - Print array
   - Reverse string / number

   LeetCode:

   - 344 Reverse String
   - 151 Reverse Words in a String

==================================================

4. DIVIDE & CONQUER
   Pattern: f(left) + f(right)
   Use: split problem into halves

   Build-up:

   - Binary search logic
   - Merge two halves

   LeetCode:

   - 704 Binary Search
   - 912 Sort an Array
   - 169 Majority Element

==================================================

5. MULTIPLE RECURSIVE CALLS (Tree Recursion)
   Pattern: f(n-1) + f(n-2)
   Use: counting ways

   Build-up:

   - Fibonacci
   - Climbing stairs

   LeetCode:

   - 70 Climbing Stairs
   - 1137 Tribonacci Number

==================================================

6. INCLUDE / EXCLUDE
   Pattern:
   include → recurse
   exclude → recurse

   Use: subset logic

   Build-up:

   - Generate subsets
   - Subset sum

   LeetCode:

   - 78 Subsets
   - 90 Subsets II
   - 416 Partition Equal Subset Sum

==================================================

7. CHOOSE – EXPLORE – UNCHOOSE (Backtracking)
   Pattern:
   choose → recurse → unchoose

   Use: permutations, combinations

   LeetCode:

   - 46 Permutations
   - 47 Permutations II
   - 77 Combinations

==================================================

8. BUILD & RETURN
   Pattern:
   result = recurse
   modify result
   return result

   Use: constructing arrays / strings

   LeetCode:

   - 344 Reverse String
   - 1047 Remove Adjacent Duplicates
   - 1768 Merge Strings Alternately

==================================================

9. BOOLEAN DECISION RECURSION
   Pattern:
   if fail/success → return true/false
   else → recurse

   Use: validation checks

   LeetCode:

   - 125 Valid Palindrome
   - 941 Valid Mountain Array
   - 234 Palindrome Linked List

==================================================

10. ADVANCED (MIXED PATTERNS)

LeetCode:

- 22 Generate Parentheses
- 39 / 40 Combination Sum
- 131 Palindrome Partitioning
- 51 N Queens
