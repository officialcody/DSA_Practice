// Number Pattern

#include<iostream>
using namespace std;

int main(){
  int number;
  cout << "Enter the number of rows: ";
  cin >> number;
  for(int i=1;i<=number;i++){
    for(int j=1;j<=number-i;j++){
      cout << "  ";
    }
    for(int j=1;j<=i;j++){
      cout << j << "   ";
    }
    cout << endl;
  }
  return 0;
}