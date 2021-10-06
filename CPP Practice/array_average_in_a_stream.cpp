#include<bits/stdc++.h>
using namespace std;

vector<float> calculateStreamAverage(int arr[], int n);

int main(){
  int t;
  cin >> t;
  while(t--){
    int n;
    cin >> n;
    int arr[n];
    for(int i=0;i<n;i++) cin >> arr[i];
    vector<float> ans = calculateStreamAverage(arr, n);
    cout << fixed << setprecision(2);
    for(int i=0;i<n;i++){
      cout << ans[i] << " ";
    }
    cout << endl;
  }
  return 0;
}

vector<float> calculateStreamAverage(int arr[], int n) {
  vector<float> res;
  float sum = 0.0;
  for(int i=0;i<n;i++){
      float calSum = sum + arr[i];
      sum += arr[i];
      res.push_back(calSum/(i+1));
  }
  return res;
	}