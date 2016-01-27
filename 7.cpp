class Solution {
public:
    int reverse(int x) {
        stringstream ss;
        string str;
        ss << x;
        ss >> str;
        if (str[0] == '-') {
            if (str.size() % 2 == 1) {
                for (int i = 1; i < ((str.size() + 1) / 2); ++i) {
                    char temp = str[i];
                    str[i] = str[str.size() - i];
                    str[str.size() - i] = temp;
                }
            } else {
                for (int i = 1; i < (str.size() / 2); ++i) {
                    char temp = str[i];
                    str[i] = str[str.size() - i];
                    str[str.size() - i] = temp;
                }
            }
        } else {
            if (str.size() % 2 == 1) {
                for (int i = 0; i < (str.size() - 1) / 2; ++i) {
                    char temp = str[i];
                    str[i] = str[str.size() - 1 - i];
                    str[str.size() - 1 - i] = temp;
                }
            } else {
                for (int i = 0; i < str.size() / 2; ++i) {
                    char temp = str[i];
                    str[i] = str[str.size() - 1 - i];
                    str[str.size() - 1 - i] = temp;
                }
            }
        }
        auto result = atol(str.c_str());
        if(result>=2147483648||result<-2147483648)
            return 0;
        return result;
    }
};