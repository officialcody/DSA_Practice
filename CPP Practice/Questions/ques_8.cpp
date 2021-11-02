// Factorial of a number

#include<bits/stdc++.h>
using namespace std;

int main() {
  int number;
  cin >> number;
  int fact = 1;
  for(int i=1;i<=number;i++){
    fact *= i;
  }
  cout << fact << endl;
}