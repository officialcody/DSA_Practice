// Inverted Half pyramid using numbers

#include<iostream>
using namespace std;

int main(){
  int number;
  cout << "Enter a number";
  cin >> number;
  for(int i=1;i<=number;i++){
    for(int j=1;j<=number-i+1;j++){
      cout << j << " ";
    }
    cout << endl;
  }
}