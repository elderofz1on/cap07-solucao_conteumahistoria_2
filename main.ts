input.onButtonPressed(Button.A, function () {
    // SE QtdeColunasJaDefinidas for menor ou igual a QtdeColunasAUsar, então ainda permite escolhas de categorias
    // SENAO
    // mostra mensagem que já foram escolhidas todas as categorias definidas.
    //         
    if (QtdeColunasJaDefinidas <= QtdeColunasAUsar) {
        basic.showString("C")
        basic.showNumber(Categoria)
        basic.showString("I")
        // Escolhe um número aleatório para definir qual item da categoria será utilizado.
        Item = randint(0, 9)
        basic.showNumber(Item)
        // Adiciona 1 à variável QtdeColunasJaDefinidas para validar o primeiro SE de controle de quantas categorias serão usadas no jogo.
        QtdeColunasJaDefinidas += 1
    } else {
        basic.showString("Ja foram definidas as ")
        basic.showNumber(QtdeColunasJaDefinidas)
        basic.showString(" categorias")
    }
    Categoria += 1
    basic.pause(100)
    basic.clearScreen()
})
// Equivale a um botão para reset, para reiniciar uma nova história.
input.onButtonPressed(Button.AB, function () {
    Categoria = 0
    QtdeColunasJaDefinidas = 1
    QtdeColunasAUsar = 6
    basic.showString("Nova historia")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("C")
    basic.showNumber(Categoria - 1)
    basic.showString("I")
    basic.showNumber(Item)
    basic.clearScreen()
})
let Item = 0
let QtdeColunasAUsar = 0
let QtdeColunasJaDefinidas = 0
let Categoria = 0
Categoria = 0
QtdeColunasJaDefinidas = 1
QtdeColunasAUsar = 6
