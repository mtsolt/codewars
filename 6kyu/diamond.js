// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n){
    let diam = []
    let ast = []
    let counter = 1
    let diamonds = []
    if(n % 2 === 0 || n < 0) {
        return null
    } else {
        for(let i=0; i < n; i++) {
            if (i <= n / 2){
                ast.push(i + counter)
                counter++
            } else {
                ast.push(ast[ast.length - 1] -2)
            }
        }
        let num = Math.max(...ast)

        ast.map(item => {
            if(item < num) {
                let spaces = (num - item) / 2
                for(let i=0; i<spaces; i++){
                    diamonds.push(' ')
                }
                for(let i=0; i<item; i++){
                    diamonds.push('*')
                }
                diamonds.push('\n')
            } else {
                for(let i=0; i<item; i++){
                    diamonds.push('*')
                }
                diamonds.push('\n')
        }})
            // console.log(diamonds)
        const joined = diamonds.join('')
        console.log(joined)
        return joined
    }
    
  }

diamond(3)
diamond(7)

diamond(9)
diamond(5)

// A much much better version of the code that works:
function diamond2 (n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) { 
      let len = Math.abs((n-2*i-1)/2)
      str += ' '.repeat(len)
      str += '*'.repeat(n-2*len)
      str += '\n'
    }
    return str
  }

diamond2(3)
diamond2(7)

diamond2(9)
diamond2(5)
