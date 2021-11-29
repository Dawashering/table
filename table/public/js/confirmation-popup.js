let node, parent;
$(()=>{

    $('td').on('click', (event) => {
        node = event.target;
        var res = $(node).parent()[0].id;
        //console.log($($(node).parent()[0]).children()[0].innerText);
        var col = $('th')[parseInt(node.className)+1].innerText;
        document.querySelector("input[name='equipmentName']").value = $($(node).parent()[0]).children()[0].innerText;
        document.querySelector("input[name='timeValue']").value = col;
        var tddate = document.getElementById("dateControl").value;
        document.getElementById("dateValue").innerHTML = tddate ;

        $('.modal').toggleClass("show-modal");
        
        
    });

    $('#btn-yes').on('click', (event) => {
        $('.modal').toggleClass("show-modal");
        $(node).addClass("btn-red");

        console.log("Ordered Equipment " + $(node).parent()[0].id + " on " + $('th')[parseInt(node.className)+1].innerText);
        var equipmentnum = ($(node).parent()[0].id);
        var time = ($('th')[parseInt(node.className)+1].innerText);

        var rowval= $($(node).parent()[0]).children()[0].innerText;
        var colval = $('th')[parseInt(node.className)+1].innerText;
        var dateval = document.getElementById("dateControl").value;
        
        var f = JSON.stringify({equipmentnum: rowval, time: colval, date:dateval});
        
        $.post("/auth/data",
            {
                date: f
            },
            function(data,status){
                alert("Data: " + data + "\nStatus: "+ status);
            });
            
        $('#test').attr('class'); 

    });

    $('#btn-no').on('click', () => {
        $('.modal').toggleClass("show-modal");
        $(node).removeClass("btn-red");

        console.log("Cancled Equipment " + $(node).parent()[0].id + " on " + $('th')[parseInt(node.className)+1].innerText);

        var equipmentnum = $($(node).parent()[0]).children()[0].innerText;
        var time = ($('th')[parseInt(node.className)+1].innerText);
        var dateval = document.getElementById("dateControl").value;

        var f = JSON.stringify({equipmentnum: equipmentnum, time: time, date:dateval});

        $.post("/auth/delete",
            {
                date: f
            },
            function(data,status){
                alert("Data: " + data + "\nStatus: "+ status);
            });
            

    });

});	


