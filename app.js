document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board')
    const tL = document.createElement('BUTTON')
    const tM = document.createElement('BUTTON')
    const tR = document.createElement('BUTTON')

    const mL = document.createElement('BUTTON')
    const mM = document.createElement('BUTTON')
    const mR = document.createElement('BUTTON')

    const bL = document.createElement('BUTTON')
    const bM = document.createElement('BUTTON')
    const bR = document.createElement('BUTTON')
    
    let isGameOver = false

    

    
    let tRow = []
    let mRow = []
    let bRow = []

    let lCol = []
    let mCol = []
    let rCol = []

    let tLDiag = []
    let bLDiag = []
    
    let count = 0

    let createtL = function () {
        board.appendChild(tL)
        tL.classList.add('N1')
        tL.style.left = '15px'
        tL.style.bottom = '225px'
        tL.style.opacity = "0"
        tL.onclick = function() {
            count ++;
            console.log(count)
            if (count % 2 !== 0 & count !== 0) {
                tL.classList.remove('N1')
                tL.classList.add('X1')
                tL.style.opacity = "1"
                tRow.push('X')
                lCol.push('X')
                tLDiag.push('X')
                if ((tRow.filter(x => x == 'X').length === 3) && tRow.length === 3) {
                    gameOver('X wins!')
                }
                else if ((lCol.filter(x => x == 'X').length === 3) && lCol.length === 3) {
                    gameOver('X wins!')
                }
                else if ((tLDiag.filter(x => x == 'X').length === 3) && tLDiag.length === 3) {
                    gameOver('X wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            } else if (count % 2 === 0 & count !== 0) {
                tL.classList.remove('N1')
                tL.classList.add('O1')
                tL.style.opacity = "1"
                tRow.push('O')
                lCol.push('O')
                tLDiag.push('O')
                if ((tRow.filter(x => x == 'O').length === 3) && tRow.length === 3){
                    gameOver('O wins!')
                }
                else if ((lCol.filter(x => x == 'O').length === 3) && lCol.length === 3) {
                    gameOver('O wins!')
                }
                else if ((tLDiag.filter(x => x == 'O').length === 3) && tLDiag.length === 3) {
                    gameOver('O wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            }
            
        
        }
        
    }

    let createtM = function () {
        board.appendChild(tM)
        tM.classList.add('N2')
        tM.style.left = '125px'
        tM.style.bottom = '225px'
        tM.style.opacity = "0"
        tM.onclick = function() {
            count ++;
            console.log(count)
            if (count % 2 !== 0 & count !==0) {
                tM.classList.remove('N2')
                tM.classList.add('X2')
                tM.style.opacity = "1"
                tRow.push('X')
                mCol.push('X')
                if ((tRow.filter(x => x == 'X').length === 3) && tRow.length === 3) {
                    gameOver('X wins!')
                }
                else if ((mCol.filter(x => x == 'X').length === 3) && mCol.length === 3) {
                    gameOver('X wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            } else if (count % 2 === 0 & count !== 0) {
                tM.classList.remove('N2')
                tM.classList.add('O2')
                tM.style.opacity = "1"
                tRow.push('O')
                mCol.push('O')
                if ((tRow.filter(x => x == 'O').length === 3) && tRow.length === 3) {
                    gameOver('O wins!')
                }
                else if ((mCol.filter(x => x == 'O').length === 3) && mCol.length === 3) {
                    gameOver('O wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            }
            
        
        }
        
    }

    let createtR = function () {
        board.appendChild(tR)
        tR.classList.add('N3')
        tR.style.left = '225px'
        tR.style.bottom = '225px'
        tR.style.opacity = "0"
        tR.onclick = function() {
            count ++;
            console.log(count)
            if (count % 2 !== 0 & count !==0) {
                tR.classList.remove('N3')
                tR.classList.add('X3')
                tR.style.opacity = "1"
                tRow.push('X')
                rCol.push('X')
                bLDiag.push('X')
                if ((tRow.filter(x => x == 'X').length === 3) && tRow.length === 3) {
                    gameOver('X wins!')
                }
                else if ((rCol.filter(x => x == 'X').length === 3) && rCol.length === 3) {
                    gameOver('X wins!')
                }
                else if ((bLDiag.filter(x => x == 'X').length === 3) && bLDiag.length === 3) {
                    gameOver('X wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            } else if (count % 2 === 0 & count !== 0) {
                tR.classList.remove('N3')
                tR.classList.add('O3')
                tR.style.opacity = "1"
                tRow.push('O')
                rCol.push('O')
                bLDiag.push('O')
                if ((tRow.filter(x => x == 'O').length === 3) && tRow.length === 3) {
                    gameOver('O wins!')
                }
                else if ((rCol.filter(x => x == 'O').length === 3) && rCol.length === 3) {
                    gameOver('O wins!')
                }
                else if ((bLDiag.filter(x => x == 'O').length === 3) && bLDiag.length === 3) {
                    gameOver('O wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            }
            
        
        }
        
    }

    let createmL = function () {
        board.appendChild(mL)
        mL.classList.add('N4')
        mL.style.left = '15px'
        mL.style.bottom = '125px'
        mL.style.opacity = "0"
        mL.onclick = function() {
            count ++;
            console.log(count)
            if (count % 2 !== 0 & count !==0) {
                mL.classList.remove('N4')
                mL.classList.add('X4')
                mL.style.opacity = "1"
                mRow.push('X')
                lCol.push('X')
                if ((mRow.filter(x => x == 'X').length === 3) && mRow.length === 3) {
                    gameOver('X wins!')
                }
                else if ((lCol.filter(x => x == 'X').length === 3) && lCol.length === 3) {
                    gameOver('X wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            } else if (count % 2 === 0 & count !== 0) {
                mL.classList.remove('N4')
                mL.classList.add('O4')
                mL.style.opacity = "1"
                mRow.push('O')
                lCol.push('O')
                if ((mRow.filter(x => x == 'O').length === 3) && mRow.length === 3) {
                    gameOver('O wins!')
                }
                else if ((lCol.filter(x => x == 'O').length === 3) && lCol.length === 3) {
                    gameOver('O wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            }
            
        
        }
        
    }

    let createmM = function () {
        board.appendChild(mM)
        mM.classList.add('N5')
        mM.style.left = '125px'
        mM.style.bottom = '125px'
        mM.style.opacity = "0"
        mM.onclick = function() {
            count ++;
            console.log(count)
            if (count % 2 !== 0 & count !==0) {
                mM.classList.remove('N5')
                mM.classList.add('X5')
                mM.style.opacity = "1"
                mRow.push('X')
                mCol.push('X')
                tLDiag.push('X')
                bLDiag.push('X')
                if ((mRow.filter(x => x == 'X').length === 3) && mRow.length === 3) {
                    gameOver('X wins!')
                }
                else if ((mCol.filter(x => x == 'X').length === 3) && mCol.length === 3) {
                    gameOver('X wins!')
                }
                else if ((tLDiag.filter(x => x == 'X').length === 3) && tLDiag.length === 3) {
                    gameOver('X wins!')
                }
                else if ((bLDiag.filter(x => x == 'X').length === 3) && bLDiag.length === 3) {
                    gameOver('X wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            } else if (count % 2 === 0 & count !== 0) {
                mM.classList.remove('N5')
                mM.classList.add('O5')
                mM.style.opacity = "1"
                mRow.push('O')
                mCol.push('O')
                tLDiag.push('O')
                bLDiag.push('O')
                if ((mRow.filter(x => x == 'O').length === 3) && mRow.length === 3) {
                    gameOver('O wins!')
                }
                else if ((mCol.filter(x => x == 'O').length === 3) && mCol.length === 3) {
                    gameOver('O wins!')
                }
                else if ((tLDiag.filter(x => x == 'O').length === 3) && tLDiag.length === 3) {
                    gameOver('O wins!')
                }
                else if ((bLDiag.filter(x => x == 'O').length === 3) && bLDiag.length === 3) {
                    gameOver('O wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            }
            
        
        }
        
    }

    let createmR = function () {
        board.appendChild(mR)
        mR.classList.add('N6')
        mR.style.left = '225px'
        mR.style.bottom = '125px'
        mR.style.opacity = "0"
        mR.onclick = function() {
            count ++;
            console.log(count)
            if (count % 2 !== 0 & count !==0) {
                mR.classList.remove('N6')
                mR.classList.add('X6')
                mR.style.opacity = "1"
                mRow.push('X')
                rCol.push('X')
                if ((mRow.filter(x => x == 'X').length === 3) && mRow.length === 3) {
                    gameOver('X wins!')
                }
                else if ((rCol.filter(x => x == 'X').length === 3) && rCol.length === 3) {
                    gameOver('X wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            } else if (count % 2 === 0 & count !== 0) {
                mR.classList.remove('N6')
                mR.classList.add('O6')
                mR.style.opacity = "1"
                mRow.push('O')
                rCol.push('O')
                if ((mRow.filter(x => x == 'O').length === 3) && mRow.length === 3) {
                    gameOver('O wins!')
                }
                else if ((rCol.filter(x => x == 'O').length === 3) && rCol.length === 3) {
                    gameOver('O wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            }
            
        
        }
        
    }

    let createbL = function () {
        board.appendChild(bL)
        bL.classList.add('N7')
        bL.style.left = '15px'
        bL.style.bottom = '15px'
        bL.style.opacity = "0"
        bL.onclick = function() {
            count ++;
            console.log(count)
            if (count % 2 !== 0 & count !==0) {
                bL.classList.remove('N7')
                bL.classList.add('X7')
                bL.style.opacity = "1"
                bRow.push('X')
                lCol.push('X')
                bLDiag.push('X')
                if ((bRow.filter(x => x == 'X').length === 3) && bRow.length === 3) {
                    gameOver('X wins!')
                }
                else if ((lCol.filter(x => x == 'X').length === 3) && lCol.length === 3) {
                    gameOver('X wins!')
                }
                else if ((bLDiag.filter(x => x == 'X').length === 3) && bLDiag.length === 3) {
                    gameOver('X wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            } else if (count % 2 === 0 & count !== 0) {
                bL.classList.remove('N7')
                bL.classList.add('O7')
                bL.style.opacity = "1"
                bRow.push('O')
                lCol.push('O')
                bLDiag.push('O')
                if ((mRow.filter(x => x == 'O').length === 3) && mRow.length === 3) {
                    gameOver('O wins!')
                }
                else if ((lCol.filter(x => x == 'O').length === 3) && lCol.length === 3) {
                    gameOver('O wins!')
                }
                else if ((bLDiag.filter(x => x == 'O').length === 3) && bLDiag.length === 3) {
                    gameOver('O wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            }
            
        
        }
        
    }

    let createbM = function () {
        board.appendChild(bM)
        bM.classList.add('N8')
        bM.style.left = '125px'
        bM.style.bottom = '15px'
        bM.style.opacity = "0"
        bM.onclick = function() {
            count ++;
            console.log(count)
            if (count % 2 !== 0 & count !==0) {
                bM.classList.remove('N8')
                bM.classList.add('X8')
                bM.style.opacity = "1"
                bRow.push('X')
                mCol.push('X')
                if ((bRow.filter(x => x == 'X').length === 3) && bRow.length === 3) {
                    gameOver('X wins!')
                }
                else if ((mCol.filter(x => x == 'X').length === 3) && mCol.length === 3) {
                    gameOver('X wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            } else if (count % 2 === 0 & count !== 0) {
                bM.classList.remove('N8')
                bM.classList.add('O8')
                bM.style.opacity = "1"
                bRow.push('O')
                mCol.push('O')
                if ((bRow.filter(x => x == 'O').length === 3) && bRow.length === 3) {
                    gameOver('O wins!')
                }
                else if ((mCol.filter(x => x == 'O').length === 3) && mCol.length === 3) {
                    gameOver('O wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            }
            
        
        }
        
    }

    let createbR = function () {
        board.appendChild(bR)
        bR.classList.add('N9')
        bR.style.left = '225px'
        bR.style.bottom = '15px'
        bR.style.opacity = "0"
        bR.onclick = function() {
            count ++;
            console.log(count)
            if (count % 2 !== 0 & count !==0) {
                bR.classList.remove('N9')
                bR.classList.add('X9')
                bR.style.opacity = "1"
                bRow.push('X')
                rCol.push('X')
                tLDiag.push('X')
                if ((bRow.filter(x => x == 'X').length === 3) && bRow.length === 3) {
                    gameOver('X wins!')
                }
                else if ((rCol.filter(x => x == 'X').length === 3) && rCol.length === 3) {
                    gameOver('X wins!')
                }
                else if ((tLDiag.filter(x => x == 'X').length === 3) && tLDiag.length === 3) {
                    gameOver('X wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            } else if (count % 2 === 0 & count !== 0) {
                bR.classList.remove('N9')
                bR.classList.add('O9')
                bR.style.opacity = "1"
                bRow.push('O')
                rCol.push('O')
                tLDiag.push('O')
                if ((bRow.filter(x => x == 'O').length === 3) && bRow.length === 3) {
                    gameOver('O wins!')
                }
                else if ((rCol.filter(x => x == 'O').length === 3) && rCol.length === 3) {
                    gameOver('O wins!')
                }
                else if ((tLDiag.filter(x => x == 'O').length === 3) && tLDiag.length === 3) {
                    gameOver('O wins!')
                }
                else if (count === 9) {
                    gameOver('Draw!')
                }
            }
            
        
        }
        
    }

    
    
    function gameStart() {
        if (!isGameOver) {
            createtL()
            createtM()
            createtR()

            createmL()
            createmM()
            createmR()

            createbL()
            createbM()
            createbR()
        }

    }

    

    function gameOver(msg) {
        isGameOver = true
        console.log('Game Over')
        while (board.firstChild) {
            board.removeChild(board.firstChild)
        }
        
        
        board.innerHTML = 'Game Over!\n' + msg  
        

        let button = document.createElement("BUTTON");
        button.innerHTML = "Try Again?";

        // 2. Append somewhere
        board.appendChild(button);

        // 3. Add event handler
        button.addEventListener ("click", function() {

            isGameOver = false
            board.removeChild(button)
            board.innerHTML = ''
            count = 0

            tRow = []
            mRow = []
            bRow = []

            lCol = []
            mCol = []
            rCol = []

            tLDiag = []
            bLDiag = []

            tL.classList.remove(...tL.classList);
            tM.classList.remove(...tM.classList);
            tR.classList.remove(...tR.classList);

            mL.classList.remove(...mL.classList);
            mM.classList.remove(...mM.classList);
            mR.classList.remove(...mR.classList);

            bL.classList.remove(...bL.classList);
            bM.classList.remove(...bM.classList);
            bR.classList.remove(...bR.classList);

            gameStart();
            
            
            
        });
    }

    
    gameStart()


  

    
})