	var Arr=["5","3","2","4","1"];
	var posi=["0","0","0","0","0","0"];
	pass=1;
	index=4;
	j=0;
	
	function setposi()
		{
			var manager=new jsAnimManager();
			
			obj = document.getElementById("1");  
			manager.registerPosition("1"); 
			obj.setPosition(150,60);  
			var anim = manager.createAnimObject("1");  
			anim.add({property: Prop.position, to: new Pos(150,60),duration: 2}); 
			
			obj = document.getElementById("2");  
			manager.registerPosition("2"); 
			obj.setPosition(150,145);  
			var anim = manager.createAnimObject("2");  
			anim.add({property: Prop.position, to: new Pos(150,145),duration: 2}); 
			
			obj = document.getElementById("3");  
			manager.registerPosition("3"); 
			obj.setPosition(150,200);  
			var anim = manager.createAnimObject("3");  
			anim.add({property: Prop.position, to: new Pos(150,200),duration: 2}); 
			
			obj = document.getElementById("4");  
			manager.registerPosition("4"); 
			obj.setPosition(150,265);  
			var anim = manager.createAnimObject("4");  
			anim.add({property: Prop.position, to: new Pos(150,265),duration: 2}); 
			
			obj = document.getElementById("5");  
			manager.registerPosition("5"); 
			obj.setPosition(150,320);  
			var anim = manager.createAnimObject("5");  
			anim.add({property: Prop.position, to: new Pos(150,320),duration: 2}); 
			
			posi[1]=60;
			posi[2]=145;
			posi[3]=200;
			posi[4]=265;
			posi[5]=320;
			
		}	