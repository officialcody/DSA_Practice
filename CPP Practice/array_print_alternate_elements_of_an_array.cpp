#include<bits/stdc++.h>
using namespace std;

void print(int ar[], int n) {
    for(int i=0;i<n;i++){
        if(i%2==0){
            cout << ar[i] << " ";
        }
    }
}

int main() {
  int t;
  cout << "Enter number of test cases: " << endl;
  cin >> t;
  while(t--){
    int ar[100001] = {0};
    int n;
    cout << "Enter size of array: " << endl;
    cin >> n;
    cout << "Enter elements of array(seperated by space)" << endl;
    for(int i=0;i<n;i++){
      cin >> ar[i];
    }
    print(ar, n);
    cout << endl;
  }
  return 0;
}