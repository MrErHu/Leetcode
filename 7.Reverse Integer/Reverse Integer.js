/**
 * Created by MrErHu on 2017/1/24.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var negtive = false;
    var POSTIVE_MAX  = Math.pow(2,31) -1 ;
    var NEGTIVE_MAX = - Math.pow(2,31);
    var y = 0;

    if( x < 0 ){
        negtive= true;
        x = -x;
    }

    while (x > 0){
        y = y*10 + x%10;
        x = Math.floor(x/10);
    }

    y = negtive ? -y: y;

    return (y>POSTIVE_MAX || y<NEGTIVE_MAX) ? 0 : y;

};