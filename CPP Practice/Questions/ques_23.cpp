// (c = 0011 << 1
// c = 0110
// b = 6* (3*(2)--)
// b = 6*6
// )
#include<stdio.h>
int main() {
  int a = 1, b = 3, c;
  c = b << a;
  b = c * (b * (++a)--);
  a = a >> b;
  printf("%d",b);
  return 0;
}