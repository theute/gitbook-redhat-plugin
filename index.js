module.exports = {
    // Hook process during build
    hooks: {
         
	"page:before": function(page) {
           // Replace {token} with {{token}}
           page.content = page.content.replace(/{[^{}]+}/g, function(key){
             return "{{book."+key.replace(/[{}]+/g, "")+"}}";
           });
           // Replace image::Image.png with image::images/Image.png
           page.content = page.content.replace(/image::/g, "image::images/");
           return page;
        }

    }
};
