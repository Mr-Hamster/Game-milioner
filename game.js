var life = 3;
var level = 1;
var bank = 0;
var m1 = 10;
var m2 = 5;
var m3 = 2;
var t = 0;
var t1 = 1;
var n = 5;
var num;
var success = function(m,t)
{	
	bank += (m*level) + t;
	level++;
	n *= 2;	
}
var game = function()
		{
			while(life > 0)
			{
			console.log(num = Math.floor(Math.random() * n + 1));
			var num1 = +prompt("Your bank: "+ bank +"$\nGuess the number from 0 to "+ n + "\nРівень: "+ level+ "\nYour lifes: " + life + "\nEnter the number:",'');
				
					if (num1 == num) 
					{
						if (life == 3) 
						{
							success(m1,t);
							question = confirm("Do you want to continue?");
							if (question) 
							{
								game(life,level,bank,n);
							}
							else
							{
								alert("Дякую за гру");
								console.log("Your bank" + bank + "$");
								break;
							}
						}
						else if(life == 2)
						{
							success(m2,t);
							question = confirm("Do you want to continue?");
							if (question) 
							{
								game(life,level,bank,n);
							}
							else
							{
								alert("Thank for game)");
								console.log("Your bank" + bank + "$");
								break;
							}
						}
						else
						{
							question = confirm("Do you want to continue?");
							success(m3,t1);
							if (question) 
							{
								game(life,level,bank,n);
							}
							else
							{
								alert("Thanks for game)");
								break;
							}
						}
					}
					else
					{
						life--;
					}
				
			}
			alert("You win: " + bank + "$");
			alert("Thanks for game)");
		}

var question = confirm("Do you want to play a game?");
if(question)
{
	game();		
}
else
{
	console.log("You'll not a milioner");
}






