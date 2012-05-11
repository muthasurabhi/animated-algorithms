var Arr=["5","3","2","4","1"];
var posi=["0","0","0","0","0","0"];
pass=1;
iLength=5;
j=0;
i=0;

function SelectionSort(){
    document.sortForm.passbtn.value="pass "+pass;
    if(pass>iLength)
    {
	document.sortForm.passbtn.value="Sorted"
	return;
    }
		
    iSmallest = i;
    for (j = i + 1; j < iLength; j++) 
    {
        if (Arr[iSmallest] > Arr[j])
		{
            iSmallest = j;
        }
        
        // Put the smallest remaining element in the ith position
        var  iSwap = Arr[iSmallest];
        Arr[iSmallest]  = Arr[i];
        Arr[i]  = iSwap;
    }
    alert(Arr[i]);
    
   //animate(iSmallest+1,Arr[i]);
    setposi();
    i++;
    pass++;
}

	function setposi(){
			var manager=new jsAnimManager();
			
			obj = document.getElementById("1");  
			manager.registerPosition("1"); 
			obj.setPosition(0,0);  
			var anim = manager.createAnimObject("1");  
			anim.add({property: Prop.position, to: new Pos(150,60),duration: 2}); 
		}	
	function animate(id,no1){
		alert(id);
	}