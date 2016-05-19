$(document).ready(function(){
    $("form").on("submit", function(){
        var title = $("#title").val();
        var content = tinymce.activeEditor.getContent();
        var author = "Ian";
        var date = new Date().toDateString();
        var blogPost = {
            title: title,
            content: content,
            date: date,
        };
        
        console.log(blogPost);
    })
})