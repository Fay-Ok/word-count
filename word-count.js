function Words() {

    Words.prototype.count = function (wordCount) {
        var dictionary = {};
        var result = wordCount.toLowerCase().trim().replace(/((\s)+|\n|\t|\s)/g, " ").split(" ");

        result.map(function(word){
            if(dictionary.hasOwnProperty(word)){
                dictionary[word] = dictionary[word] + 1;
            }else{
                dictionary[word] = 1;
            }
           
        });
        return dictionary;
    };
};

module.exports = Words;