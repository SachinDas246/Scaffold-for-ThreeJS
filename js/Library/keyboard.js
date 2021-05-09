var KeyArray=[];
var KeyIsDownArray=[];
var KeyIsUpArray=[];

var DowncharIndex=[]
var UpcharIndex=[]
var KeyDownFunctions=[]
var KeyUpFunctions=[]


document.addEventListener('keydown', function(eventdown) {    
    KeyIsDownArray=[];
    KeyIsUpArray=[];
    if(eventdown.repeat)
    {
        return;
    }
    if(KeyArray.indexOf(eventdown.key) ==-1)
    {
        KeyArray.push(eventdown.key)
        
    }
    if(KeyIsDownArray.indexOf(eventdown.key) ==-1)
    {
        KeyIsDownArray.push(eventdown.key)
            
    }
    si =  DowncharIndex.indexOf(eventdown.key)
    if(si!=-1)
    {   tps = KeyDownFunctions.length-1
        while(tps>=0)
        {
            KeyDownFunctions[si][tps]()
            tps--
        }
    }   
});
document.addEventListener('keyup', function(eventup) {
    KeyIsDownArray=[];
    KeyIsUpArray=[];
    i=KeyArray.indexOf(eventup.key)
    if( i!=-1)
    {
        KeyArray.splice(i,1);                   
    }
    if(KeyIsUpArray.indexOf(eventup.key) ==-1)
    {
        KeyIsUpArray.push(eventup.key)    
    }
    
   

    si =  UpcharIndex.indexOf(eventup.key)
    if(si!=-1)
    {   tps = KeyUpFunctions.length-1
        while(tps>=0)
        {
            KeyUpFunctions[si][tps]()
            tps--
        }
    }  


});

function KeyBoardUpdate$()
{
    KeyIsDownArray=[];
    KeyIsUpArray=[];
}
Add_to_Logic_Function(KeyBoardUpdate$);

function Is_on_Hold(h_char)
{
    if(KeyArray.indexOf(h_char) ==-1)
    {
        return false
    }else{
        return true
    }
}

//these are not quick enough
function Is_on_Down(d_char)
{
    if(KeyIsDownArray.indexOf(d_char) ==-1)
    {
        return false
    }else{
        return true
    }

}

function Is_on_Up(u_char)
{
    if(KeyIsUpArray.indexOf(u_char) ==-1)
    {
        return false
    }else{
        return true
    }

}


function Add_to_DownScan(char,fun)
{   indx = DowncharIndex.indexOf(char)
    if( indx ==-1)
    {
        DowncharIndex.push(char);
        KeyDownFunctions.push([fun])
    }else{
        fin = KeyDownFunctions[indx].indexOf(fun)
        if(fin==-1)
        {
            KeyDownFunctions[indx].push(fun)
        }else{
            console.warn("Function named +fun+ Already exist in Key Down!")
        }
        
    }  
     
}
function Remove_from_DownScan(char,fun)
{
    indx = DowncharIndex.indexOf(char)
    if( indx ==-1)
    {
        console.warn("No "+ char +" exist to remove!")
    }else{
        fin = KeyDownFunctions[indx].indexOf(fun)
        if(fin == -1)
        {
            console.warn("No "+ fun +" exist to remove!")
        }else{
            KeyDownFunctions[indx].splice(fin,1);
            if(KeyDownFunctions[indx].length == 0)
            {
                DowncharIndex.splice(indx,1);
            }
        }        
    } 
    
}
function Add_to_UpScan(char,fun)
{
    indx = UpcharIndex.indexOf(char)
    if( indx ==-1)
    {
        UpcharIndex.push(char);
        KeyUpFunctions.push([fun])
    }else{
        fin = KeyUpFunctions[indx].indexOf(fun)
        if(fin==-1)
        {
            KeyUpFunctions[indx].push(fun)
        }else{
            console.warn("Function named +fun+ Already exist in Keyup!")
        }
        
    }   
    var UpcharIndex=[]
    var KeyUpFunctions=[]
    
}
function Remove_from_UpScan(char,fun)
{
    indx = UpcharIndex.indexOf(char)
    if( indx ==-1)
    {
        console.warn("No "+ char +" exist to remove!")
    }else{
        fin = KeyUpFunctions[indx].indexOf(fun)
        if(fin == -1)
        {
            console.warn("No "+ fun +" exist to remove!")
        }else{
            KeyUpFunctions[indx].splice(fin,1);
            if(KeyUpFunctions[indx].length == 0)
            {
                UpcharIndex.splice(indx,1);
            }
        }        
    }

}