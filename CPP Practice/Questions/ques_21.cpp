// (As & is a unary operator we have to assume all decimal values to
// binary(0's and 1's)
// 210 = 000000102
// Now we go for condition (00000010 & 00000001)
// Clearly, condition false as it leads to 0 when multiplied.)
#include<stdio.h>
int main() {
  int x = 2;
  (x & 1) ? printf("true") : printf("false");
  return 0;
}