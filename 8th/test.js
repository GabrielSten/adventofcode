let array = ['tre'];



sortString('fbcad')

function sortString(x) {
    x = x.split('');
    x.sort();
    
    x = x.reduce(function(pre, next) {
        return pre + '' + next;
      });
    console.log(x)
}
