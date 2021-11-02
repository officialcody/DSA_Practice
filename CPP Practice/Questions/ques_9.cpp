// Number is prime or not

#include<bits/stdc++.h>
using namespace std;

int main() {
  int number;
  cin >> number;
  int divisor = 2;
  bool flag = true;
  while(divisor < number){
    if(number % divisor == 0){
      flag = false;
      cout << "Not Prime" << endl;
      break;
    } else {
      divisor++;
    }
  }
  if(flag){
    cout << "Prime" << endl;
  }
}