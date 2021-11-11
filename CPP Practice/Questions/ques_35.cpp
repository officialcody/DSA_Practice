// Star pattern

#include<iostream>
using namespace std;

int main() {
  int number;
  cout << "Enter the number of rows: ";
  cin >> number;

  for(int i=1;i<=number;i++){
    for(int j=i;j<number;j++){
      cout << "  ";
    }
    for(int j=1;j<=2*i-1;j++) {
      cout << "* ";
    }
    cout << endl;
  }
  for(int i=number;i>=1;i--){
    for(int j=1;j<=number - i;j++){
      cout << "  ";
    }
    for(int j=1;j<=2*i-1;j++) {
      cout << "* ";
    }
    cout << endl;
  }
}