app.filter('labelCase', function(){
    return function(input){
        input = input.replace(/([A-Z])/g, ' $1');
        return input[0].toUpperCase() + input.slice(1);
    }
});

app.filter('keyFilter', function(){
    return function(obj, query){
        var res = {};
        angular.forEach(obj, function(val, key){
            if (key !== query) {
                res[key] = val;
            }
        });
        return res;
    }
});

app.filter('camelCase', function(){
    return function(input){
        return input.toLowerCase().replace(/ (\w)/g, function(match, letter){
            return letter.toUpperCase();
        });
    };
});
