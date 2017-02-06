module.exports = {
    // Hook process during build
    hooks: {
         
	"page:before": function(page) {
        
           page.content = page.content.replace(/{[^{}]+}/g, function(key){
             return "{{book."+key.replace(/[{}]+/g, "")+"}}";
           });
           console.log(page.content);
           return page;
        }

    }
};
