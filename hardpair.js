function checkBrackets(str) {
    let cRound = 0
    let cCurly = 0
    let cSquare = 0
    for (let char of str) {
        switch (char) {
            case "{":
                cCurly++
                break
            case "}":
                cCurly--
                break
            case "(":
                cRound++
                break
            case ")":
                cRound--
                break
            case "[":
                cSquare++
                break
            case "]":
                cSquare--
                break
        }

    }
return(cCurly==cRound&& cCurly==cSquare)
    
}
console.log(checkBrackets("((([[[{{{This is real}}}]]])))"))