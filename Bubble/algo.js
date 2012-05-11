	var Arr=["5","3","2","4","1"];
	var posi=["0","0","0","0","0","0"];
	pass=1;
	index=4;
	j=0;
		
			posi[1]=60;
			posi[2]=145;
			posi[3]=200;
			posi[4]=265;
			posi[5]=320;
			
	function BubbleSort(){
			document.sortForm.passbtn.value="pass "+pass;
				if(pass>index)
				{
					document.sortForm.passbtn.value="Sorted"
					return;
				}
					if(Number(Arr[j]) && Number(Arr[j+1]))
					{				
						Arr[j]=parseInt(Arr[j])
						Arr[j+1]=parseInt(Arr[j+1])
					}	
					
					if(Arr[j]>Arr[j+1])
					{
					
							animate(j+1,j+2,Arr[j],Arr[j+1]);
							change_id(j+1,j+2);
							temp=Arr[j]
							Arr[j]=Arr[j+1]
							Arr[j+1]=temp							
					}
				
				j=j+1;
			
			if(j==index-pass+1)
			{
				j=0;
				pass++;
			}
		
		}
	
		function animate(old_id,new_id,no1,no2)
		{
		
			var manager=new jsAnimManager();
			var new_posi;
			var old_posi;
			old_posi=posi[old_id];
			new_posi=posi[new_id];

			obj = document.getElementById(old_id);  

			manager.registerPosition(old_id);  
			
			obj.setPosition(0,(old_posi));  
		
			var anim = manager.createAnimObject(old_id);  
		
			anim.add({property: Prop.position, to: new Pos(-150,old_posi),duration: 500}); 
			
			anim.add({property: Prop.position, to: new Pos(-150,new_posi-(Math.abs(no2-no1)*10)),duration: 500}); 
			
			anim.add({property: Prop.position, to: new Pos(0,new_posi-(Math.abs(no2-no1)*10)),duration: 500}); 	
			
			manager.kill(old_id);
			
			
			obj = document.getElementById(new_id);  

			manager.registerPosition(new_id);  
			
			obj.setPosition(0,(new_posi));  
		
			var anim = manager.createAnimObject(new_id);  
		
			anim.add({property: Prop.position, to: new Pos(150,new_posi),duration: 500}); 
		
			anim.add({property: Prop.position, to: new Pos(150,old_posi-(Math.abs(no2-no1)*10)),duration: 500}); 

			anim.add({property: Prop.position, to: new Pos(0,old_posi-(Math.abs(no2-no1)*10)),duration: 500}); 
			
			manager.kill(new_id);
		
			posi[old_id]=old_posi-(Math.abs(no2-no1)*10);
			posi[new_id]=new_posi-(Math.abs(no2-no1)*10);
	}
		
		function change_id(old_id,new_id)
		{
			var div_node;
			var temp_id="0";

			div_node = document.getElementById(old_id);
			div_node.id = temp_id;
	
			div_node = document.getElementById(new_id);
			div_node.id = old_id;
			//alert(div_node.id);

			div_node = document.getElementById(temp_id);
			div_node.id = new_id;
			//alert(div_node.id);
		}