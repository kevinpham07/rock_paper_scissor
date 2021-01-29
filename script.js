			let p = 0
			let c = 0
			let t = 0
			const options = ['rock', 'paper', 'scissor']

			function playRound(player, computer) {
				if (player === 'rock' && computer === 'rock') {
					console.log('TIE');
					return ++t;
					
				}
				if (player === 'rock' && computer === 'paper') {
					console.log('LOST');
					return ++c;
				}
				if (player === 'rock' && computer === 'scissor') {
					console.log('WIN');
					return ++p;
				}
				if (player === 'paper' && computer === 'rock') {
					console.log('WIN');
					return ++p;
				}
				if (player === 'paper' && computer === 'paper') {
					console.log('TIE');
					return ++t;
				}
				if (player === 'paper' && computer === 'scissor') {
					console.log('LOST');
					return ++c;
				}
				if (player === 'scissor' && computer === 'rock') {
					console.log('LOST');
					return ++c;
				}
				if (player === 'scissor' && computer === 'paper') {
					console.log('WIN');
					return ++p;
				}
				if (player === 'scissor' && computer === 'scissor') {
					console.log('TIE');
					return ++t;
				}

			}

			function game(player) {
				const random = options[Math.floor(Math.random() * options.length)];
				const choice = player.toLowerCase();
				playRound(choice, random);
				console.log(`Player score: ${p}, Computer sccore: ${c}, Ties: ${t}`);
				if (p === 3) {
					console.log('YOU WIN')
				}
				else if (c === 3) {
					console.log('YOU LOSE')
				}
				else game(prompt('Rock, paper, scissor'));

			}
			game(prompt('Rock, paper, scissor'));