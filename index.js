const readline = require('readline-sync')

//Função para perguntar pelo termo de busca.
function start(){
    const content = {}
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix =  askAndReturnPrefix()
    
        function askAndReturnSearchTerm(){
            //implementando a função utilizando biblioteca "Readline-Sync"
            //O módulo tem um método que pede o input como assinatura uma string que será utilizada no titulo da pergunta
            return readline.question('Type a Wikipedia search search term: ')
        }

        function askAndReturnPrefix(){
            const prefixes = ['Who is', 'What is', 'The history of']
            const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
            const selectedPrefixText = prefixes[selectedPrefixIndex]

            return selectedPrefixText
        }
        console.log(content)
}
start();