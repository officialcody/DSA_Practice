// Inverted Pattern
#include<iostream>
using namespace std;

int main(){
  int number;
  cout << "Enter number of rows: ";
  cin >> number;
  for(int i=1;i<=number;i++){
    for(int j=1;j<=number-i+1;j++){
      cout << j << " ";
    }
    cout << endl;
  }
}