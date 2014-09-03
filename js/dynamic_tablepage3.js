var SongPic = new Array();
var SongPic1 = new Array();
var Link = new Array();
function createDynamicTable(tableID) {
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: "http://sriwebserver.cloudapp.net:90/BestSongs_English_p4.svc/bestsongslist",
        async: false,
        success: function (xml1) {
            var loop = 0;
            var length = $(xml1).find('bestsongs').length;
            var out;
            var ActedBy = new Array();
            var Id = new Array();
            var MovieName = new Array();
            var SongName = new Array();
            //var Link = new Array();
            var resp = $(xml1).find('bestsongs').each(
                function () {            
                    ActedBy[loop] = $(this).find('ActedBy').text();                    
                    console.log(ActedBy[loop]);
                    Id[loop] = $(this).find('Id').text();
                    console.log(Id[loop]);
                    MovieName[loop] = $(this).find('MovieName').text();
                    console.log(MovieName[loop]);
                    SongName[loop] = $(this).find('SongName').text();                                       
                    console.log(SongName[loop]);
                    Link[loop] = $(this).find('Link').text();
                    console.log(Link[loop]);
                    SongPic[loop] = Link[loop].replace('?autoplay=1', '?rel=0&autohide=1&showinfo=0&frameborder=0&allowfullscreen');
                    if (Link[loop].search('youtube')!=-1) {
                        var songPic1 = Link[loop].replace('www.youtube.com/embed/', 'img.youtube.com/vi/');
                        SongPic1[loop] = songPic1.replace('?autoplay=1', '/mqdefault.jpg');
                    }
                    else if (Link[loop].search('dailymotion')!=-1)
                    {
                        var songPic1 = Link[loop].replace('/embed/', '/thumbnail/');
                        SongPic1[loop] = songPic1.replace('?autoplay=1', '');                        
                    }
                    console.log(SongPic1[loop]);
                    //console.log(out);
                    loop = loop + 1;
                });
            
            out = "";
            for (var i = 0; i < loop; i++)
            {                
                out = out + "<li style='margin:5px'><table>" +
                    "<tr><td><iframe name=" + i + " id=" + i + " allowfullscreen scrolling='no' onload=lazyload(" + i + ") frameborder=0></iframe></td></tr>" +
                    "<tr><td class='text-muted text-center'>" + SongName[i] + "</td><tr>"+
                        "</table></li>";                
                //console.log(out);
            }
            $("#dynamictablepage3").append(out);            
        },
        error: function (data, status, errorThrown) {
            alert(data);
            console.log(data);
        }
    });
}

function lazyload(i)
{
    //console.log("Lazyload: " + i + " " + SongPic1[i]);
    $("#" + i + "").contents().find('body').html('<img src=' + SongPic1[i] + ' height=100% width=100%/>');
    document.getElementById(i).contentWindow.document.body.onclick = function () {
        console.log(Link[i]);
        $('#' + i + '').attr('src', Link[i]);        
    }
}


function checkclicked(loop, length) {
    //alert("link clicked " + loop +" "+ length);
    for (var i = 0; i < length; i++) {
        if (i != loop) {
            console.log(i);
            $('#' + i + '').attr('src', "");
            //$('#' + i + '').attr('src', SongPic[i]);
        }
    }
}