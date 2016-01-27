class Solution {
public:
    bool isAnagram(string s, string t) {
        int s_array[26]={0};
        int t_array[26]={0};
        int i;
        for(i=0;i<s.size();i++)
            ++s_array[s[i]-97];
        for(i=0;i<t.size();i++)
            ++t_array[t[i]-97];
        for(i=0;i<26;i++)
            if(s_array[i]!=t_array[i])
                return false;
        return true;
    }
};