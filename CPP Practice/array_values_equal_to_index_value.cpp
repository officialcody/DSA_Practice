#include<bits/stdc++.h>
using namespace std;

class Solution{
public:

	void valueEqualToIndex(int arr[], int n) {
    vector<int> values;
    for(int i=0;i<n;i++){
        if(arr[i] == i+1){
          values.push_back(arr[i]);
        }
    }
    for(int i=0;i<values.size();i++){
      cout << values.at(i) << " ";
    }
	}
};

int main() {
  int t;
  cout << "Enter number of test cases: " << endl;
  cin >> t;
  while(t--) {
    int n, key;
    cout << "Enter number of elements in array: " << endl;
    cin >> n;
    int a[n];
    cout << "Enter each element of Array(seperated with space): " << endl;
    for(int i=0;i<n;i++) cin >> a[i];
    Solution ob;
    ob.valueEqualToIndex(a, n);
  }
  return 0;
}