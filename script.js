			let p = 0
			let c = 0
			let t = 0

			const con = document.querySelector('#console');

			const resultsT = () => {
				const para = document.createElement('p');
				para.textContent = 'TIE';
				con.appendChild(para);
			}
			const resultsL = () => {
				const para = document.createElement('p');
				para.textContent = 'LOST';
				con.appendChild(para);
			}
			const resultsW = () => {
				const para = document.createElement('p');
				para.textContent = 'WIN';
				con.appendChild(para);
			}

			function playRound(player, computer) {
				if (player === 'rock' && computer === 'rock') {
					resultsT()
					return ++t;
					
				}
				if (player === 'rock' && computer === 'paper') {
					resultsL()
					return ++c;
				}
				if (player === 'rock' && computer === 'scissor') {
					resultsW();
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

			const para = document.getElementById('scoreBoard');
			const options = ['rock', 'paper', 'scissor']
			
			const reset = () => {
				p = 0;
				c = 0;
				t = 0;
			}
			const win = () => {
				let text = document.createElement('p');
				text.textContent = 'YOU WIN';
				con.appendChild(text);
			}
			const lose = () => {
				let text = document.createElement('p');
				text.textContent = 'YOU LOSE';
				con.appendChild(text);
			}

			function game(player) {
				const random = options[Math.floor(Math.random() * options.length)];

				playRound(player, random);

				para.textContent = `Player score: ${p}, Computer score: ${c}, Ties: ${t}`;

				if (p === 3) {
					win();
					reset();
				}
				if (c === 3) {
					lose();
					reset();
				}

				return

			}

			const buttons = document.querySelectorAll('button');
			
			buttons.forEach(button => {

				button.addEventListener('click', () => {game(button.id)});

			})

			