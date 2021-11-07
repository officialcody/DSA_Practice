// Floyd's Triangle
#include<iostream>
using namespace std;

int main() {
  int number;
  cout << "Enter number of rows: ";
  cin >> number;
  int count = 1;
  for(int i=0;i<number;i++){
    int sum = 0;
    for(int j=0;j<=i;j++){
      sum += count;
      cout << count << " ";
      count++;
    }
    cout << sum << endl;
  }
  return 0;
}