var SongPic = new Array();
var SongPic1 = new Array();
var Link = new Array();
function createDynamicTable(tableID) {
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: "http://sriwebserver.cloudapp.net:90/bestsongs_p3.svc/bestsongslist",
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
                    
                    //out = out + "<tr> <td width=20% align=center> <iframe src='' name=" + loop +" id="+ loop +"></iframe> </td> <td> <table border=1 width=100%>";
                    
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


            //for (var i = 0; i < loop; i = i + 5) {
            //    var j = i + 1;
            //    var k = i + 2;
            //    var l = i + 3;
            //    var m = i + 4;
            //    out = out + "<tr>" +
            //        "<td><table><tr> <td width=20% align=center> <iframe src='' name=" + i + " id=" + i + "></iframe> </td><tr><td>" + MovieName[i] + "</td></tr><tr><td><a href='" + Link[i] + "'color='blue' target='" + i + "' onclick=\"checkclicked(" + i + "," + loop + ")\" >" + SongName[i] + "</a></td></tr></table></td>" +
            //        "<td><table><tr> <td width=20% align=center> <iframe src='' name=" + i + 1 + " id=" + j + "></iframe> </td><tr><td>" + MovieName[i + 1] + "</td></tr><tr><td><a href='" + Link[i + 1] + "' color='blue' target='" + i + 1 + "' onclick=\"checkclicked(" + i+1 + "," + loop + ")\" >" + SongName[i + 1] + "</a> </td></tr></table></td> " +
            //        "<td><table><tr> <td width=20% align=center> <iframe src='' name=" + i + 2 + " id=" + k + "></iframe> </td><tr><td>" + MovieName[i + 2] + "</td></tr><tr><td><a href='" + Link[i + 2] + "' color='blue' target='" + i + 2 + "' onclick=\"checkclicked(" + i+2 + "," + loop + ")\" >" + SongName[i + 2] + "</a></td></tr></table></td> " +
            //        "<td><table><tr> <td width=20% align=center> <iframe src='' name=" + i + 3 + " id=" + l + "></iframe> </td><tr><td>" + MovieName[i + 3] + "</td></tr><tr><td><a href='" + Link[i + 3] + "' color='blue' target='" + i + 3 + "' onclick=\"checkclicked(" + i+3 + "," + loop + ")\" >" + SongName[i + 3] + "</a></td></tr></table></td> " +
            //        "<td><table><tr> <td width=20% align=center> <iframe src='' name=" + i + 4 + " id=" + m + "></iframe> </td><tr><td>" + MovieName[i + 4] + "</td></tr><tr><td><a href='" + Link[i + 4] + "' color='blue'target='" + i + 4 + "' onclick=\"checkclicked(" + i+4 + "," + loop + ")\" >" + SongName[i + 4] + "</a></td></tr></table></td> </tr>";
            //}
            out = "";
            for (var i = 0; i < loop; i++)
            {                
                out = out + "<li style='margin:5px'><table>" +
                    "<tr><td><iframe name=" + i + " id=" + i + " allowfullscreen scrolling='no' onload=lazyload(" + i + ") frameborder=0></iframe></td></tr>" +
                    "<tr><td class='text-muted text-center'>" + SongName[i] + "</td><tr>"+
                        "</table></li>";                
                //console.log(out);
            }
            $("#dynamictablepage2").append(out);            
        },
        error: function (data, status, errorThrown) {
            alert(data);
            console.log(data);
        }
    });



    /// Sample learning code
    //var table = document.getElementById(tableID);

    //var rowCount = table.rows.length;
    //var row = table.insertRow(rowCount);
    
    //var cell1 = row.insertCell(0);
    //var element1 = document.createElement("input");
    //element1.type = "checkbox";
    //element1.name = "chkbox[]";
    //cell1.appendChild(element1);

    //var cell2 = row.insertCell(1);
    //cell2.innerHTML = rowCount + 1;

    //var cell3 = row.insertCell(2);
    //var element2 = document.createElement("input");
    //element2.type = "text";
    //element2.name = "txtbox[]";
    //cell3.appendChild(element2);

    //var sout;
    
    //for (var i = 0; i < 10; i += 1) {
    //    sout =  sout + "<tr>" +
    //        "<td width=20% align=center>" + "<iframe src='http://www.youtube.com/watch_popup?v=1cDoRqPnCXU'></iframe>" + "</td>" +
    //        "<td width=50%><table border=1 width=100%>" ;
    //    for (var j = 0; j < 5; j += 1) {
    //        sout = sout + "<tr><td>" + j + "</td></tr>";
    //    }
    //        sout = sout + "</table></td>" +
    //        "<td width=20%>" + i + "</td>" +
    //        "</tr>";
    //}
    //$("#dynamictable").append(sout);
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