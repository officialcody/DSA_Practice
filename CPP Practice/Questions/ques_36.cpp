// Zig-zag pattern
#include<iostream>
using namespace std;

int main() {
  int number;
  cout << "Enter numbe of stars:";
  cin >> number;

  for(int row=1;row<=3;row++){
    for(int column=1;column<=number;column++){
      if((row+column)%4==0 || (row==2 && column%4==0)){
        cout << "* ";
      } else {
        cout << "  ";
      }
    }
    cout << endl;
  }
  return 0;
}