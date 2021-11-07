// Palindromic Pattern

#include<iostream>
using namespace std;

int main() {
  int number;
  cout << "Enter the number of rows: ";
  cin >> number;
  for(int i=1;i<=number;i++){
    int j;
    for(j=1;j<=number-i;j++){
      cout << "  ";
    }
    int k = i;
    for(;j<=number;j++){
      cout << k-- << " ";
    }
    k = 2;
    for(;j<=number+i-1;j++){
      cout << k++ << " ";
    }
    cout << endl;
  }
   return 0;
}